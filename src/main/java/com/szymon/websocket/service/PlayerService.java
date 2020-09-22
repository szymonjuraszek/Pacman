package com.szymon.websocket.service;

import com.szymon.websocket.dao.Operation;
import com.szymon.websocket.dao.PlayerWithOperation;
import com.szymon.websocket.model.game.Game;
import com.szymon.websocket.model.sprite.Player;
import com.szymon.websocket.service.collision.MapCollisionService;
import com.szymon.websocket.service.collision.SpriteCollisionService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PlayerService {

    Logger logger = LoggerFactory.getLogger(PlayerService.class);

    private final MapCollisionService mapCollisionService;

    private final CoinService coinService;

    private final SpriteCollisionService spriteCollisionService;

    public PlayerService(
            MapCollisionService mapCollisionService,
            CoinService coinService,
            SpriteCollisionService spriteCollisionService
    ) {
        this.mapCollisionService = mapCollisionService;
        this.coinService = coinService;
        this.spriteCollisionService = spriteCollisionService;
    }

    public Optional<PlayerWithOperation> move(Player player) {
        if (mapCollisionService.checkPositionForPlayer(player)) {
//            if (spriteCollisionService.checkCollisionWithMonsters(player.getPositionX(), player.getPositionY())) {
//                logger.info("Gracz wpada na potwora i ginie");
//
//                if (Game.getGame().getPlayers().remove(player)) {
//                    return Optional.of(new PlayerWithOperation(player, Operation.REMOVE));
//                }
//
//            } else
//                if (spriteCollisionService.checkCollisionWithPlayers(player.getPositionX(), player.getPositionY())) {
            synchronized (Game.getGame().getPlayers()) {
                if (Game.getGame().getPlayers().remove(player)) {
                    this.coinService.collectCoin(player);
                    Game.getGame().getPlayers().add(player);
                    return Optional.of(new PlayerWithOperation(player, Operation.UPDATE));
                }
            }
//            }
        }

        return Optional.empty();
    }
}
