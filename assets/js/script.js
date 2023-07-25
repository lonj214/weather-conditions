const apiKey = "fe27a4ac1f7e47c2d9d5b18ee79cc084";
// const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?=&units=metric&q=";
// I am getting an error; also need to delete my api key from the url below


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=fe27a4ac1f7e47c2d9d5b18ee79cc084&units=metric"
    const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q="+ city +"&appid=fe27a4ac1f7e47c2d9d5b18ee79cc084&units=metric"
    const response = await fetch(apiUrl);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
        console.log(data)

        document.querySelector(".city").innerHTML = data.name;
        // saying that temp is not defined
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "clouds") {
            weatherIcon.src = "icons/clouds.png";
        }
        else if (data.weather[0].main == "clear") {
            weatherIcon.src = "icons/clear.png";
        }
        else if (data.weather[0].main == "rain") {
            weatherIcon.src = "icons/rain.png";
        }
        else if (data.weather[0].main == "drizzle") {
            weatherIcon.src = "icons/drizzle.png";
        }
        else if (data.weather[0].main == "mist") {
            weatherIcon.src = "icons/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
    const forecastResponse = await fetch(forecastUrl);

    if (forecastResponse.status == 404) {
        // document.querySelector(".error").style.display = "block";
        // document.querySelector(".weather").style.display = "none";
        console.log("404error")
    } else {
        var forecast = await forecastResponse.json();
        console.log(forecast)
        for (let i = 0; i < forecast.list.length; i++) {
            if (forecast.list[i].dt_txt.includes("12:00:00")){
                console.log(forecast.list[i])
            }
          }
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
    var history = JSON.parse(localStorage.getItem("previousSearch")) || []
    if (!history.includes(searchBox.value)){
        history.push(searchBox.value)
        localStorage.setItem("previousSearch", JSON.stringify(history))
    }
})


$(".search").each(function(){
    var id = $(this).attr("id")
    $(this).children("input").val(localStorage.getItem(id))
})
// TODO need to add this into local storage. There needs to be a section for the search history