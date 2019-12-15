/* eslint no-console: 0 */
import axios from 'axios';
import WeatherService from '../WeatherService';

// BEGIN
const weather = new WeatherService(axios);
const cityName = process.argv[2];
weather.lookUp(cityName).then(data => {
  const message = `Temperature in ${data.name}: ${data.temperature}C`;
  console.log(message);
});
// END
