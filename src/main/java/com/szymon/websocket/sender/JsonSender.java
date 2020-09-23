package com.szymon.websocket.sender;

import com.szymon.websocket.dao.GameObject;
import com.szymon.websocket.dao.HeaderStatus;
import org.springframework.context.annotation.Profile;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
@Profile("json-format")
public class JsonSender implements ISender {

    private final SimpMessagingTemplate template;

    public JsonSender(SimpMessagingTemplate template) {
        this.template = template;
    }

    @Override
    public void send(String destination, GameObject gameObject) {
        this.template.convertAndSend(destination, gameObject);
    }

    @Override
    public void sendWithTimestamp(String destination, GameObject gameObject, HeaderStatus status,
                                  long requestTimestamp,int contentLength) {
        this.template.convertAndSend(destination, gameObject, Map.of(
                "requestTimestamp", requestTimestamp,
                "contentLength", contentLength,
                "status", status
        ));
    }

    @Override
    public void sendToUser(String destination, GameObject gameObject, HeaderStatus status,
                           String userSession, long requestTimestamp, int contentLength) {
        this.template.convertAndSendToUser(userSession, destination, gameObject, Map.of(
                "requestTimestamp", requestTimestamp,
                "contentLength", contentLength,
                "status", status
        ));
    }

    @Override
    public void sendMonsters(String destination, GameObject[] gameObject) {
        for(int i=0;i<5;i++) {
            if(gameObject[i]!= null) {
                this.template.convertAndSend(destination, gameObject[i], Map.of("timestamp", System.currentTimeMillis()));
            }
        } }
}
