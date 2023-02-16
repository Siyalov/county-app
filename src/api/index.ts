import { Countries } from "./types";

const apiURL = "https://restcountries.com/v3.1/";

class API {
  async getCountries() {
    const response = await fetch(apiURL + "all");
    if (response.ok) {
      const data = await response.json();
      return data as Array<Countries>;
    } else {
      return [];
    }
  }
  async getCountriesByCCA3(cca3: string) {
    const response = await fetch(apiURL + "alpha/" + cca3);
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
