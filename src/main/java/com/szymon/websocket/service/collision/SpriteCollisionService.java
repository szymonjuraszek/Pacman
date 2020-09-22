package com.szymon.websocket.service.collision;

import com.szymon.websocket.model.game.Game;
import com.szymon.websocket.model.sprite.Player;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SpriteCollisionService {

    public boolean checkCollisionWithPlayers(int x, int y) {
        return Game.getGame().getPlayers().stream()
                .noneMatch(value -> {
                    double odl = Math.sqrt(Math.pow(x -
                            value.getPositionX(), 2)
                            + Math.pow(y -
                            value.getPositionY(), 2));
                    return (odl <= 32 && odl > 20);
                });
    }

    public boolean checkCollisionWithMonsters(int x, int y) {
        return Game.getGame().getMonsters().stream()
                .anyMatch(value -> {
                    double odl = Math.sqrt(Math.pow(x -
                            value.getPositionX(), 2)
                            + Math.pow(y -
                            value.getPositionY(), 2));
                    return (odl <= 32 && odl > 20);
                });
    }

    public Optional<Player> getPlayerWhoCollideWithMonster(int x, int y) {
        return Game.getGame().getPlayers().stream()
                .filter(value -> {
                    double odl = Math.sqrt(Math.pow(x -
                            value.getPositionX(), 2)
                            + Math.pow(y -
                            value.getPositionY(), 2));
                    return (odl <= 32 && odl > 20);
                })
                .findFirst();
    }
}
