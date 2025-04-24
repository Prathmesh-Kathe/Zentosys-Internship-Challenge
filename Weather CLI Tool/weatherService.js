const axios = require('axios');
const { readCache, writeCache } = require('./cacheService');
require('dotenv').config();

const API_KEY = '75fd5045912135ed2c318f8686382e38'; // You can also use process.env.OPENWEATHER_API_KEY
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${API_KEY}`

async function getWeather(city) {
  const cached = readCache(city);
  if (cached) {
    console.log('⚡ Using cached data...');
    return displayWeather(cached);
  }

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });

    const data = {
      temperature: response.data.main.temp,
      condition: response.data.weather[0].description,
      wind: response.data.wind.speed,
    };

    writeCache(city, data);
    displayWeather(data);
  } catch (err) {
    console.error('❌ Error fetching weather:', err.message);
  }
}

function displayWeather(data) {
  console.log(`🌡 Temperature: ${data.temperature}°C`);
  console.log(`🌦 Condition: ${data.condition}`);
  console.log(`💨 Wind: ${data.wind} m/s`);
}

module.exports = { getWeather };
