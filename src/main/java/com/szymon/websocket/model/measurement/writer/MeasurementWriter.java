package com.szymon.websocket.model.measurement.writer;

import com.opencsv.bean.StatefulBeanToCsv;
import com.opencsv.bean.StatefulBeanToCsvBuilder;
import com.szymon.websocket.model.measurement.Measurement;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileWriter;
import java.io.Writer;
import java.util.LinkedList;
import java.util.List;

@Service
public class MeasurementWriter {

    public static final String FILE_NAME = "request.csv";

    private final File file = new File(new File("").getAbsolutePath() + "/Game/src/main/resources/measurements/" + FILE_NAME);

    private final List<Measurement> measurements = new LinkedList<>();

    public synchronized void addMeasurement(Measurement measurement) {
//        if(measurements.size() > 10000) {
//            measurements.remove(0);
//        }
        measurements.add(measurement);
    }

    public synchronized File saveMeasurement() {
        try {

            Writer writer = new FileWriter(file);

            StatefulBeanToCsvBuilder<Measurement> builder = new StatefulBeanToCsvBuilder<>(writer);
            StatefulBeanToCsv<Measurement> beanWriter = builder.build();

            beanWriter.write(measurements);

            writer.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return file;
    }
}
