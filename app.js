const citySearch = document.querySelector("#cityInput").value;
const displayCity = document.querySelector("#displayCity");
const displayTemp = document.querySelector("#displayTemp");
const displayTime = document.querySelector("#displayTime");


const apiKey = "f0d24420e44943d199d160311232311";
const apiUrl = "http://api.weatherapi.com/v1/current.json&q=London";



async function checkWeather() {
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=f0d24420e44943d199d160311232311&q=London');
    var data = await response.json();
    console.log(data);
    const city = data.location.name;
    const time = data.location.localtime;
    const temperature = data.current.temp_c;
    console.log(city);
    console.log(time);
    console.log(temperature);
    displayCity.textContent = city;
    displayTemp.textContent = temperature;
    displayTime.textContent = time;
}
checkWeather();

 