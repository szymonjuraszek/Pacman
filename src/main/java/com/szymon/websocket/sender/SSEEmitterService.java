package com.szymon.websocket.sender;

import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class SSEEmitterService {

    private Map<String, SseEmitter> usersWithEmitter = new ConcurrentHashMap<>();

    public Map<String, SseEmitter> getUsersWithEmitter() {
        return usersWithEmitter;
    }

    public void saveEmitter(String nickname, SseEmitter emitter) {
        usersWithEmitter.put(nickname, emitter);
    }

    public void removeEmitter(String nickname) {
        usersWithEmitter.remove(nickname);
    }

    public boolean checkUser(String nickname) {
        return usersWithEmitter.containsKey(nickname);
    }
}


