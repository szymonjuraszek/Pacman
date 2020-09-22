package com.szymon.websocket.config;

import org.springframework.http.server.ServerHttpRequest;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.support.DefaultHandshakeHandler;

import java.security.Principal;
import java.util.Map;
import java.util.UUID;

//tutaj generuje sie usr-name ktory wysyla sie w ramce (CONNECTED stomp),
// uzywany jest to wysylania wiadomosci do konkretnego uzytkownika
public class WebsocketCustomHandshakeHandler extends DefaultHandshakeHandler {
    @Override
    protected Principal determineUser(
            ServerHttpRequest request,
            WebSocketHandler wsHandler,
            Map<String, Object> attributes
    ) {
        return new StompPrincipal(UUID.randomUUID().toString());
    }
}
