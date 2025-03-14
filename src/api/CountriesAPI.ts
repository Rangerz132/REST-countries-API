import axios from "axios";
import { Country } from "../types";

const BASE_URL = "http://localhost:3200/countries";

export class CountriesAPI {
  static async getCountries(): Promise<Country[]> {
    return (await axios.get<Country[]>(BASE_URL)).data;
  }

  static async getCountryByName(name: string): Promise<Country> {
    const countries = (await axios.get<Country[]>(BASE_URL)).data;
    return countries.find((country) => country.name === name) as Country;
  }
}
