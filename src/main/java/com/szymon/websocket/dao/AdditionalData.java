package com.szymon.websocket.dao;

import com.szymon.websocket.generated.PlayerGenerated;
import lombok.Data;
import net.badata.protobuf.converter.annotation.ProtoClass;
import net.badata.protobuf.converter.annotation.ProtoField;

@Data
@ProtoClass(PlayerGenerated.PlayerProto.AdditionalData.class)
public class AdditionalData {

    @ProtoField
    private int number1;

    @ProtoField
    private int number2;

    @ProtoField
    private int number3;

    @ProtoField
    private String text;
}
