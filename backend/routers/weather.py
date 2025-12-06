from fastapi import APIRouter, Query
from services.weather_client import get_weather_bundle

router = APIRouter()

@router.get("/by-city")
async def by_city(city: str = Query(...)):
    data = await get_weather_bundle(city)
    return data