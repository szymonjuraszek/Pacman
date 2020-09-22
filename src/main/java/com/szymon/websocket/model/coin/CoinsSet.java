package com.szymon.websocket.model.coin;

import com.szymon.websocket.loader.JSONLoader;
import org.springframework.stereotype.Component;

import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class CoinsSet {
    private Set<Coin> coins;
    private static Set<Coin> refreshedCoins = ConcurrentHashMap.newKeySet();

    private final JSONLoader jsonLoader;

    public CoinsSet(JSONLoader jsonLoader) {
        this.jsonLoader = jsonLoader;
        coins = this.jsonLoader.loadCoins("board.json");
        refreshedCoins.addAll(coins);
    }

    public Set<Coin> getCoins() {
        return coins;
    }

    public void refreshCoins() {
        coins.addAll(refreshedCoins);
    }
}
