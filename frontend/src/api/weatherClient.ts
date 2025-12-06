export interface WeatherBundle {
  city: string;
  current: any;
  forecast: any[];
}

export async function fetchWeather(city: string): Promise<WeatherBundle> {
  const res = await fetch(`/api/weather/by-city?city=${encodeURIComponent(city)}`);
  if (!res.ok) throw new Error("Failed to fetch weather");
  return res.json();
}