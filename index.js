const apiKey = '1463cf90d5f6d7acd696d949fc17ffeb'; 

function getWeather() {
    const city = document.getElementById('city-input').value;
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    document.getElementById('city-name').innerText = `${data.name}`;
                    document.getElementById('temperature').innerText = `${data.main.temp}°C`;
                    document.getElementById('description').innerText = `${data.weather[0].description}`;
                    document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

                    
                } else {
                    alert('City not found');
                }
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                alert('Error fetching weather data');
            });
    } else {
        alert('Please enter a city name');
    }
}
