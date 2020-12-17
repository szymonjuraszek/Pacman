package com.szymon.websocket.controller;

import com.szymon.websocket.dao.GameObject;
import com.szymon.websocket.dao.PlayerWithOperation;
import com.szymon.websocket.model.coin.Coin;
import com.szymon.websocket.model.coin.CoinsSet;
import com.szymon.websocket.model.game.Game;
import com.szymon.websocket.model.sprite.Player;
import com.szymon.websocket.sender.Destination;
import com.szymon.websocket.sender.ISender;
import com.szymon.websocket.sender.SSEEmitterService;
import com.szymon.websocket.service.CoinService;
import com.szymon.websocket.service.PlayerService;
import com.szymon.websocket.service.collision.PositionSetterService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.util.Optional;
import java.util.Set;

import static com.szymon.websocket.service.DirectionMoveService.resetPreviousDirection;

@RestController
@CrossOrigin
public class Http2GameController {

    private final Logger logger = LoggerFactory.getLogger(Http2GameController.class);

    private final SSEEmitterService sseEmitterService;

    private final PlayerService playerService;

    private final PositionSetterService positionSetterService;

    private final CoinsSet coinsSet;

    private final CoinService coinService;

    private final ISender gameObjectSender;

    public Http2GameController(
            SSEEmitterService sseEmitterService,
            PlayerService playerService,
            PositionSetterService positionSetterService,
            CoinsSet coinsSet,
            CoinService coinService,
            ISender gameObjectSender
    ) {
        this.sseEmitterService = sseEmitterService;
        this.playerService = playerService;
        this.positionSetterService = positionSetterService;
        this.coinsSet = coinsSet;
        this.coinService = coinService;
        this.gameObjectSender = gameObjectSender;
    }

    @PutMapping(path = "/player")
    public ResponseEntity<GameObject> updatePositionForPlayer(
            @RequestBody Player player,
            @RequestHeader(name = "requestTimestamp") Long requestTimestamp,
            @RequestHeader("content-length") Integer contentLength
    ) {
//        logger.info("Player: " + player.getNickname() + " x: " + player.getPositionX() + " y: " + player.getPositionY());
        Optional<PlayerWithOperation> playerWithOperation = playerService.move(player);

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Access-Control-Expose-Headers", "requestTimestamp, contentLength");
        httpHeaders.add("contentLength", Long.toString(contentLength));

        if (playerWithOperation.isPresent()) {
            switch (playerWithOperation.get().getOperation()) {
                case REMOVE: {
                    playerWithOperation.get().getPlayer().setAdditionalData(player.getAdditionalData());
                    gameObjectSender.sendToOther(Destination.REMOVE_PLAYER, playerWithOperation.get().getPlayer(), player.getNickname(), requestTimestamp, contentLength);
                    httpHeaders.add("requestTimestamp", Long.toString(requestTimestamp));
                    return new ResponseEntity<>(playerWithOperation.get().getPlayer(), httpHeaders, HttpStatus.valueOf(200));
                }
                case UPDATE: {
                    playerWithOperation.get().getPlayer().setAdditionalData(player.getAdditionalData());
                    gameObjectSender.sendToOther(Destination.UPDATE_PLAYER, playerWithOperation.get().getPlayer(), player.getNickname(), requestTimestamp, contentLength);
                    httpHeaders.add("requestTimestamp", Long.toString(requestTimestamp));
                    return new ResponseEntity<>(playerWithOperation.get().getPlayer(), httpHeaders, HttpStatus.valueOf(201));
                }
            }
        }

        httpHeaders.add("requestTimestamp", Long.toString(requestTimestamp));
        return new ResponseEntity<>(player, httpHeaders, HttpStatus.valueOf(202));
    }

    @PostMapping("/players")
    public ResponseEntity<Set<Player>> addPlayer(@RequestBody Player player) {
        int[] startPosition = positionSetterService.getStartPositionForFigure();
//        logger.info("Dodaje gracza o nicku: " + player.getNickname() + " i pozycji X-> " + startPosition[0] + " pozycji Y-> " + startPosition[1]);
        Player newPlayer = new Player(player.getNickname(), startPosition[0], startPosition[1]);

        coinService.collectCoin(newPlayer);

        Game.getGame().getPlayers().add(newPlayer);
        resetPreviousDirection();

        GameObject[] players = new GameObject[Game.getGame().getPlayers().size()];
        gameObjectSender.send(Destination.ADD_PLAYERS, Game.getGame().getPlayers().toArray(players));

        return new ResponseEntity(Game.getGame().getPlayers(), HttpStatus.CREATED);
    }

    @GetMapping("/coins")
    public Set<Coin> getCoins() {
        return coinsSet.getCoins();
    }

    @GetMapping(value = "/emitter/{nickname}")
    public ResponseEntity<SseEmitter> getEmitterForMonster(@PathVariable String nickname) {
        logger.info("Dodaje emitter dla " + nickname);
        SseEmitter emitter = new SseEmitter(-1L);
        sseEmitterService.saveEmitter(nickname, emitter);

        return new ResponseEntity(emitter, HttpStatus.OK);
    }

    @GetMapping(value = "player/{nickname}")
    public boolean checkIfPlayerExist(@PathVariable String nickname) {
        return sseEmitterService.checkUser(nickname);
    }

    @DeleteMapping("/emitter/{nickname}")
    public void deleteEmitterAndPlayer(@PathVariable String nickname) {
        logger.info("Usuwam emittera dla gracza o nicku: " + nickname);
        Optional<Player> playerToRemove = Game.getGame().getPlayers().stream()
                .filter(player -> player.getNickname().equals(nickname))
                .findAny();

        if (playerToRemove.isPresent()) {
            resetPreviousDirection();
            Game.getGame().getPlayers().remove(playerToRemove.get());
            gameObjectSender.send(Destination.REMOVE_PLAYER, playerToRemove.get());
        }

        sseEmitterService.removeEmitter(nickname);
    }
}
