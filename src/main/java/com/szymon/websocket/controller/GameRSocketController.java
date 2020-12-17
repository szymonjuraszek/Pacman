package com.szymon.websocket.controller;

import com.szymon.websocket.dao.HeaderStatus;
import com.szymon.websocket.dao.PlayerWithOperation;
import com.szymon.websocket.model.coin.Coin;
import com.szymon.websocket.model.coin.CoinsSet;
import com.szymon.websocket.model.game.Game;
import com.szymon.websocket.model.sprite.Player;
import com.szymon.websocket.sender.Destination;
import com.szymon.websocket.sender.ISender;
import com.szymon.websocket.service.CoinService;
import com.szymon.websocket.service.PlayerService;
import com.szymon.websocket.service.collision.PositionSetterService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import reactor.core.publisher.Mono;

import java.util.Optional;
import java.util.Set;

import static com.szymon.websocket.service.DirectionMoveService.resetPreviousDirection;

@Controller
public class GameRSocketController {
    private final Logger logger = LoggerFactory.getLogger(GameRSocketController.class);

    private final PlayerService playerService;

    private final PositionSetterService positionSetterService;

    private final CoinsSet coinsSet;

    private final CoinService coinService;

    private final ISender spriteSender;

    public GameRSocketController(
            PlayerService playerService,
            PositionSetterService positionSetterService,
            CoinsSet coinsSet,
            CoinService coinService,
            ISender spriteSender) {
        this.playerService = playerService;
        this.positionSetterService = positionSetterService;
        this.coinsSet = coinsSet;
        this.coinService = coinService;
        this.spriteSender = spriteSender;
    }

    @MessageMapping("sendPosition")
    public void updatePositionForPlayer(@RequestBody Player data) {
        Player player = convertDataToPlayer(data);

//        System.out.println("Request time: " + measurement.getRequestTimeInMillis() + " milliseconds");
//        logger.info("Player: " + player.getNickname() + "x: " + player.getPositionX() + " y: " + player.getPositionY());
        Optional<PlayerWithOperation> playerWithOperation = playerService.move(player);

        if (playerWithOperation.isPresent()) {
            switch (playerWithOperation.get().getOperation()) {
                case REMOVE: {
                    this.spriteSender.send(Destination.REMOVE_PLAYER, playerWithOperation.get().getPlayer());
                    break;
                }
                case UPDATE: {
                    this.spriteSender.sendWithTimestamp(Destination.UPDATE_PLAYER, playerWithOperation.get().getPlayer(), HeaderStatus.OK, data.getRequestTimestamp(), data.getContentLength());
                    break;
                }
            }
        } else {
            this.spriteSender.sendToUser(Destination.SPECIFIC_USER, player, HeaderStatus.UPDATE, player.getNickname(), data.getRequestTimestamp(), data.getContentLength());
        }
    }

    @MessageMapping("addNewPlayers")
    public void addPlayer(Player player) {
        int[] startPosition = positionSetterService.getStartPositionForFigure();
        logger.info("Dodaje gracza o nicku: " + player.getNickname() + " i pozycji X-> " + startPosition[0] + " pozycji Y-> " + startPosition[1]);

        Player newPlayer = new Player(player.getNickname(), startPosition[0], startPosition[1]);
        coinService.collectCoin(newPlayer);
        Game.getGame().getPlayers().add(newPlayer);

        resetPreviousDirection();
        spriteSender.send(Game.getGame().getPlayers());
    }

    @MessageMapping("joinToGame")
    public Mono<Set<Coin>> requestResponseJoin() {
        return Mono.just(coinsSet.getCoins());
    }

    private Player convertDataToPlayer(Player data) {
        return new Player(data.getNickname(),
                data.getPositionX(),
                data.getPositionY(),
                data.getScore(),
                data.getStepDirection(),
                data.getVersion(),
                data.getAdditionalData()
        );
    }
}
