const apiUrl = 'http://localhost:8080/weather';

// Function to update existing weather data
function updateWeather() {
    const location = document.getElementById('update-location').value;
    const temperature = document.getElementById('update-temperature').value;
    const windSpeed = document.getElementById('update-wind-speed').value;
    const description = document.getElementById('update-description').value;

    const updatedWeather = {
        temperature: parseFloat(temperature),
        wind_speed: parseFloat(windSpeed),
        description
    };

    fetch(`${apiUrl}/${location}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedWeather)
    })
    .then(response => {
        if (!response.ok) throw new Error('Location not found');
        return response.json();
    })
    .then(data => {
        alert(`Updated weather data for ${data.location}`);
        window.location.href = 'index.html'; // Redirect to home
    })
    .catch(err => {
        document.getElementById('alert-message').innerText = err.message;
    });
}
