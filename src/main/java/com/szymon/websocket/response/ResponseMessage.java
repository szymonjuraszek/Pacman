package com.szymon.websocket.response;

public class ResponseMessage<T> {
    private OperationType operationType;
    private T sprite;

    public ResponseMessage(OperationType operationType, T sprite) {
        this.operationType = operationType;
        this.sprite = sprite;
    }

    public OperationType getOperationType() {
        return operationType;
    }

    public void setOperationType(OperationType operationType) {
        this.operationType = operationType;
    }

    public T getSprite() {
        return sprite;
    }

    public void setSprite(T sprite) {
        this.sprite = sprite;
    }
}
