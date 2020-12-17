package com.szymon.websocket.loader;

import com.szymon.websocket.model.coin.Coin;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import java.io.InputStreamReader;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class JSONLoader implements ICoinLoader {

    private final ResourceLoader resourceLoader;

    public JSONLoader(ResourceLoader resourceLoader) {
        this.resourceLoader = resourceLoader;
    }

    @Override
    public Set<Coin> loadCoins(String jsonFileName) {
        Set<Coin> result = ConcurrentHashMap.newKeySet();

        JSONParser parser = new JSONParser();
        try {
            Object gameObjects = parser.parse(new InputStreamReader(
                    resourceLoader
                            .getResource("classpath:game/" + jsonFileName)
                            .getInputStream(), "UTF-8"));

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
