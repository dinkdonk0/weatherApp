const apiKey = 'cf17ad2e04c94c868b8101510233004';
const nameElement = document.querySelector('.name');
const regionElement = document.querySelector('.region');
const countryElement = document.querySelector('.country');
const tempElement = document.querySelector('.temp');
const statsElement = document.querySelector('.stats');

const locationForm = document.querySelector('#location-form');
const locationInput = document.querySelector('#location-input');
const submitButton = document.querySelector('.submit-button');

async function getWeatherData(location) {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);
      if (response.ok) {
        const data = await response.json();
      console.log(data);
      const cityName = data.location.name;
      const region = data.location.region;
      const country = data.location.country;
      const temperature = data.current.temp_c; 
      const stats = data.current.condition.text;
      
      //const weatherText = `The current temperature in ${cityName}, ${region}, ${country} is ${temperature}°C.`;
      updateVariables(cityName, region, country, temperature, stats);
      console.log(weatherText);
    } else {
      console.error(`Error fetching weather data: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error(`Error fetching weather data: ${error}`);
  }
}

function updateVariables(name,region,country,temp, stats){
  nameElement.innerText = name;
  regionElement.innerText = region;
  countryElement.innerText = country;
  tempElement.innerText = `${Math.round(temp)}°C`;
  statsElement.innerText = stats;
}


locationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const location = locationInput.value;
  getWeatherData(location);
});
