const apiKey = 'cf17ad2e04c94c868b8101510233004';

async function getWeatherData(location) {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);
      if (response.ok) {
        const data = await response.json();
      
      
      const cityName = data.location.name;
      const region = data.location.region;
      const country = data.location.country;
      const temperature = data.current.temp_c; 
      
      const weatherText = `The current temperature in ${cityName}, ${region}, ${country} is ${temperature}°C.`;
      
      console.log(weatherText);
    } else {
      console.error(`Error fetching weather data: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error(`Error fetching weather data: ${error}`);
  }
}

  getWeatherData("Stockholm");