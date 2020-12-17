package com.szymon.websocket.service.collision;

import com.szymon.websocket.model.collision.MapCollisionBoard;
import com.szymon.websocket.model.game.GameConstants;
import com.szymon.websocket.model.sprite.Player;
import org.springframework.stereotype.Service;

@Service
public class MapCollisionService {

    private final MapCollisionBoard mapCollisionBoard;
    private final static int RANGE = 15;

    public MapCollisionService(MapCollisionBoard mapCollisionBoard) {
        this.mapCollisionBoard = mapCollisionBoard;
    }

    public boolean check(int x, int y) {
        if (mapCollisionBoard.getBoard()
                .get((y - RANGE) / GameConstants.FRAME_Y)
                .get(x / GameConstants.FRAME_X)) {
            return false;
        }
        if (mapCollisionBoard.getBoard()
                .get((y + RANGE) / GameConstants.FRAME_Y)
                .get(x / GameConstants.FRAME_X)) {
            return false;
        }
        if (mapCollisionBoard.getBoard()
                .get(y / GameConstants.FRAME_Y)
                .get((x + RANGE) / GameConstants.FRAME_X)) {
            return false;
        }
        if (mapCollisionBoard.getBoard()
                .get(y / GameConstants.FRAME_Y)
                .get((x - RANGE) / GameConstants.FRAME_X)) {
            return false;
        }
        if (mapCollisionBoard.getBoard()
                .get((y - RANGE) / GameConstants.FRAME_Y)
                .get((x - RANGE) / GameConstants.FRAME_X)) {
            return false;
        }
        if (mapCollisionBoard.getBoard()
                .get((y + RANGE) / GameConstants.FRAME_Y)
                .get((x + RANGE) / GameConstants.FRAME_X)) {
            return false;
        }
        if (mapCollisionBoard.getBoard()
                .get((y - RANGE) / GameConstants.FRAME_Y)
                .get((x + RANGE) / GameConstants.FRAME_X)) {
            return false;
        }
        return !mapCollisionBoard.getBoard()
                .get((y + RANGE) / GameConstants.FRAME_Y)
                .get((x - RANGE) / GameConstants.FRAME_X);
    }

    public boolean checkPositionForPlayer(Player player) {
        int x = player.getPositionX();
        int y = player.getPositionY();

        switch (player.getStepDirection()) {
            case VER: {
                if (x % 32 == 16) {
                    return check(x, y);
                } else {
                    int futureX = ((int) (Math.floor(x / 32)) * 32) + 16;
                    int futureY = ((int) (Math.floor(y / 32)) * 32) + (y % 32);

                    if (!check(futureX, futureY)) {
                        return false;
                    }

                    player.setPositionX(futureX);
                    player.setPositionY(futureY);

                    return true;
                }
            }
            case HOR: {
                if (y % 32 == 16) {
                    return check(x, y);
                } else {
                    int futureX = ((int) (Math.floor(x / 32)) * 32) + (x % 32);
                    int futureY = ((int) (Math.floor(y / 32)) * 32) + 16;

                    if (!check(futureX, futureY)) {
                        return false;
                    }

                    player.setPositionX(futureX);
                    player.setPositionY(futureY);

                    return true;
                }
            }
            default: {
                System.out.println("ERROR not exist direction");
                return false;
            }
        }
    }
}
