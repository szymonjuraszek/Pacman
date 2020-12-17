package com.szymon.websocket.controller;


import com.szymon.websocket.dao.HeaderStatus;
import com.szymon.websocket.dao.PlayerWithOperation;
import com.szymon.websocket.generated.PlayerGenerated;
import com.szymon.websocket.model.sprite.Player;
import com.szymon.websocket.sender.ISender;
import com.szymon.websocket.service.PlayerService;
import lombok.SneakyThrows;
import net.badata.protobuf.converter.Converter;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Controller;

import java.security.Principal;
import java.util.Optional;

@Controller
public class BinaryController {

    private final PlayerService playerService;

    private final BinaryConverter binaryConverter;

    private final ISender spriteSender;

    public BinaryController(
            PlayerService playerService,
            BinaryConverter binaryConverter,
            ISender spriteSender
    ) {
        this.playerService = playerService;
        this.binaryConverter = binaryConverter;
        this.spriteSender = spriteSender;
    }

    @MessageMapping("/send/position/custom/binary")
    public void updatePositionForPlayerCustomBinary(@Payload byte[] data, Principal user, @Header("requestTimestamp") Long requestTimestamp) {
        makeMove(binaryConverter.convert(data), requestTimestamp, user.getName());
    }

    @SneakyThrows
    @MessageMapping("/send/position/protobuf")
    public void updatePositionForPlayerProtobuf(@Payload byte[] data, Principal user, @Header("requestTimestamp") Long requestTimestamp) {
        makeMove(Converter.create().toDomain(Player.class, PlayerGenerated.PlayerProto.parseFrom(data)), requestTimestamp, user.getName());
    }

    private void makeMove(Player player, long requestTimestamp, String userName) {
//        System.out.println(("Request time: " + measurement.getRequestTimeInMillis() + " milliseconds"));

        Optional<PlayerWithOperation> playerWithOperation = playerService.move(player);

        if (playerWithOperation.isPresent()) {
            switch (playerWithOperation.get().getOperation()) {
                case REMOVE: {
                    this.spriteSender.send("/pacman/remove/player", playerWithOperation.get().getPlayer());
                    break;
                }
                case UPDATE: {
                    this.spriteSender.sendWithTimestamp("/pacman/update/player", playerWithOperation.get().getPlayer(), HeaderStatus.OK, requestTimestamp);
                    break;
                }
            }
        } else {
            this.spriteSender.sendToUser("/queue/player", player, HeaderStatus.UPDATE, userName, requestTimestamp);
        }
    }
}
