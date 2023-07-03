const apiKey = "5ccf588deb3a55fdba751a7c9991a3a7";

function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit.toFixed(0);
  }

  //var searchCity = document.getElementById("text-city").value.trim();
  

async function fiveDayForecast(){
    var searchCity = document.getElementById("text-city").value.trim();
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${searchCity}&appid=${apiKey}`;

    const response = await fetch(forecastUrl + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    const cardTwo = document.getElementById("weather-two");
    var fahrenheit = celsiusToFahrenheit(data.list[1].main.temp);
        document.querySelector(".temperature-2").innerHTML = fahrenheit + "°F";
        document.querySelector(".description-2").innerHTML = data.list[1].weather[0].main;

    const cardThree = document.getElementById("weather-three");
    var fahrenheit = celsiusToFahrenheit(data.list[2].main.temp);
    document.querySelector(".temperature-3").innerHTML = fahrenheit + "°F";
    document.querySelector(".description-3").innerHTML = data.list[2].weather[0].main;
   
    const cardFour = document.getElementById("weather-four");
    var fahrenheit = celsiusToFahrenheit(data.list[3].main.temp);
    document.querySelector(".temperature-4").innerHTML = fahrenheit + "°F";
    document.querySelector(".description-4").innerHTML = data.list[3].weather[0].main;

    const cardFive = document.getElementById("weather-five");
    var fahrenheit = celsiusToFahrenheit(data.list[4].main.temp);
    document.querySelector(".temperature-5").innerHTML = fahrenheit + "°F";
    document.querySelector(".description-5").innerHTML = data.list[4].weather[0].main;
    
    const weatherIcon = document.querySelector(".weather-icon");
    
    const weatherImageTwo = document.getElementById("weather-icon-two");
    if(data.list[1].weather[0].main == 'Clouds'){
        weatherIcon.src = "./Assets/images/cloudy.png";
    }
    else if(data.list[1].weather[0].main == 'Clear'){
        weatherIcon.src = "./Assets/images/clear.png";
    }
    else if(data.list[1].weather[0].main == 'Rain'){
        weatherIcon.src = "./Assets/images/rain.png";
    }
    else if(data.list[1].weather[0].main == 'Sunny'){
        weatherIcon.src = "./Assets/images/sunny.png";
    }
    else if(data.list[1].weather[0].main == 'Snow'){
        weatherIcon.src = "./Assets/images/snow.png";
    }

    const weatherImageThree = document.getElementById("weather-icon-three"); 
    if(data.list[2].weather[0].main == "Clouds"){
        weatherIcon.src = "./Assets/images/cloudy.png";
    }
    else if(data.list[2].weather[0].main == "Clear"){
        weatherIcon.src = "./Assets/images/clear.png";
    }
    else if(data.list[2].weather[0].main == "Rain"){
        weatherIcon.src = "./Assets/images/rain.png";
    }
    else if(data.list[2].weather[0].main == "Sunny"){
        weatherIcon.src = "./Assets/images/sunny.png";
    }
    else if(data.list[2].weather[0].main == "Snow"){
        weatherIcon.src = "./Assets/images/snow.png";
    }

    const weatherImageFour = document.getElementById("weather-icon-four");   
    if(data.list[3].weather[0].main == "Clouds"){
        weatherIcon.src = "./Assets/images/cloudy.png";
    }
    else if(data.list[3].weather[0].main == "Clear"){
        weatherIcon.src = "./Assets/images/clear.png";
    }
    else if(data.list[3].weather[0].main == "Rain"){
        weatherIcon.src = "./Assets/images/rain.png";
    }
    else if(data.list[3].weather[0].main == "Sunny"){
        weatherIcon.src = "./Assets/images/sunny.png";
    }
    else if(data.list[3].weather[0].main == "Snow"){
        weatherIcon.src = "./Assets/images/snow.png";
    }

    const weatherImageFive = document.getElementById("weather-icon-five");    
    if(data.list[4].weather[0].main == "Clouds"){
        weatherIcon.src = "./Assets/images/cloudy.png";
    }
    else if(data.list[4].weather[0].main == "Clear"){
        weatherIcon.src = "./Assets/images/clear.png";
    }
    else if(data.list[4].weather[0].main == "Rain"){
        weatherIcon.src = "./Assets/images/rain.png";
    }
    else if(data.list[4].weather[0].main == "Sunny"){
        weatherIcon.src = "./Assets/images/sunny.png";
    }
    else if(data.list[4].weather[0].main == "Snow"){
        weatherIcon.src = "./Assets/images/snow.png";
    }




}  

async function checkWeather(){
    var searchCity = document.getElementById("text-city").value.trim();
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${searchCity}`;

    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data)
    var fahrenheit = celsiusToFahrenheit(data.main.temp);
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = fahrenheit + "°F";
    document.querySelector(".description").innerHTML = data.weather[0].main;
    document.querySelector(".humidity").innerHTML = "humidity=" + data.main.humidity;
  
  

  
}


fiveDayForecast();
checkWeather();


var citySearchBtn = document.getElementById("search-city");
citySearchBtn.addEventListener("click", checkWeather);
citySearchBtn.addEventListener("click", fiveDayForecast);