package com.szymon.websocket.model.sprite;

import com.szymon.websocket.dao.AdditionalObject;
import com.szymon.websocket.dao.GameObject;
import lombok.Data;

import java.util.Objects;

@Data
public class Player extends GameObject {

    private String nickname;

    private int positionX;

    private int positionY;

    private int score;

    private Direction stepDirection;

    private int version;

    private AdditionalObject[] additionalData;

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
}
