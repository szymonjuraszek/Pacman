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

        String[] stringData = new String(arr).substring(0, 19).split("[|]");
        int x = wrapped.getShort(19);
        int y = wrapped.getShort(21);
        int score = wrapped.getShort(23);
        int counter = wrapped.getShort(25);

        logger.debug(" nickname: "+ stringData[0] + " requestNumber: " + counter + " x: " + x + " y: " + y + " score: "+
                score + " direction: " + stringData[1].trim());

        return new Player(stringData[0], x, y, score, Enum.valueOf(Direction.class, stringData[1].trim()), counter);
    }
}
