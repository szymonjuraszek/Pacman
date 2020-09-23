package com.szymon.websocket.service;

import com.szymon.websocket.model.game.Game;
import com.szymon.websocket.model.game.GameConstants;
import com.szymon.websocket.model.sprite.Direction;
import com.szymon.websocket.model.sprite.Monster;
import com.szymon.websocket.model.sprite.Player;
import com.szymon.websocket.service.collision.MapCollisionService;
import org.springframework.stereotype.Service;

@Service
public class DirectionMoveService {

    private final MapCollisionService mapCollisionService;

    public DirectionMoveService(MapCollisionService mapCollisionService) {
        this.mapCollisionService = mapCollisionService;
    }

    public int[] getNextPosition(Player player, Monster monster, int shortestDistance) {
        if ((monster.getPreviousDirection() == Direction.BOT) || (monster.getPreviousDirection() == Direction.TOP)) {
            return turnTop(player, monster, shortestDistance, false, 0);
        }

        return turnLeft(player, monster, shortestDistance, false, 0);
    }

    private int[] turnTop(Player player, Monster monster, int shortestDistance, boolean flag, int counter) {
        int x = monster.getPositionX();
        int y = monster.getPositionY() - GameConstants.STEP_Y;

//        Zabezpiecznie przed zapetleniem przydatne podczas ustawienia ze potwory nie zabijaja
        if (counter > 10) {
            monster.setPreviousDirection(Direction.NONE);
            return new int[]{monster.getPositionX(), monster.getPositionY()};
        }

        if (Direction.getOppositeDirection(monster.getPreviousDirection()) != Direction.BOT) {
            int futureTop = (int) Math.abs(Math.pow(player.getPositionX() - x, 2)
                    + Math.pow(player.getPositionY() - y, 2));

            if ((futureTop < shortestDistance) || flag) {
                if (mapCollisionService.check(x, y)) {
                    monster.setPreviousDirection(Direction.BOT);
                    return new int[]{x, y};
                } else {
                    if (Direction.getOppositeDirection(monster.getPreviousDirection()) == Direction.RIGHT) {
                        return theSameStep(monster);
                    }
                    return turnLeft(player, monster, shortestDistance, true, ++counter);
                }
            }
        }

        return turnLeft(player, monster, shortestDistance, false, ++counter);
    }

    private int[] turnLeft(Player player, Monster monster, int shortestDistance, boolean flag, int counter) {
        int x = monster.getPositionX() - GameConstants.STEP_X;
        int y = monster.getPositionY();

        int futureLeft = (int) Math.abs(Math.pow(player.getPositionX() - x, 2)
                + Math.pow(player.getPositionY() - y, 2));

        if ((futureLeft < shortestDistance) || flag) {
            if (mapCollisionService.check(x, y)) {
                monster.setPreviousDirection(Direction.RIGHT);
                return new int[]{x, y};
            } else {
                if (Direction.getOppositeDirection(monster.getPreviousDirection()) == Direction.TOP) {
                    return theSameStep(monster);
                }
                return turnBot(player, monster, shortestDistance, false, ++counter);
            }
        }

        return turnBot(player, monster, shortestDistance, false, ++counter);
    }

    private int[] turnBot(Player player, Monster monster, int shortestDistance, boolean flag, int counter) {
        int x = monster.getPositionX();
        int y = monster.getPositionY() + GameConstants.STEP_Y;

        if (Direction.getOppositeDirection(monster.getPreviousDirection()) != Direction.TOP) {
            int futureBot = (int) Math.abs(Math.pow(player.getPositionX() - x, 2)
                    + Math.pow(player.getPositionY() - y, 2));

            if (futureBot < shortestDistance || flag) {
                if (mapCollisionService.check(x, y)) {
                    monster.setPreviousDirection(Direction.TOP);
                    return new int[]{x, y};
                } else {
                    if (Direction.getOppositeDirection(monster.getPreviousDirection()) == Direction.LEFT) {
                        return theSameStep(monster);
                    }
                    return turnRight(player, monster, shortestDistance, true, ++counter);
                }
            }
        }

        return turnRight(player, monster, shortestDistance, false, ++counter);
    }

    private int[] turnRight(Player player, Monster monster, int shortestDistance, boolean flag, int counter) {
        int x = monster.getPositionX() + GameConstants.STEP_X;
        int y = monster.getPositionY();

        if (Direction.getOppositeDirection(monster.getPreviousDirection()) != Direction.LEFT) {
            int futureRight = (int) Math.abs(Math.pow(player.getPositionX() - x, 2)
                    + Math.pow(player.getPositionY() - y, 2));

            if (futureRight < shortestDistance || flag) {
                if (mapCollisionService.check(x, y)) {
                    monster.setPreviousDirection(Direction.LEFT);
                    return new int[]{x, y};
                } else {
                    if (Direction.getOppositeDirection(monster.getPreviousDirection()) == Direction.BOT) {
                        return theSameStep(monster);
                    }
                    return turnTop(player, monster, shortestDistance, true, ++counter);
                }
            }
        }

        return turnTop(player, monster, shortestDistance, false, ++counter);
    }

    //    Powoduje ze monster bedzie podazal sciezka pomimo ze nie bedzie to najkrotsza trasa
//    Musi cos takiego byc bo jesli bedzie monster na tej samej prostej i bedzie mial kolizje(bedzie chcial isc najkrotsza trasa)
//    to bez tego chodzilby tam i z powrotem
    private int[] theSameStep(Monster monster) {
        int x;
        int y;
        switch (Direction.getOppositeDirection(monster.getPreviousDirection())) {
            case TOP: {
                x = monster.getPositionX();
                y = monster.getPositionY() - GameConstants.STEP_Y;
                monster.setPreviousDirection(Direction.BOT);
                return new int[]{x, y};
            }
            case LEFT: {
                x = monster.getPositionX() - GameConstants.STEP_X;
                y = monster.getPositionY();
                monster.setPreviousDirection(Direction.RIGHT);
                return new int[]{x, y};
            }
            case BOT: {
                x = monster.getPositionX();
                y = monster.getPositionY() + GameConstants.STEP_Y;
                monster.setPreviousDirection(Direction.TOP);
                return new int[]{x, y};
            }
            case RIGHT: {
                x = monster.getPositionX() + GameConstants.STEP_X;
                y = monster.getPositionY();
                monster.setPreviousDirection(Direction.LEFT);
                return new int[]{x, y};
            }
        }

        return null;
    }

    // Metoda potrzebna do zresetowania kierunku. Gdy dodawany lub usuwany jest gracz monster moze zmienic kierunek na
    // przeciwny co jest normalnie niedozwolone
    public static void resetPreviousDirection() {
        Game.getGame().getMonsters().stream().forEach(value -> {
            value.setPreviousDirection(Direction.NONE);
        });
    }
}
