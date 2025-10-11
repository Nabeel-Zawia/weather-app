🌤️ Weather App

This is a simple weather app built with HTML, CSS, and JavaScript.
It allows users to search for any city and view its current temperature and weather description.

🧠 How It Works

The app uses the OpenWeather API https://openweathermap.org/api/one-call-3 to get real-time weather data.

When a user enters a city name:

- The app first gets the city’s latitude and longitude using the OpenWeather Geocoding API.
- Then it fetches the current weather for that location using the Weather Data API.
- The results (temperature and description) are shown on the screen.

🔑 API Key Setup

To make the app work, you need your own OpenWeather API key.
Steps:

- Go to https://openweathermap.org/api
- Create a free account (if you don’t already have one)
- Go to your API Keys section and copy your key
- Open the file assets/script.js
- Find this line:
```js
  const API_KEY = "YOUR_API_KEY_HERE";
```

6-Replace it with your own key

That’s it! Save the file and refresh the page — the app will now fetch live weather data.

🖥️ Usage

- Open index.html in your browser
- Type the name of any city
- Click “Get Weather”
- See the city’s temperature and weather description instantly 🌦️

📡 Data Source

All weather information is provided by the OpenWeather API
