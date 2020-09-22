package com.szymon.websocket.sender;

public interface Destination {
    String GET_COIN = "/pacman/get/coin";
    String REFRESH_COINS = "/pacman/refresh/coins";
    String REMOVE_PLAYER = "/pacman/remove/player";
    String UPDATE_MONSTER = "/pacman/update/monster";
    String ADD_PLAYERS = "/pacman/add/players";
    String UPDATE_PLAYER = "/pacman/update/player";
    String SPECIFIC_USER = "/queue/player";
}
