package com.szymon.websocket.controller;

import com.szymon.websocket.model.coin.Coin;
import com.szymon.websocket.model.sprite.Monster;
import com.szymon.websocket.model.sprite.Player;
import com.szymon.websocket.sender.Processor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;
import reactor.core.publisher.Flux;

@Controller
public class SubscriptionController {
    private final Logger logger = LoggerFactory.getLogger(SubscriptionController.class);

    private final Processor processors;

    public SubscriptionController(Processor processors) {
        this.processors = processors;
    }

    @MessageMapping("monstersUpdate")
    public Flux<Monster> monsterStream() {
        logger.error("Subskrybuje dane pochodzace od monsterow.");
        return processors.getProcessorMonster();
    }

    @MessageMapping("playersAdded")
    public Flux<Player> playerAddedStream() {
        logger.error("Subskrybuje dane pochodzace od nowych playerow.");
        return processors.getProcessorPlayerAdd();
    }

    @MessageMapping("playerRemove")
    public Flux<Player> playerRemoveStream() {
        logger.error("Subskrybuje dane pochodzace od usuwanych playerow.");
        return processors.getProcessorPlayerRemove();
    }

    @MessageMapping("playerUpdate")
    public Flux<Player> playerUpdateStream() {
        logger.error("Subskrybuje dane pochodzace od updatowanych playerow.");
        return processors.getProcessorPlayerUpdate();
    }

    @MessageMapping("playerUpdateUser")
    public Flux<Player> specificUserUpdateStream(Player player) {
        logger.error("Subskrybuje dane pochodzace od konkretnego usera.");
        processors.addProcessorForUser(player.getNickname());
        return processors.getProcessorForUser(player.getNickname());
    }

    @MessageMapping("coinGet")
    public Flux<Coin> coinGetStream() {
        logger.error("Subskrybuje dane pochodzace od coina.");
        return processors.getProcessorCoin();
    }

    @MessageMapping("coinRefresh")
    public Flux<Coin> coinRefreshStream() {
        logger.error("Subskrybuje refresh coin");
        return processors.getProcessorCoinRefresh();
    }
}
