package com.szymon.websocket.model.sprite;

import com.szymon.websocket.dao.AdditionalObject;
import com.szymon.websocket.dao.GameObject;
import lombok.AllArgsConstructor;
import lombok.Data;


import java.util.Objects;

@Data
@AllArgsConstructor
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
