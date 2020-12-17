package com.szymon.websocket.sender;

import com.szymon.websocket.dao.GameObject;
import com.szymon.websocket.dao.OtherPlayerDao;
import com.szymon.websocket.model.sprite.Monster;
import org.springframework.http.MediaType;
import org.springframework.http.codec.ServerSentEvent;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.ResponseBodyEmitter;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.nio.charset.Charset;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class GameObjectSender implements ISender {

    private final SSEEmitterService sseEmitterService;

    public GameObjectSender(SSEEmitterService sseEmitterService) {
        this.sseEmitterService = sseEmitterService;
    }

    @Override
    public void send(String destination, GameObject[] players) {
        for (SseEmitter emitter : sseEmitterService.getUsersWithEmitter().values()) {
            try {
                synchronized (emitter) {
                    emitter.send(SseEmitter.event().name(destination).data(players));
                }
            } catch (Exception ex) {
                emitter.completeWithError(ex);
            }
        }
    }

    @Override
    public void sendToOther(String destination, GameObject player, String nickname, long requestTimestamp, int contentLength) {
        for(Map.Entry<String, SseEmitter> emitter : sseEmitterService.getUsersWithEmitter().entrySet()
                .stream()
                .filter(value -> !value.getKey().equals(nickname))
                .collect(Collectors.toList())
        ) {
            try {
                synchronized (emitter.getValue()) {
                    OtherPlayerDao playerWithMeasurementData = new OtherPlayerDao();

                    playerWithMeasurementData.setPlayer(player);
                    playerWithMeasurementData.setRequestTimestamp(requestTimestamp);
                    playerWithMeasurementData.setContentLength(contentLength);

                    emitter.getValue().send(SseEmitter.event().name(destination).data(playerWithMeasurementData));
                }
            } catch (Exception ex) {
                emitter.getValue().completeWithError(ex);
            }
        }
    }

    @Override
    public void send(String destination, GameObject gameObject) {
        for (SseEmitter emitter : sseEmitterService.getUsersWithEmitter().values()) {
            try {
                synchronized (emitter) {
                    SseEmitter.SseEventBuilder event = SseEmitter.event().name(destination).data(gameObject);
                    emitter.send(event);
                }
            } catch (Exception ex) {
                emitter.completeWithError(ex);
            }
        }
    }


    @Override
    public void sendMonsters(String destination, Monster[] monsters) {
        for (SseEmitter emitter : sseEmitterService.getUsersWithEmitter().values()) {
            for(Monster monster: monsters) {
                try {
                    synchronized (emitter) {
                        if(monster!=null) {
                            monster.setRequestTimestamp(System.currentTimeMillis());
                            SseEmitter.SseEventBuilder event = SseEmitter.event().
                                    data(monster).
                                    name(destination);
                            emitter.send(event);
                        }
                    }
                } catch (Exception ex) {
                    emitter.completeWithError(ex);
                }
            }
        }
    }
}
