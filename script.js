const apiUrl = 'http://localhost:8080/weather';

// Function to fetch weather data by location
function getWeather() {
    const location = document.getElementById('search-location').value;
    fetch(`${apiUrl}/${location}`)
        .then(response => {
            if (!response.ok) throw new Error('Location not found');
            return response.json();
        })
        .then(data => {
            document.getElementById('location-name').innerText = data.location;
            document.getElementById('temperature').innerText = data.temperature;
            document.getElementById('wind-speed').innerText = data.wind_speed;
            document.getElementById('description').innerText = data.description;
            document.getElementById('alert-message').innerText = '';
        })
        .catch(err => {
            document.getElementById('alert-message').innerText = err.message;
        });
}

// Function to toggle the sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
    const toggleButton = document.getElementById('sidebar-toggle');
    toggleButton.innerText = sidebar.classList.contains('active') ? '✖ Close' : '☰ Menu';
}

// Function to show the home page (same page)
function showHome() {
    // No action needed; already on the home page
}

// Function to open new HTML pages
function openPage(page) {
    window.location.href = page;
}
