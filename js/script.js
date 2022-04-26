const city = document.getElementById('city');
const sendCity = document.getElementById('send');
const optionWeather = document.getElementById('current_weather');
const optionForecast = document.getElementById('weather_forecast');
const weatherContainer = document.querySelector('#weather-container');
const forecastContainer = document.querySelector('#forecast-container');

optionWeather.addEventListener("click", weatherView);
optionForecast.addEventListener("click", forecastView);
sendCity.addEventListener("click", postCity);

function weatherView() {
    // console.log(city.value);
    if (optionWeather.checked == true) {
        if (city.value) {
            weatherContainer.classList.remove("d-none");
        }
    }else {
        weatherContainer.classList = "card mt-4 d-none";
    }
}

function forecastView() {
    // console.log(city.value);
    if (optionForecast.checked == true) {
        if (city.value) {
            forecastContainer.classList.remove("d-none");
        }
    }else {
        forecastContainer.classList = "card mt-4 d-none";
    }
}

function postCity() {
    if (city.value) {
        weatherContainer.classList.remove('d-none');
        optionWeather.checked = true;
    } else {
        weatherContainer.classList = "card mt-4 d-none";
        optionWeather.checked = false;
    }
}