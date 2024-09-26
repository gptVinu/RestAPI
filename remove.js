const apiUrl = 'http://localhost:8080/weather';

// Function to delete weather data by location
function deleteWeather() {
    const location = document.getElementById('delete-location').value;
    fetch(`${apiUrl}/${location}`, { method: 'DELETE' })
        .then(response => {
            if (!response.ok) throw new Error('Location not found');
            return response.json();
        })
        .then(data => {
            alert(data.message);
            window.location.href = 'index.html'; // Redirect to home
        })
        .catch(err => {
            document.getElementById('alert-message').innerText = err.message;
        });
}
