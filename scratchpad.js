//get variables
const btn = document.getElementById("btn");
btn.addEventListener('click', callWeatherAPI);
const zipCode = document.getElementById("ZipCode");
const errorMessage = document.getElementById("errorMessage");
const cityName = document.getElementById("cityName");
const temperatureK = document.getElementById("temperatureK");
const temperatureF = document.getElementById("temperatureF");
const temperatureC = document.getElementById("temperatureC");
const condition = document.getElementById("Condition");
const image = document.getElementById("Image");
// scratchpad js
// fetch
var key = "9486e32b8910c337e546831e5ddf6106";
var zip = "40505"; //document.getHTMLById(input)
var api = `https://api.openweathermap.org/data/2.5/weather?appid=${key}&zip=${zip}`;
var data = null;
// callweatherAPI function
async function callWeatherAPI() {
    // set zip
    let zipInput = document.getElementById("ZipCode").value;
    // set newApi to function when called 
    let newApi = `https://api.openweathermap.org/data/2.5/weather?appid=${key}&zip=${zipInput}`;
    const response = await fetch(newApi).then(function (response) {
        // return json data from api
        return response.json();
    }).then(function (json) {
        console.log(json);
        data = json;
        // display 404 message when using invalid zip
        if (data.cod == "404") {
            alert(data.message);
        }
        // if valid zip run function to call 
        else
            // set variables to return specified json data
            cityName.textContent = data.name;
            let temperature = data.main.temp;
            temperatureK.textContent = `${Math.floor(temperature)} K`;
            temperatureF.textContent = `${Math.floor((temperature * (9 / 5) - 459.67))} F`;
            temperatureC.textContent = `${Math.floor(temperature - 273.15)} C`;
            condition.textContent = data.weather[0].main;
            image.src = "./images/" + data.weather[0].icon + ".png";

    }).catch((error) => {
        console.log('Fetch problem: ' + error.message);
        //renderAlert ('that didn't work')
    });
    // id for weather app site:
    // domain to call weather api:
    console.log(response);
    // alert('page call completed');
}




