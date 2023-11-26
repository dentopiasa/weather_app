const displayCity = document.querySelector("#displayCity");
const displayTemp = document.querySelector("#displayTemp");
const displayTime = document.querySelector("#displayTime");
const submitBtn = document.querySelector("#submitBtn");

async function checkWeather() {
    const citySearch = document.querySelector("#cityInput").value;
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=f0d24420e44943d199d160311232311&q=' + `${citySearch}`);
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

submitBtn.addEventListener("click", ()=>{
    checkWeather();
})




 