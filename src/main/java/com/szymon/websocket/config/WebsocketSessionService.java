package com.szymon.websocket.config;

import com.szymon.websocket.model.game.Game;
import com.szymon.websocket.model.sprite.Player;
import com.szymon.websocket.sender.Destination;
import com.szymon.websocket.sender.ISender;
import com.szymon.websocket.sender.Processor;
import org.springframework.messaging.rsocket.RSocketRequester;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

import static com.szymon.websocket.service.DirectionMoveService.resetPreviousDirection;

@Service
public class WebsocketSessionService {

    private final Map<String, RSocketRequester> usersWithRSocketRequester = new ConcurrentHashMap<>();

    private final ISender spriteSender;

    private final Processor processors;

    public WebsocketSessionService(ISender spriteSender, Processor processors) {
        this.spriteSender = spriteSender;
        this.processors = processors;
    }

    public void saveSession(String nickname, RSocketRequester rSocketRequester) {
        usersWithRSocketRequester.put(nickname, rSocketRequester);
        processors.addProcessorForUser(nickname);
    }

    public void removeSession(String nickname) {
        System.out.println("Gracz: " + nickname + " wychodzi z gry!");
        usersWithRSocketRequester.remove(nickname);
        processors.removeProcessorForUser(nickname);

        Optional<Player> playerToRemove = Game.getGame().getPlayers().stream()
                .filter(player -> player.getNickname().equals(nickname))
                .findAny();

        if (playerToRemove.isPresent()) {
            resetPreviousDirection();
            Game.getGame().getPlayers().remove(playerToRemove.get());
            spriteSender.send(Destination.REMOVE_PLAYER, playerToRemove.get());
        }
    }

    public boolean checkUser(String nickname) {
        return usersWithRSocketRequester.containsKey(nickname);
    }
}
