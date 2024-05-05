function renderWeather(weather) {
    console.log(weather);
    var resultsContainer = document.querySelector("#weatherData");
    // h2 for name and temperature
    var city = document.createElement("h2");
    city.textContent = weather.name;
    resultsContainer.append(city);

    var temp = document.createElement("h3");
    temp.textContent = "Temp: " + Math.round(weather.main.temp) + " °F";
    resultsContainer.append(temp);


}
function fetchWeatherData(query) {

    var url =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        query +
        "&units=imperial&appid=b8cb0843ce91b4c324a98d47a55b007d"

    fetch(url)
        .then((response) => response.json())
        .then((data) => renderWeather(data));
}

document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("weatherForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var query = document.getElementById("cityInput").value;
        fetchWeatherData(query);
    });
});