import { Countries } from "./types";

const apiURL = 'https://restcountries.com/v3.1/all';

class API {
  async getCountries() {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      return data as Array<Countries>;
    } else {
      return [];
    }
  }
}

const api = new API();

export default api;
