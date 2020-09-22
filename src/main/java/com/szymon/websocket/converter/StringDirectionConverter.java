package com.szymon.websocket.converter;

import com.szymon.websocket.model.sprite.Direction;
import net.badata.protobuf.converter.type.TypeConverter;

public class StringDirectionConverter implements TypeConverter<Direction, String> {

    @Override
    public Direction toDomainValue(Object o) {
        return Direction.valueOf((String) o);
    }

    @Override
    public String toProtobufValue(Object o) {
        return o.toString();
    }
}
