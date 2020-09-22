package com.szymon.websocket.loader;


import com.szymon.websocket.model.coin.Coin;

import java.util.Set;

@FunctionalInterface
public interface ICoinLoader {

    Set<Coin> loadCoins(String jsonFileName);
}
