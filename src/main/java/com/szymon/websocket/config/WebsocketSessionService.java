package com.szymon.websocket.config;

import com.szymon.websocket.model.game.Game;
import com.szymon.websocket.model.sprite.Player;
import com.szymon.websocket.sender.ISender;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

import static com.szymon.websocket.service.DirectionMoveService.resetPreviousDirection;

@Service
public class WebsocketSessionService {

    private final Map<String, String> usersWithSessions = new ConcurrentHashMap<>();

    private final ISender spriteSender;

    public WebsocketSessionService(ISender spriteSender) {
        this.spriteSender = spriteSender;
    }

    public void saveSession(String sessionId, String nickname) {
        usersWithSessions.put(nickname, sessionId);
    }

    public void removeSession(String sessionId) {
        for (Map.Entry<String, String> entry : usersWithSessions.entrySet()) {
            if (entry.getValue().equals(sessionId)) {
                String nickname = entry.getKey();
                usersWithSessions.remove(entry.getKey());

                System.out.println("Gracz: " + nickname + " wychodzi z gry!");

                Optional<Player> playerToRemove = Game.getGame().getPlayers().stream()
                        .filter(player -> player.getNickname().equals(nickname))
                        .findAny();

                if (playerToRemove.isPresent()) {
                    resetPreviousDirection();
                    Game.getGame().getPlayers().remove(playerToRemove.get());
                    this.spriteSender.send("/pacman/remove/player", playerToRemove.get());
                }

                return;
            }
        }


    }

    public boolean checkUser(String nickname) {
        return usersWithSessions.containsKey(nickname);
    }
}
