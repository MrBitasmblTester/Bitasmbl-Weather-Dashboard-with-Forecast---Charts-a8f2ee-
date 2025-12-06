package com.example.weather;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class WeatherService {
    private final Map<String, String> cache = new ConcurrentHashMap<>();

    public String getOrFetch(String city) {
        // TODO: implement cache + HTTP call to FastAPI
        return cache.computeIfAbsent(city, c -> "{}");
    }
}