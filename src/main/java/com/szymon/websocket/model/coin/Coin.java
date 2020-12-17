package com.szymon.websocket.model.coin;

import com.szymon.websocket.dao.GameObject;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Coin extends GameObject {

    private int positionX;

    private int positionY;
}
