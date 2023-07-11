//https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=eea08e85833db8cb3ca7cce1d92ffd9c&units=metric

//https://api.openweathermap.org/data/2.5/weather?q={chennai}&appid={eea08e85833db8cb3ca7cce1d92ffd9c}
let apiKey = 'eea08e85833db8cb3ca7cce1d92ffd9c';

 

function getWeather(){
  let city = document.getElementById('inputValues').value;
const url = 'https://api.openweathermap.org/data/2.5/weather';
let fullUrl = `${url}?q=${city}&appid=${apiKey}&units=metric`;
const weatherFeatch  = fetch(fullUrl);
weatherFeatch.then((resp) => resp.json())


.then((data) => {
    //console.log(data);
    let nameData = data.name;
    let temperatureData = data.main.temp;
    let descriptionData = data.weather[0].description;
    let humidityData = data.main.humidity;
    let windSpeedData = data.wind.speed;
    let countryData = data.sys.country;
    var imageData = data.weather[0].icon;

    console.log(imageData);
    document.getElementById("temperature").innerHTML = temperatureData;
    document.getElementById("description").innerHTML = descriptionData;
    document.getElementById("cityName").innerHTML = nameData;
    document.getElementById("humidity").innerHTML = humidityData;
    document.getElementById("windSpeed").innerHTML = windSpeedData;
    document.getElementById("country").innerHTML = countryData;
    document.getElementById("time").innerHTML = Date();
    document.getElementById("image").innerHTML = imageData;
    //********************** */
    
function bgChange(){
  if (imageData === "04d" || imageData === "04n"){
    document.getElementById("bg").style.backgroundImage="url(/images/brokenClouds.jpg)";
    console.log(imageData);
  }

  else if (imageData==="01n" || imageData==="01d"){
    document.getElementById("bg").style.backgroundImage="url(/images/clearSky.jpg)";
  }
  else if (imageData==="02n" || imageData === "02d"){
    document.getElementById("bg").style.backgroundImage="url(/images/fewClouds.jpg)";
  }
  else if (imageData==="03n" || imageData === "03d"){
    document.getElementById("bg").style.backgroundImage="url(/images/scatteredClouds.jpg)";
  }
  else if (imageData==="09n" || imageData === "09d"){
    document.getElementById("bg").style.backgroundImage="url(/images/showerRain.jpg)";
  }
  else if (imageData==="10n" || imageData === "10d"){
    document.getElementById("bg").style.backgroundImage="url(/images/rain.jpg)";
  }
  else if (imageData==="11n" || imageData === "11d"){
    document.getElementById("bg").style.backgroundImage="url(/images/thunderstorm.jpg)";
  }
  else if (imageData==="13n" || imageData === "13d"){
    document.getElementById("bg").style.backgroundImage="url(/images/snow.jpg)";
  }
  else if (imageData==="50n" || imageData === "50d"){
    document.getElementById("bg").style.backgroundImage="url(/images/mist.jpg)";
  }
  }
      bgChange();
      });
    //   weatherFeatch.catch(() => {
    //    // document.innerHTML = `<h3 class="msg">City not found</h3>`;
	  //  //document.getElementById("error").innerHTML="City not found";
	  //  document.getElementById("error").innerHTML="City not found";
    //   });

}
