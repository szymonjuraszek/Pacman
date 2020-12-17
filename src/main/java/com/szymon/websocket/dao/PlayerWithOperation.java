package com.szymon.websocket.dao;

import com.szymon.websocket.model.sprite.Player;
import lombok.Data;

@Data
public class PlayerWithOperation {
    private Player player;
    private Operation operation;

    public PlayerWithOperation(Player player, Operation operation) {
        this.player = player;
        this.operation = operation;
    }
}
