let inputval = document.querySelector('#cityinput')
let btn = document.querySelector('#add');
let city = document.querySelector('#cityoutput')
let descrip = document.querySelector('#description')
let temp = document.querySelector('#temp')
let wind = document.querySelector('#wind')
apik = "51ba52544eb7da4bbab62a6b3b2cfd38"
function convertion(val) {
  return ((val - 273.15) * 9 / 5 + 32).toFixed(2)
}

btn.addEventListener('click', function () {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputval.value + '&appid=' + apik)
    .then(res => res.json())


    .then(data => {
      let nameval = data['name']
      let descrip = data['weather']['0']['description']
      let tempature = data['main']['temp']
      let wndspd = data['wind']['speed']
      city.innerHTML = `Weather of <span>${nameval}<span>`
      temp.innerHTML = `Temperature: <span>${convertion(tempature)} F</span>`
      description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
      wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`

    })

    .catch(err => alert('You entered Wrong city name'))
})