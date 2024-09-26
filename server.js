const express = require('express');
const cors = require('cors'); // Add this line
const app = express();
const PORT = 8080;

app.use(express.json());

// Enable CORS for all routes (Add this line)
app.use(cors());

// Mock weather data
let weatherData = [
    { id: 1, location: "Delhi", temperature: 18.5, wind_speed: 5.2, description: "clear sky" },
    { id: 2, location: "Mumbai", temperature: 22.3, wind_speed: 3.4, description: "light rain" },
    { id: 3, location: "Agra", temperature: 25.0, wind_speed: 4.8, description: "sunny" },
    { id: 4, location: "Kashmir", temperature: 18.5, wind_speed: 5.2, description: "clear sky" },
    { id: 5, location: "Rajasthan", temperature: 22.3, wind_speed: 3.4, description: "humid" },
    { id: 6, location: "Mirzapur", temperature: 25.0, wind_speed: 4.8, description: "sunny" },
    { id: 7, location: "Kalyan", temperature: 18.5, wind_speed: 5.2, description: "clear sky" },
    { id: 8, location: "Thailand", temperature: 22.3, wind_speed: 3.4, description: "light rain" },
    { id: 9, location: "Ghatkopar", temperature: 25.0, wind_speed: 4.8, description: "cloudy" },
    { id: 10, location: "Gujarat", temperature: 18.5, wind_speed: 5.2, description: "clear sky" },
    { id: 11, location: "Punjab", temperature: 22.3, wind_speed: 3.4, description: "humid" },
    { id: 12, location: "Chennai", temperature: 25.0, wind_speed: 4.8, description: "sunny" }
];

// Fetch all weather data
app.get('/weather', (req, res) => {
    res.json(weatherData);
});

// Fetch weather data by location
app.get('/weather/:location', (req, res) => {
    const location = req.params.location;
    const weather = weatherData.find(w => w.location.toLowerCase() === location.toLowerCase());
    
    if (weather) {
        res.json(weather);
    } else {
        res.status(404).json({ message: "Weather data not found for this location" });
    }
});

// Add new weather data
app.post('/weather', (req, res) => {
    const newWeather = {
        id: weatherData.length + 1,
        ...req.body
    };

    weatherData.push(newWeather);
    res.status(201).json(newWeather);
});

// Update existing weather data
app.put('/weather/:location', (req, res) => {
    const location = req.params.location;
    const weatherIndex = weatherData.findIndex(w => w.location.toLowerCase() === location.toLowerCase());

    if (weatherIndex !== -1) {
        weatherData[weatherIndex] = { id: weatherData[weatherIndex].id, ...req.body };
        res.json(weatherData[weatherIndex]);
    } else {
        res.status(404).json({ message: "Weather data not found for this location" });
    }
});

// Delete weather data by location
app.delete('/weather/:location', (req, res) => {
    const location = req.params.location;
    const weatherIndex = weatherData.findIndex(w => w.location.toLowerCase() === location.toLowerCase());

    if (weatherIndex !== -1) {
        const deletedWeather = weatherData.splice(weatherIndex, 1);
        res.json({ message: "Weather data deleted", data: deletedWeather });
    } else {
        res.status(404).json({ message: "Weather data not found for this location" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`API is running on http://localhost:${PORT}`);
});
