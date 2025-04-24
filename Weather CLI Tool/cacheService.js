const fs = require('fs');
const path = require('path');

const CACHE_FILE = path.join(__dirname, 'cache.json');

function readCache(city) {
  if (!fs.existsSync(CACHE_FILE)) return null;

  const raw = fs.readFileSync(CACHE_FILE);
  const cache = JSON.parse(raw);

  if (cache[city] && (Date.now() - cache[city].timestamp < 60000)) {
    return cache[city].data;
  }

  return null;
}

function writeCache(city, data) {
  let cache = {};

  if (fs.existsSync(CACHE_FILE)) {
    const raw = fs.readFileSync(CACHE_FILE);
    cache = JSON.parse(raw);
  }

  cache[city] = {
    data,
    timestamp: Date.now(),
  };

  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
}

module.exports = { readCache, writeCache };
