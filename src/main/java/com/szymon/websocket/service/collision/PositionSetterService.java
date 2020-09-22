package com.szymon.websocket.service.collision;

import com.szymon.websocket.model.collision.MapCollisionBoard;
import com.szymon.websocket.model.game.Game;
import com.szymon.websocket.model.game.GameConstants;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class PositionSetterService {

    private final MapCollisionBoard mapCollisionBoard;

    private static final Random random = new Random();

    public PositionSetterService(MapCollisionBoard mapCollisionBoard) {
        this.mapCollisionBoard = mapCollisionBoard;
    }

    public int[] getStartPositionForFigure() {
        int[] position = new int[2];

        int x;
        int y;
        while (true) {
            x = random.nextInt(mapCollisionBoard.getSizeX());
            y = random.nextInt(mapCollisionBoard.getSizeY());
            if (!mapCollisionBoard.getBoard().get(y).get(x)) {
                position[0] = (x * GameConstants.FRAME_X) + GameConstants.FRAME_X / 2;
                position[1] = (y * GameConstants.FRAME_Y) + GameConstants.FRAME_Y / 2;

                if (Game.getGame().getPlayers().stream()
                        .noneMatch(player -> player.getPositionX() == position[0] && player.getPositionX() == position[1])
                        && Game.getGame().getMonsters().stream()
                        .noneMatch(monster -> monster.getPositionX() == position[0] && monster.getPositionX() == position[1])) {
                    return position;
                }
            }
        }
    }
}
