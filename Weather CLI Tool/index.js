const { getWeather } = require('./weatherService');

const city = process.argv[2];

if (!city) {
  console.log('❗ Please provide a city name!');
  process.exit(1);
}

getWeather(city);
