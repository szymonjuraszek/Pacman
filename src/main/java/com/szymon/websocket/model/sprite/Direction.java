package com.szymon.websocket.model.sprite;

public enum Direction {
    HOR,
    VER,
    LEFT,
    RIGHT,
    BOT,
    TOP,
    NONE;

    public static Direction getOppositeDirection(Direction previousDirection) {
        switch (previousDirection) {
            case TOP: {
                return Direction.BOT;
            }
            case LEFT: {
                return Direction.RIGHT;
            }
            case BOT: {
                return Direction.TOP;
            }
            case RIGHT: {
                return Direction.LEFT;
            }
        }

        return Direction.NONE;
    }


}
