package com.szymon.websocket.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

@Component
public class SessionDisconnectEventListener implements ApplicationListener<SessionDisconnectEvent> {

    private static final Logger logger = LoggerFactory.getLogger(SessionDisconnectEventListener.class);

    private final WebsocketSessionService websocketSessionService;

    public SessionDisconnectEventListener(WebsocketSessionService websocketSessionService) {
        this.websocketSessionService = websocketSessionService;
    }

    @Override
//    sessionId to wygenerowany identyfikator sesji przez Stomp
    public void onApplicationEvent(SessionDisconnectEvent event) {
        logger.debug("Disconnect: " + event.getSessionId());
        websocketSessionService.removeSession(event.getSessionId());
    }
}
