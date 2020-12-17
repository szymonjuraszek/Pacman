package com.szymon.websocket.loader;

import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CSVLoader implements ILoaderCollision {

    private final ResourceLoader resourceLoader;

    public CSVLoader(ResourceLoader resourceLoader) {
        this.resourceLoader = resourceLoader;
    }

    @Override
    public List<List<Boolean>> loadCollision(String csvFileName) {
        List<List<Boolean>> records = new ArrayList<>();

        try (BufferedReader br = new BufferedReader(
                new InputStreamReader(resourceLoader
                        .getResource("classpath:game/" + csvFileName)
                        .getInputStream(), "UTF-8"))) {

            String line;
            while ((line = br.readLine()) != null) {
                records.add(Arrays.stream(line.split(COMMA_DELIMITER))
                        .map(value -> {
                                    if (value.charAt(0) == '-') {
                                        return false;
                                    } else {
                                        return true;
                                    }
                                }
                        ).collect(Collectors.toList())
                );
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return records;
    }
}
