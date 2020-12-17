package com.szymon.websocket.config;

import io.netty.handler.codec.http.websocketx.extensions.WebSocketClientExtensionHandler;
import io.rsocket.transport.ServerTransport;
import org.springframework.boot.rsocket.server.RSocketServerCustomizer;
import org.springframework.boot.rsocket.server.RSocketServerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration(proxyBeanMethods = false)
public class RSocketConfig {

    @Bean
    public RSocketServerCustomizer fragmentationCustomizer() {
        return (server) -> server.fragment(16000);
         // use a non-zero value that tells the server to fragment messages at this size
        // you should use a value that's not too small to avoid overhead, but not larger than the `65536` websocket max frame size
    }

}
