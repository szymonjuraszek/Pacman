package com.szymon.websocket.controller;

import com.szymon.websocket.model.measurement.writer.MeasurementWriter;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;

@RestController
public class MeasurementController {

    private final MeasurementWriter writer;

    public MeasurementController(MeasurementWriter writer) {
        this.writer = writer;
    }

    @GetMapping(value = "/report/measurement", produces = "text/csv")
    public ResponseEntity generateReport() {
        File file = writer.saveMeasurement();

        return ResponseEntity.ok()
                .header("Content-Disposition", "attachment; filename=" + MeasurementWriter.FILE_NAME)
                .contentLength(file.length())
                .contentType(MediaType.parseMediaType("text/csv"))
                .body(new FileSystemResource(file));
    }
}
