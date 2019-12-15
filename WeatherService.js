import { resolve } from 'url';

// BEGIN
class WeatherService {
  apiUrl = 'http://localhost:8080/api/v2/';

  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async lookUp(cityName) {
    const url = resolve(this.apiUrl, `cities/${cityName}`);
    const response = await this.httpClient.get(url);
    return JSON.parse(response.data);
  }
}

export default WeatherService;
// END
