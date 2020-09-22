package com.szymon.websocket.loader;

import java.util.List;

@FunctionalInterface
public interface ILoaderCollision {
    String COMMA_DELIMITER = ",";

    List<List<Boolean>> loadCollision(String csvFileName);
}
