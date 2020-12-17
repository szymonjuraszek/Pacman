package com.szymon.websocket.sender;

import lombok.Data;
import reactor.core.publisher.DirectProcessor;
import reactor.core.publisher.FluxProcessor;
import reactor.core.publisher.FluxSink;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public abstract class Processor {
    protected final Map<String, ObjectSender> processorForUser = new ConcurrentHashMap<>();

    protected final FluxProcessor processorMonster;

    protected final FluxSink sinkMonster;

    protected final FluxProcessor processorPlayerAdd;

    protected final FluxSink sinkPlayerAdd;

    protected final FluxProcessor processorPlayerUpdate;

    protected final FluxSink sinkPlayerUpdate;

    protected final FluxProcessor processorPlayerRemove;

    protected final FluxSink sinkPlayerRemove;

    protected final FluxProcessor processorCoin;

    protected final FluxSink sinkCoin;

    protected final FluxProcessor processorCoinRefresh;

    protected final FluxSink sinkCoinRefresh;

    public Processor() {
        this.processorMonster = DirectProcessor.create().serialize();
        this.sinkMonster = processorMonster.sink();

        this.processorPlayerAdd = DirectProcessor.create().serialize();
        this.sinkPlayerAdd = processorPlayerAdd.sink();

        this.processorPlayerUpdate = DirectProcessor.create().serialize();
        this.sinkPlayerUpdate = processorPlayerUpdate.sink();

        this.processorPlayerRemove = DirectProcessor.create().serialize();
        this.sinkPlayerRemove = processorPlayerRemove.sink();

        this.processorCoin = DirectProcessor.create().serialize();
        this.sinkCoin = processorCoin.sink();

        this.processorCoinRefresh = DirectProcessor.create().serialize();
        this.sinkCoinRefresh = processorCoinRefresh.sink();
    }

    public FluxProcessor getProcessorMonster() {
        return processorMonster;
    }

    public FluxProcessor getProcessorPlayerAdd() {
        return processorPlayerAdd;
    }

    public FluxProcessor getProcessorPlayerUpdate() {
        return processorPlayerUpdate;
    }

    public FluxProcessor getProcessorPlayerRemove() {
        return processorPlayerRemove;
    }

    public FluxProcessor getProcessorCoin() {
        return processorCoin;
    }

    public FluxProcessor getProcessorCoinRefresh() {
        return processorCoinRefresh;
    }

    public void addProcessorForUser(String nickname) {
        processorForUser.put(nickname, new ObjectSender());
    }

    public void removeProcessorForUser(String nickname) {
        processorForUser.remove(nickname);
    }

    public FluxProcessor getProcessorForUser(String nickname) {
        return processorForUser.get(nickname).getProcessor();
    }
    @Data
    class ObjectSender {

        private FluxProcessor processor;
        private FluxSink sink;

        public ObjectSender() {
            this.processor = DirectProcessor.create().serialize();
            this.sink = processor.sink();
        }
    }

}

