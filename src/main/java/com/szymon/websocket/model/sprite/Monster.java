package com.szymon.websocket.model.sprite;


import com.szymon.websocket.converter.StringDirectionConverter;
import com.szymon.websocket.dao.GameObject;
import com.szymon.websocket.generated.MonsterGenerated;
import lombok.AllArgsConstructor;
import lombok.Data;
import net.badata.protobuf.converter.Converter;
import net.badata.protobuf.converter.annotation.ProtoClass;
import net.badata.protobuf.converter.annotation.ProtoField;

import java.util.Objects;

@Data
@AllArgsConstructor
@ProtoClass(MonsterGenerated.MonsterProto.class)
public class Monster extends GameObject {
    @ProtoField
    private int id;
    @ProtoField
    private int positionX;
    @ProtoField
    private int positionY;
    @ProtoField(converter = StringDirectionConverter.class)
    private Direction previousDirection;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        Monster monster = (Monster) o;
        return id == monster.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), id);
    }

    @Override
    public byte[] convertObjectIntoBytes() {
        return joinArray(
                toBytes((short) id),
                toBytes((short) positionX),
                toBytes((short) positionY)
        );
    }

    @Override
    public byte[] encodeDataByProtobuf() {
        return Converter.create().toProtobuf(MonsterGenerated.MonsterProto.class, this).toByteArray();
    }
}
