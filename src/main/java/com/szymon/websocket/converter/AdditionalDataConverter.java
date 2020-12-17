package com.szymon.websocket.converter;

import com.szymon.websocket.dao.AdditionalData;
import net.badata.protobuf.converter.type.TypeConverter;

import java.util.List;

public class AdditionalDataConverter implements TypeConverter<List<AdditionalData>, List<AdditionalData>> {
    @Override
    public List<AdditionalData> toDomainValue(Object instance) {
        return (List<AdditionalData>) instance;
    }

    @Override
    public List<AdditionalData> toProtobufValue(Object instance) {
        return (List<AdditionalData>) instance;
    }
}
