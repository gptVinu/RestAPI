const apiUrl = 'http://localhost:8080/weather';

// Function to add new weather data
function addWeather() {
    const location = document.getElementById('new-location').value;
    const temperature = document.getElementById('new-temperature').value;
    const windSpeed = document.getElementById('new-wind-speed').value;
    const description = document.getElementById('new-description').value;

    const newWeather = {
        location,
        temperature: parseFloat(temperature),
        wind_speed: parseFloat(windSpeed),
        description
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newWeather)
    })
    .then(response => response.json())
    .then(data => {
        alert(`Added new weather data for ${data.location}`);
        window.location.href = 'index.html'; // Redirect to home
    })
    .catch(err => {
        document.getElementById('alert-message').innerText = err.message;
    });
}
