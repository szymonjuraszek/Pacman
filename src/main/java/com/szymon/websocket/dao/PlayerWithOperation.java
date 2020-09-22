package com.szymon.websocket.dao;

import lombok.Data;

@Data
public class PlayerWithOperation {
    private GameObject player;
    private Operation operation;

    public PlayerWithOperation(GameObject player, Operation operation) {
        this.player = player;
        this.operation = operation;
    }

    public PlayerWithOperation(GameObject player) {
        this.player = player;
    }
}
