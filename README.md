🌤️ Weather App

This is a simple weather app built with HTML, CSS, and JavaScript.
It allows users to search for any city and view its current temperature and weather description.

🧠 How It Works

The app uses the OpenWeather API https://openweathermap.org/api/one-call-3 to get real-time weather data.

When a user enters a city name:

1- The app first gets the city’s latitude and longitude using the OpenWeather Geocoding API.
2- Then it fetches the current weather for that location using the Weather Data API.
3- The results (temperature and description) are shown on the screen.

🔑 API Key Setup

To make the app work, you need your own OpenWeather API key.
Steps:

1- Go to https://openweathermap.org/api
2- Create a free account (if you don’t already have one)
3- Go to your API Keys section and copy your key
4- Open the file assets/script.js
5- Find this line:
```js
  const API_KEY = "YOUR_API_KEY_HERE";
```

6-Replace it with your own key

That’s it! Save the file and refresh the page — the app will now fetch live weather data.

🖥️ Usage

1- Open index.html in your browser
2- Type the name of any city
3- Click “Get Weather”
4- See the city’s temperature and weather description instantly 🌦️

📡 Data Source

All weather information is provided by the OpenWeather API
