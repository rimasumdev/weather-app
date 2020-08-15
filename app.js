const weatherApi = {
    key: "9ed5bb373d2ce324e429f665ebcaf0fe",
    url: "https://api.openweathermap.org/data/2.5/weather"
}

const btnSearch = document.getElementById("btn-search");
btnSearch.addEventListener("click", function () {
    const inputCity = document.getElementById("txt-city").value;
    weatherInfo(inputCity);
})

const cityInput = document.getElementById("txt-city");
cityInput.addEventListener("keypress", function (event) {
    const inputCity = document.getElementById("txt-city").value;
    if (event.keyCode == 13) {
        weatherInfo(inputCity);
    }

})

function weatherInfo(cityName) {
    fetch(`${weatherApi.url}?q=${cityName}&appid=${weatherApi.key}&units=metric`)
        .then(response => response.json())
        .then(data => displayData(data))
    return cityName;
}

function displayData(weatherInfo) {
    document.getElementById("city").innerText = weatherInfo.name + ", " + weatherInfo.sys.country;
    document.getElementById("deg").innerText = weatherInfo.main.temp + "\xB0" + " C";
    document.getElementById("status").innerText = weatherInfo.weather[0].main;

    const iconUrl = `https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`;
    document.getElementById("icon").setAttribute('src', iconUrl);
}