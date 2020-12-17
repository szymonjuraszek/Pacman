package com.szymon.websocket.controller;

import com.szymon.websocket.config.WebsocketSessionService;
import com.szymon.websocket.dao.HeaderStatus;
import com.szymon.websocket.dao.PlayerWithOperation;
import com.szymon.websocket.model.coin.Coin;
import com.szymon.websocket.model.coin.CoinsSet;
import com.szymon.websocket.model.game.Game;
import com.szymon.websocket.model.sprite.Player;
import com.szymon.websocket.sender.ISender;
import com.szymon.websocket.service.CoinService;
import com.szymon.websocket.service.PlayerService;
import com.szymon.websocket.service.collision.PositionSetterService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.stereotype.Controller;

import java.security.Principal;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import static com.szymon.websocket.service.DirectionMoveService.resetPreviousDirection;


@Controller
public class GameController {

    private final Logger logger = LoggerFactory.getLogger(GameController.class);

    private final PlayerService playerService;

    private final PositionSetterService positionSetterService;

    private final WebsocketSessionService websocketSessionService;

    private final CoinsSet coinsSet;

    private final CoinService coinService;

    private final ISender spriteSender;

    public GameController(
            PlayerService playerService,
            PositionSetterService positionSetterService,
            WebsocketSessionService websocketSessionService,
            CoinsSet coinsSet,
            CoinService coinService,
            ISender spriteSender
    ) {
        this.playerService = playerService;
        this.positionSetterService = positionSetterService;
        this.websocketSessionService = websocketSessionService;
        this.coinsSet = coinsSet;
        this.coinService = coinService;
        this.spriteSender = spriteSender;
    }

    //    JSON
    @MessageMapping("/send/position")
    public void updatePositionForPlayer(Player player, Principal user, @Header("requestTimestamp") Long requestTimestamp) {
//        logger.info("Player: " + player.getNickname() + "x: " + player.getPositionX() + " y: " + player.getPositionY());

        Optional<PlayerWithOperation> playerWithOperation = playerService.move(player);

        if (playerWithOperation.isPresent()) {
            switch (playerWithOperation.get().getOperation()) {
                case REMOVE: {
                    this.spriteSender.send("/pacman/remove/player", playerWithOperation.get().getPlayer());
                    break;
                }
                case UPDATE: {
                    this.spriteSender.sendWithTimestamp("/pacman/update/player", playerWithOperation.get().getPlayer(), requestTimestamp);
                    break;
                }
            }
        } else {
            this.spriteSender.sendToUser("/queue/correct/player", player, user.getName(), requestTimestamp);
        }
    }

    @MessageMapping("/add/player")
    @SendTo("/pacman/add/players")
    public Set<Player> addPlayer(Player player) {
        int[] startPosition = positionSetterService.getStartPositionForFigure();
        logger.info("Dodaje gracza o nicku: " + player.getNickname() + " i pozycji X-> " + startPosition[0] + " pozycji Y-> " + startPosition[1]);
        Player newPlayer = new Player(player.getNickname(), startPosition[0], startPosition[1]);

        coinService.collectCoin(newPlayer);
        Game.getGame().getPlayers().add(newPlayer);
        resetPreviousDirection();

        return Game.getGame().getPlayers();
    }

    @MessageMapping("/join/game")
    @SendToUser("/queue/reply")
    public Set<Coin> joinToGame(Player player, SimpMessageHeaderAccessor headerAccessor) {
        logger.error("Player: " + player);
        if (websocketSessionService.checkUser(player.getNickname())) {
            logger.error("Ten samy nick, nie mozna utworzyc uzytkownika!");
            return new HashSet<>();
        } else {
            websocketSessionService.saveSession(headerAccessor.getSessionId(), player.getNickname());
            return coinsSet.getCoins();
        }
    }
}
