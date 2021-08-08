const API_KEY = "5fce7c091bd3e87600b1df6d2274b59f";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data=>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = data.weather[0].main;
        city.innerText = data.name;
    });
}
function onGeoError(){
    alert("Can`t find You. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);