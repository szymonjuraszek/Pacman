package com.szymon.websocket.sender;


import com.szymon.websocket.dao.GameObject;
import com.szymon.websocket.dao.HeaderStatus;

public interface ISender {
    void send(String destination, GameObject gameObject);
    void sendWithTimestamp(String destination, GameObject object, HeaderStatus status, long requestTimestamp, int contentLength);
    void sendToUser(String destination, GameObject gameObject, HeaderStatus status, String userSession, long requestTimestamp, int contentLength);
    default void sendMonsters(String destination, GameObject[] gameObject) {

    }
}
