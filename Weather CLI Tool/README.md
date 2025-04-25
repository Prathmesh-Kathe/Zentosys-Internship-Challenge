# Weather CLI Tool

This is a command-line tool to fetch and display weather data for a given city. The tool uses the OpenWeather API to retrieve weather information and caches the results for faster subsequent requests.

## Features

- Fetch current weather data for a city.
- Display temperature, weather condition, and wind speed.
- Cache results to reduce API calls and improve performance.
- Automatically refresh cached data after 1 minute.

## Folder Structure

```
Weather CLI Tool/
├── .env                # Environment variables (API key)
├── cache.json          # Cached weather data
├── cacheService.js     # Handles reading and writing to the cache
├── index.js            # Entry point of the CLI tool
├── package.json        # Project metadata and dependencies
├── weatherService.js   # Handles API requests and weather data processing
```

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- An OpenWeather API key (sign up at [OpenWeather](https://openweathermap.org/) to get one)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-url.git
   cd "Weather CLI Tool"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variable:
     ```
     OPENWEATHER_API_KEY=your-api-key
     ```

4. Run the tool:
   ```bash
   node index.js <city>
   ```

   Replace `<city>` with the name of the city you want to fetch weather data for.

## Example Usage

```bash
node index.js London
```

Output:
```
🌡 Temperature: 15°C
🌦 Condition: clear sky
💨 Wind: 3.5 m/s
```

## File Descriptions

### `index.js`

- Entry point of the CLI tool.
- Reads the city name from the command-line arguments and calls the `getWeather` function from `weatherService.js`.

### `weatherService.js`

- Handles API requests to the OpenWeather API.
- Processes and formats the weather data.
- Uses `cacheService.js` to read/write cached data.

### `cacheService.js`

- Reads and writes cached weather data to `cache.json`.
- Ensures cached data is valid for 1 minute.

### `.env`

- Stores the OpenWeather API key.

### `cache.json`

- Stores cached weather data to reduce API calls.

## Dependencies

- `axios`: For making HTTP requests to the OpenWeather API.
- `dotenv`: For managing environment variables.
- `fs`: For reading and writing the cache file.

## Notes

- Ensure your OpenWeather API key is valid and added to the `.env` file.
- Cached data is refreshed after 1 minute to ensure up-to-date weather information.

## License

This project is licensed under the MIT License.
