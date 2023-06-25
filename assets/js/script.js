const apiKey = "5ccf588deb3a55fdba751a7c9991a3a7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=new york";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp;
    document.querySelector(".description").innerHTML = data.weather[0].main;
    document.querySelector(".humidity").innerHTML = data.main.humidity;



}
checkWeather();