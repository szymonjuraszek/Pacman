package com.szymon.websocket.model.coin;


import com.szymon.websocket.dao.GameObject;
import com.szymon.websocket.generated.CoinGenerated;
import lombok.AllArgsConstructor;
import lombok.Data;
import net.badata.protobuf.converter.Converter;
import net.badata.protobuf.converter.annotation.ProtoClass;
import net.badata.protobuf.converter.annotation.ProtoField;

@Data
@AllArgsConstructor
@ProtoClass(CoinGenerated.CoinProto.class)
public class Coin extends GameObject {
    @ProtoField
    private int positionX;
    @ProtoField
    private int positionY;

    @Override
    public byte[] convertObjectIntoBytes() {
        return joinArray(
                toBytes((short) positionX),
                toBytes((short) positionY)
        );
    }

    @Override
    public byte[] encodeDataByProtobuf() {
        return Converter.create().toProtobuf(CoinGenerated.CoinProto.class, this).toByteArray();
    }


//    public static List<CoinProto> encodeCollectionOfCoinsByProtobuf(Collection<Coin> coins) {
//         return Converter.create().toProtobuf(SetOfCoins.class, coins);
//    }
}
