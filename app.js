const city = document.querySelector("#cityInput").value;

const apiKey = "f0d24420e44943d199d160311232311";
const apiUrl = "http://api.weatherapi.com/v1/current.json&q=London";



 async function checkWeather() {
     const response = await fetch('http://api.weatherapi.com/v1/current.json?key=f0d24420e44943d199d160311232311&q=London');
     var data = await response.json();
     console.log(data);
     const temperature = data.current.temp_c;
     console.log(temperature);
 }
 checkWeather();

 