const WEATHER_API_KEY = "18c4ccecd10ddaeedf4231e49e820070";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const location = document.getElementById("location");
      const weather = document.getElementById("weather");
      const temp = document.getElementById("temp");

      location.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temp.innerText = `${data.main.temp}℃`;
    });
}

function onGeoError() {
  alert("Can't find your location. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
