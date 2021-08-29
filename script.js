document.getElementById("search-btn").addEventListener('click',function(){
    let searchBox = document.getElementById('search-box').value;
    let searchText = searchBox.toLowerCase();
    loadWeather(searchText);
})

const loadWeather = city => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=efd8db67abb1188c9d4bd00b43f9de6b&units=metric`
    fetch(url)
    .then( ref => ref.json())
    .then( data => displayWeather(data))
}

const displayWeather = city => {

    let weatherIcon = document.getElementById('weather-icon');
    let cityName = document.getElementById('city-name');
    let cityTemp = document.getElementById('city-temp');
    let cityWeather = document.getElementById('city-weather');
    weatherIcon.setAttribute('src',`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`);
    cityName.innerText = `${city.name}`;
    cityTemp.innerText = `${city.main.temp}`
    cityWeather.innerText = `${city.weather[0].main}`
    let searchBox = document.getElementById('search-box');
    searchBox.value ='';
}