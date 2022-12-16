// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=e135a33c7a53bcf16ade6978eb700f13

const search_input = document.getElementById("search_input");
const search_button = document.getElementById("search_button");
const weather_image = document.getElementById("weather_image");
const temperature = document.getElementById("temperature");
const season = document.getElementById("season");
const windSpeed = document.getElementById("wind_speed");
const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");
const city_name = document.getElementById("city_name");


init();

function init() {
    search_button.addEventListener("click", fetchwhether);
}

async function fetchwhether() {
    let location = search_input.value;
    const streamResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e135a33c7a53bcf16ade6978eb700f13`);
    const textBody = await streamResponse.text();
    const jsonData = JSON.parse(textBody);
    const weather_icon = jsonData.weather[0].icon;
    const temperature_value = jsonData.main.temp;
    const cloud_description = jsonData.weather[0].description;
    const wind_speed = jsonData.wind.speed;
    const humidity_value = jsonData.main.humidity;
    const pressure_value = jsonData.main.pressure;

    weather_image.setAttribute("src", `http://openweathermap.org/img/wn/${weather_icon}@2x.png`)
    temperature.innerHTML = `${temperature_value}&deg;F`
    season.innerText = cloud_description;
    windSpeed.innerHTML = wind_speed + `<span class="unit">km</span>`;
    humidity.innerHTML = humidity_value + `<span class="unit">%</span>`;
    pressure.innerHTML = pressure_value + `<span class="unit">hpa</span>`;
    city_name.innerText = location.toUpperCase();


}