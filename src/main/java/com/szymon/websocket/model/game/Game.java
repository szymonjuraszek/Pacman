package com.szymon.websocket.model.game;

import com.szymon.websocket.model.sprite.Monster;
import com.szymon.websocket.model.sprite.Player;
import lombok.Data;

import java.util.List;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;

@Data
public class Game {
    public static final int NUMBER_OF_MONSTERS = 5;
    private Set<Player> players = ConcurrentHashMap.newKeySet();
    private List<Monster> monsters  = new CopyOnWriteArrayList<>();
    private static final Game game = new Game();

    private Game() {
    }

    public static Game getGame() {
        return game;
    }
}
