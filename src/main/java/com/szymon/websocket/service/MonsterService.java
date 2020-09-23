package com.szymon.websocket.service;

import com.szymon.websocket.dao.GameObject;
import com.szymon.websocket.model.game.Game;
import com.szymon.websocket.model.sprite.Direction;
import com.szymon.websocket.model.sprite.Monster;
import com.szymon.websocket.model.sprite.Player;
import com.szymon.websocket.sender.Destination;
import com.szymon.websocket.sender.ISender;
import com.szymon.websocket.service.collision.PositionSetterService;
import com.szymon.websocket.service.collision.SpriteCollisionService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Optional;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.function.Function;
import java.util.stream.Collectors;

import static com.szymon.websocket.service.DirectionMoveService.resetPreviousDirection;

@Service
public class MonsterService implements IMovement<Monster> {

    Logger logger = LoggerFactory.getLogger(MonsterService.class);

    private final ISender spriteSender;

    private final PositionSetterService positionSetterService;

    private final SpriteCollisionService spriteCollisionService;

    private final DirectionMoveService directionMoveService;

    public MonsterService(
            ISender spriteSender,
            PositionSetterService positionSetterService,
            SpriteCollisionService spriteCollisionService,
            DirectionMoveService directionMoveService
    ) {
        this.spriteSender = spriteSender;
        this.positionSetterService = positionSetterService;
        this.spriteCollisionService = spriteCollisionService;
        this.directionMoveService = directionMoveService;
        createMonsters();
    }

    private void createMonsters() {
        for (int i = 0; i < Game.NUMBER_OF_MONSTERS; i++) {
            int[] position = positionSetterService.getStartPositionForFigure();
            Game.getGame().getMonsters().add(new Monster(i, position[0], position[1], Direction.NONE));

            new Thread(() -> {
                int idMonster = Integer.parseInt(Thread.currentThread().getName());
                logger.info("Stworzylem potwora o id: " + idMonster);
                Monster monster = Game.getGame().getMonsters().get(idMonster);

                while (true) {
                    try {
                        Thread.sleep(23 + idMonster*2);
                        move(monster);
                    } catch (InterruptedException e) {
                        logger.error("Przerwano watek potwora");
                        Thread.currentThread().interrupt();
                    }
                }
            }, String.valueOf(i)).start();
        }
        GameObject[] myArray = new GameObject[5];

        Runnable runnable = () -> {
            Game.getGame().getMonsters().toArray(myArray);
            this.spriteSender.sendMonsters(Destination.UPDATE_MONSTER, myArray);
        };
        ScheduledExecutorService service = Executors
                .newSingleThreadScheduledExecutor();
        service.scheduleAtFixedRate(runnable, 0, 30, TimeUnit.MILLISECONDS);
    }

    @Override
    public void move(Monster monster) {
        int[] position = chasePlayer(monster);

        monster.setPositionX(position[0]);
        monster.setPositionY(position[1]);

        Optional<Player> playerToRemove = spriteCollisionService.getPlayerWhoCollideWithMonster(position[0], position[1]);

        if (playerToRemove.isPresent()) {
            resetPreviousDirection();
            logger.info("Monster wpada na Gracza i go zabija");
            Game.getGame().getPlayers().remove(playerToRemove.get());
            this.spriteSender.send(Destination.REMOVE_PLAYER, playerToRemove.get());
        }

        if (Game.getGame().getPlayers().size() != 0) {
            synchronized (Game.getGame().getMonsters()) {
                Game.getGame().getMonsters().remove(monster);
                Game.getGame().getMonsters().add(monster);
            }
        }
    }

    private int[] chasePlayer(Monster monster) {
        Map<Player, Integer> distanceBetweenMonsterAndPlayers;
        synchronized (Game.getGame().getPlayers()) {
            distanceBetweenMonsterAndPlayers = Game.getGame().getPlayers().stream()
                    .collect(Collectors.toMap(
                            Function.identity(),
                            player -> (int) Math.abs(Math.pow(player.getPositionX() - monster.getPositionX(), 2)
                                    + Math.pow(player.getPositionY() - monster.getPositionY(), 2)))
                    );
        }

        Player player = null;
        int shortestDistance = Integer.MAX_VALUE;
        for (Map.Entry<Player, Integer> entry : distanceBetweenMonsterAndPlayers.entrySet()) {
            if (shortestDistance > entry.getValue()) {
                player = entry.getKey();
                shortestDistance = entry.getValue();
            }
        }

        if (player != null) {
            return directionMoveService.getNextPosition(player, monster, shortestDistance);
        }

        return new int[]{monster.getPositionX(), monster.getPositionY()};
    }
}
