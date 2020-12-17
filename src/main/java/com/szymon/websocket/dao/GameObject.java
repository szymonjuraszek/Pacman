package com.szymon.websocket.dao;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public abstract class GameObject {

    protected long requestTimestamp;

    protected int contentLength;
}
