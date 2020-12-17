package com.szymon.websocket.sender;


import com.szymon.websocket.dao.GameObject;
import com.szymon.websocket.model.sprite.Monster;
import com.szymon.websocket.model.sprite.Player;

public interface ISender {
    void send(String destination, GameObject gameObject);
    void send(String destination, GameObject[] gameObject);
    void sendMonsters(String destination, Monster[] monsters);
    void sendToOther(String destination, GameObject player, String nickname, long requestTimestamp, int contentLength);
}

