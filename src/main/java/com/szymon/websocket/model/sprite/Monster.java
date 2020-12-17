package com.szymon.websocket.model.sprite;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.szymon.websocket.dao.GameObject;
import lombok.Data;

import java.util.Objects;

@Data
public class Monster extends GameObject {

    private int id;

    private int positionX;

    private int positionY;

    private Direction previousDirection;

    protected Long requestTimestamp;

    @JsonIgnore
    protected int contentLength;

    public Monster(int id, int positionX, int positionY, Direction previousDirection) {
        this.id = id;
        this.positionX = positionX;
        this.positionY = positionY;
        this.previousDirection = previousDirection;
    }

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
}
