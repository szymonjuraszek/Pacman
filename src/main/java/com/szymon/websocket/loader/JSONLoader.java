package com.szymon.websocket.loader;

import com.szymon.websocket.model.coin.Coin;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileReader;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class JSONLoader implements ICoinLoader {

    private static final String ABSOLUTE_PATH_TO_RESOURCE = new File("").getAbsolutePath() + "/src/main/resources/";

    @Override
    public Set<Coin> loadCoins(String jsonFileName) {
        Set<Coin> result = ConcurrentHashMap.newKeySet();

        JSONParser parser = new JSONParser();
        try {
            Object gameObjects = parser.parse(new FileReader(ABSOLUTE_PATH_TO_RESOURCE + jsonFileName));
            JSONObject jsonObject = (JSONObject) gameObjects;

            JSONArray subjects = (JSONArray) jsonObject.get("layers");

            for (int i = 0; i < subjects.size(); ++i) {
                JSONObject rec = (JSONObject) subjects.get(i);
                if (rec.containsKey("objects")) {
                    JSONArray coinsArray = (JSONArray) rec.get("objects");

                    for (int j = 0; j < coinsArray.size(); ++j) {
                        JSONObject coinObject = (JSONObject) coinsArray.get(j);
//                        System.out.println(coinObject);

                        result.add(new Coin(((Long) coinObject.get("x")).intValue() / 32, ((Long) coinObject.get("y")).intValue() / 32));
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return result;
    }
}
