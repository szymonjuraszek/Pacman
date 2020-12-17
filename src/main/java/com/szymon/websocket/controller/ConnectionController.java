package com.szymon.websocket.controller;

import com.szymon.websocket.config.Credential;
import com.szymon.websocket.config.WebsocketSessionService;
import com.szymon.websocket.model.sprite.Player;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.rsocket.RSocketRequester;
import org.springframework.messaging.rsocket.annotation.ConnectMapping;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Controller;

@Controller
public class ConnectionController {

    private final Logger logger = LoggerFactory.getLogger(ConnectionController.class);

    private final WebsocketSessionService websocketSessionService;

    public ConnectionController(WebsocketSessionService websocketSessionService) {
        this.websocketSessionService = websocketSessionService;
    }

    @ConnectMapping
    void joinToGame(RSocketRequester rSocketRequester, Credential credential) {
        if (websocketSessionService.checkUser(credential.getNickname())) {
            logger.error("Istnieje juz taki uzytkownik: " + credential.getNickname());
            rSocketRequester.rsocket().dispose();
        } else {
            logger.error("Zapisuje uzytkownika o nicku: " + credential.getNickname());
            websocketSessionService.saveSession(credential.getNickname(), rSocketRequester);
        }
    }

    @MessageMapping("disconnect")
    public void disconnect(Player player) {
        websocketSessionService.removeSession(player.getNickname());
    }
}

