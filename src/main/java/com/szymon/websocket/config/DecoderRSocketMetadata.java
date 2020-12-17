package com.szymon.websocket.config;

import org.springframework.boot.rsocket.messaging.RSocketStrategiesCustomizer;
import org.springframework.boot.rsocket.server.RSocketServerCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.codec.cbor.Jackson2CborDecoder;
import org.springframework.http.codec.cbor.Jackson2CborEncoder;
import org.springframework.messaging.rsocket.DefaultMetadataExtractor;
import org.springframework.messaging.rsocket.RSocketStrategies;
import org.springframework.messaging.rsocket.annotation.support.RSocketMessageHandler;
import org.springframework.web.util.pattern.PathPatternRouteMatcher;

@Configuration
public class DecoderRSocketMetadata {

    public void method() {
//        DefaultMetadataExtractor extractor = new DefaultMetadataExtractor(metadataDecoders);
//        extractor.metadataToExtract(fooMimeType, Foo.class, "foo");
    }

    @Bean
    public RSocketStrategiesCustomizer rsocketStrategiesCustomizer() {
        return strategies -> strategies.build();
    }

//    @Bean
//    public RSocketStrategies rsocketStrategies() {
//        return RSocketStrategies.builder()
//                .encoders(encoders -> encoders.add(new Jackson2CborEncoder()))
//                .decoders(decoders -> decoders.add(new Jackson2CborDecoder()))
//                .routeMatcher(new PathPatternRouteMatcher())
//                .build();
//    }

//    @Bean
//    public RSocketMessageHandler rsocketMessageHandler() {
//        RSocketMessageHandler handler = new RSocketMessageHandler();
//        handler.routeMatcher(new PathPatternRouteMatcher());
//        return handler;
//    }


}
