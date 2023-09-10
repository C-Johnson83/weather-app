let inputval = document.querySelector('#cityinput');
let btn = document.querySelector('#add');
let city = document.querySelector('#cityoutput');
let descrip = document.querySelector('#description');
let temp = document.querySelector('#temp');
let feeltemp = document.querySelector('#feeltemp');
let wind = document.querySelector('#wind');
let humidity = document.querySelector('#humidity'); 
let pressure = document.querySelector('#pressure'); 
let cloudy = document.querySelector('#cloudy'); 
apik = "51ba52544eb7da4bbab62a6b3b2cfd38";

function convertion(val) {
  return ((val - 273.15) * 9 / 5 + 32).toFixed(2);
}


btn.addEventListener('click', function () {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputval.value + '&appid=' + apik)
    .then(res => res.json())

    .then(data => {
      let nameval = data['name'];
      let descripVal = data['weather']['0']['description']; 
      let tempature = data['main']['temp'];
      let feeltempature = data['main']['feels_like'];
      let wndspd = data['wind']['speed'];
      let humidityVal = data['main']['humidity'];
      let pressVal = data['main']['pressure'];
      let cloudVal =data['clouds']['all'];
      city.innerHTML = `Weather of <span>${nameval}</span>`;
      temp.innerHTML = `Temperature: <span>${convertion(tempature)} F</span>`;
      feeltemp.innerHTML = `Feels Like Temperature: <span>${convertion(feeltempature)} F</span>`;
      descrip.innerHTML = `Sky Conditions: <span>${descripVal}</span>`;
      cloudy.innerHTML = `Cloudiness: <span>${cloudVal} %</span>`;
      wind.innerHTML = `Wind Speed: <span>${(wndspd * 2.23694).toFixed(2)} mph</span>`;
      humidity.innerHTML = `Humidity: <span>${humidityVal}%</span>`; 
      pressure.innerHTML = `Atmospheric Pressure: <span>${pressVal} hPa</span>`;
     

    })
    .catch(err => alert('No city found with that name, try again'));
});
