package com.szymon.websocket.dao;

import lombok.Data;

@Data
public class OtherPlayerDao {
    private Long requestTimestamp;

    private int contentLength;

    private GameObject player;
}
