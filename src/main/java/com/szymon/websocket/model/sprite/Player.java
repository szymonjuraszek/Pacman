package com.szymon.websocket.model.sprite;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.szymon.generated.PlayerGenerated;
import com.szymon.websocket.converter.StringDirectionConverter;
import com.szymon.websocket.dao.AdditionalObject;
import com.szymon.websocket.dao.GameObject;
import lombok.Data;
import net.badata.protobuf.converter.Converter;
import net.badata.protobuf.converter.annotation.ProtoClass;
import net.badata.protobuf.converter.annotation.ProtoField;
import org.apache.commons.lang3.StringUtils;

import java.util.Objects;

@Data
@ProtoClass(PlayerGenerated.PlayerProto.class)
public class Player extends GameObject {
    @JsonIgnore
    private final StringBuilder stringBuilder = new StringBuilder(20);

    private AdditionalObject[] someData;

    @ProtoField
    private String nickname;
    @ProtoField
    private int positionX;
    @ProtoField
    private int positionY;
    @ProtoField
    private int score;
    @ProtoField(converter = StringDirectionConverter.class)
    private Direction stepDirection;
    @ProtoField
    private int version;

    public Player() {
    }

    public Player(String nickname) {
        this.nickname = nickname;
    }

    public Player(String nickname, int x, int y) {
        this.nickname = nickname;
        this.positionX = x;
        this.positionY = y;
    }

    public Player(String nickname, int positionX, int positionY, int score, Direction stepDirection, int version) {
        this.nickname = nickname;
        this.positionX = positionX;
        this.positionY = positionY;
        this.score = score;
        this.stepDirection = stepDirection;
        this.version = version;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Player player = (Player) o;
        return nickname.equals(player.nickname);
    }

    @Override
    public int hashCode() {
        return Objects.hash(nickname);
    }

    public void incrementScore() {
        score += 1;
    }

    @Override
    public byte[] convertObjectIntoBytes() {
        String textData = stringBuilder
                .append(nickname)
                .insert(stringBuilder.length(), StringUtils.repeat(" ", 10-stringBuilder.length()))
                .toString();

        return joinArray(
                textData.getBytes(),
                toBytes((short) positionX),
                toBytes((short) positionY),
                toBytes((short) score),
                toBytes((short) version)
        );
    }

    @Override
    public byte[] encodeDataByProtobuf() {
        return Converter.create().toProtobuf(PlayerGenerated.PlayerProto.class, this).toByteArray();
    }


    public Direction getStepDirection() {
        return stepDirection;
    }

    public void setStepDirection(Direction stepDirection) {
        this.stepDirection = stepDirection;
    }
}
