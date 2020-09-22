package com.szymon.websocket.model.measurement;

import com.opencsv.bean.CsvBindByName;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Measurement {

    @CsvBindByName(column = "nickname")
    private String nickname;
    @CsvBindByName(column = "request_Time_In_Millis")
    private Long requestTimeInMillis;
    @CsvBindByName(column = "request_Timestamp")
    private Long requestTimestamp;
    @CsvBindByName(column = "version_Request")
    private int version;
//    @CsvBindByName(column = "size")
//    private int size;

    synchronized public void setVersion(int version) {
        this.version = version;
    }
}
