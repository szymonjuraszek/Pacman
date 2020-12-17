package com.szymon.websocket.sender;


import com.szymon.websocket.dao.GameObject;
import com.szymon.websocket.dao.HeaderStatus;

public interface ISender {
    void send(String destination, GameObject gameObject);
    void sendWithTimestamp(String destination, GameObject object, long requestTimestamp);
    void sendToUser(String destination, GameObject gameObject, String userSession, long requestTimestamp);
    void sendMonsters(String destination, GameObject[] gameObject);
}
