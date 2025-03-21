// Carousel functionality for the hero section
const images = document.querySelectorAll('.carousel img');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
}

// Initialize carousel display
images.forEach((img, index) => {
    img.style.display = index === 0 ? 'block' : 'none';
});

setInterval(showNextImage, 3000); // Change image every 3 seconds

// Dynamic Climate Information for India (Sample Data Simulation)
async function fetchClimateData() {
    const climateInfo = document.getElementById('climate-info');
    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=20.5937&longitude=78.9629&current_weather=true');
        const data = await response.json();
        const { temperature, weathercode } = data.current_weather;
        const weatherDescription = weathercode === 1 ? 'Sunny' : 'Cloudy';
        climateInfo.innerHTML = `
            <h2>Current Climate in India</h2>
            <p><strong>Temperature:</strong> ${temperature}°C</p>
            <p><strong>Weather:</strong> ${weatherDescription}</p>
        `;
    } catch (error) {
        climateInfo.innerHTML += <p>Unable to fetch climate data. Please try again later.</p>;
    }
}