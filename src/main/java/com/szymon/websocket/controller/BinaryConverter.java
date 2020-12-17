package com.szymon.websocket.controller;

import com.szymon.websocket.model.sprite.Direction;
import com.szymon.websocket.model.sprite.Player;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;

@Component
public class BinaryConverter {

    private final Logger logger = LoggerFactory.getLogger(BinaryConverter.class);

    public Player convert(byte[] arr) {
        ByteBuffer wrapped = ByteBuffer.wrap(arr); // big-endian by default
        wrapped.order(ByteOrder.LITTLE_ENDIAN);

        String nickname = new String(arr).substring(0, 10).trim();
        int x = wrapped.getShort(10);
        int y = wrapped.getShort(12);
        int score = wrapped.getShort(14);
        int counter = wrapped.getShort(16);
        String stepDirection = new String(arr).substring(18, 21);

        logger.debug(" nickname: "+ nickname + " requestNumber: " + counter + " x: " + x + " y: " + y + " score: "+
                score + " direction: " + stepDirection);

        return new Player(nickname, x, y, score, Enum.valueOf(Direction.class, stepDirection), counter);
    }
}
