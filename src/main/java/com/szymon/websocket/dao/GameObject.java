package com.szymon.websocket.dao;

public abstract class GameObject {
    public abstract byte[] convertObjectIntoBytes();

    abstract public byte[] encodeDataByProtobuf();

    protected byte[] joinArray(byte[]... arrays) {
        int length = 0;
        for (byte[] array : arrays) {
            length += array.length;
        }

        final byte[] result = new byte[length];

        int offset = 0;
        for (byte[] array : arrays) {
            System.arraycopy(array, 0, result, offset, array.length);
            offset += array.length;
        }

        return result;
    }

    protected byte[] toBytes(short data) {
        return new byte[] {
                (byte)((data >> 8) & 0xff),
                (byte)((data >> 0) & 0xff),
        };
    }
}
