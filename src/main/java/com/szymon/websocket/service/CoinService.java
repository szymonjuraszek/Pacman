package com.szymon.websocket.service;

import com.szymon.websocket.model.coin.Coin;
import com.szymon.websocket.model.coin.CoinsSet;
import com.szymon.websocket.model.game.Game;
import com.szymon.websocket.model.sprite.Player;
import com.szymon.websocket.sender.Destination;
import com.szymon.websocket.sender.ISender;
import org.springframework.stereotype.Service;

@Service
public class CoinService {

    private final CoinsSet coinsSet;

    private final ISender coinSender;

    public CoinService(CoinsSet coinsSet, ISender coinSender) {
        this.coinsSet = coinsSet;
        this.coinSender = coinSender;
    }

    synchronized public boolean collectCoin(Player player) {
        Coin coinToCollect = new Coin((int) Math.floor(player.getPositionX() >> 5), (int) Math.floor((player.getPositionY() + 16) >> 5));

        if (coinsSet.getCoins().remove(coinToCollect)) {
            if (coinsSet.getCoins().isEmpty()) {
                refreshCoinsOnMap(coinToCollect);
            } else {
                this.coinSender.send(Destination.GET_COIN, new Coin(coinToCollect.getPositionX(), coinToCollect.getPositionY()));
            }
            return true;
        }
        return false;
    }

    private void refreshCoinsOnMap(Coin coinToCollect) {
        coinsSet.refreshCoins();

        coinsSet.getCoins().remove(coinToCollect);
        Game.getGame().getPlayers().stream().forEach(value -> {
            coinsSet.getCoins().remove(coinToCollect);
        });
        this.coinSender.send(Destination.REFRESH_COINS, new Coin(-1, -1));
    }
}
