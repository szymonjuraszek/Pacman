package com.szymon.websocket.sender;

import com.szymon.websocket.dao.GameObject;
import com.szymon.websocket.dao.HeaderStatus;
import org.springframework.context.annotation.Profile;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
@Profile("protobuf-format")
public class ProtobufSender implements ISender {
    private final SimpMessagingTemplate template;

    public ProtobufSender(SimpMessagingTemplate template) {
        this.template = template;
    }

    @Override
    public void send(String destination, GameObject gameObject) {
        this.template.convertAndSend(destination, gameObject.encodeDataByProtobuf());
    }

    @Override
    public void sendWithTimestamp(String destination, GameObject gameObject, HeaderStatus status,
                                  long requestTimestamp) {
        this.template.convertAndSend(destination, gameObject.encodeDataByProtobuf(), Map.of(
                "requestTimestamp", requestTimestamp,
                "status", status
        ));
    }

    @Override
    public void sendToUser(String destination, GameObject gameObject, HeaderStatus status,
                           String userSession, long requestTimestamp) {
        this.template.convertAndSendToUser(userSession, destination, gameObject.encodeDataByProtobuf(), Map.of(
                "requestTimestamp", requestTimestamp,
                "status", status
        ));
    }

    @Override
    public void sendMonsters(String destination, GameObject[] gameObject) {
        for (int i = 0; i < 5; i++) {
            if (gameObject[i] != null) {
                this.template.convertAndSend(destination, gameObject[i].encodeDataByProtobuf(), Map.of(
                        "requestTimestamp", System.currentTimeMillis()));
            }
        }
    }
}
