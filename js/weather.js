const API_KEY = 'c8377209b7454b687be5552cc59b23af'

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then((response) => response.json()).then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} ${data.main.temp} ℃`;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you")
}


//브라우저에서 wifi, 위치 등 아래 코드만 있으면 다양한 정보를 줌
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);