package com.szymon.websocket.sender;

import com.szymon.websocket.dao.GameObject;
import com.szymon.websocket.dao.HeaderStatus;
import org.springframework.context.annotation.Profile;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Set;

import static com.szymon.websocket.sender.Destination.*;

@Service
@Profile("json-format")
public class JsonSender extends Processor implements ISender {
    @Override
    public void send(String destination, GameObject gameObject) {
        switch (destination) {
            case GET_COIN: {
                this.sinkCoin.next(gameObject);
                break;
            }
            case REFRESH_COINS: {
                this.sinkCoinRefresh.next(gameObject);
                break;
            }
            case REMOVE_PLAYER: {
                this.sinkPlayerRemove.next(gameObject);
                break;
            }
            case UPDATE_MONSTER: {
                this.sinkMonster.next(gameObject);
                break;
            }
        }
    }

    @Override
    public void sendWithTimestamp(String destination, GameObject object, HeaderStatus status, long requestTimestamp, int contentLength) {
        object.setRequestTimestamp(requestTimestamp);
        object.setContentLength(contentLength);
        this.sinkPlayerUpdate.next(object);
    }

    @Override
    public void sendToUser(String destination, GameObject gameObject, HeaderStatus status, String session, long requestTimestamp, int contentLength) {
        gameObject.setRequestTimestamp(requestTimestamp);
        gameObject.setContentLength(contentLength);
        this.processorForUser.get(session).getSink().next(gameObject);
    }

    @Override
    public void sendMonsters(String destination, GameObject[] gameObject) {
        for (int i = 0; i < 5; i++) {
            if (gameObject[i] != null) {
                gameObject[i].setRequestTimestamp(System.currentTimeMillis());
                this.sinkMonster.next(gameObject[i]);
            }
        }
    }

    @Override
    public void send(Set<?> gameObjects) {
        this.sinkPlayerAdd.next(gameObjects);
    }
}

