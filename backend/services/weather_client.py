import httpx

API_BASE = "https://api.open-meteo.com/v1/forecast"

async def get_weather_bundle(city: str) -> dict:
    # TODO: geocode city, then fetch API
    async with httpx.AsyncClient() as client:
        # placeholder request
        return {"city": city, "current": {}, "forecast": []}