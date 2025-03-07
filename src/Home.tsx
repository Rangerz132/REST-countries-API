import Header from "./components/Header";
import FilterSection from "./components/FilterSection";
import { useEffect, useState } from "react";
import { CountriesAPI } from "./api/CountriesAPI";
import { Country } from "./types";

import CountryList from "./components/country/CountryList";
import {
  CountryFilterContext,
  useCountryFilterContext,
} from "./contexts/CountryFilterContext";

function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filterdCountries, setFilteredCountries] = useState<Country[]>([]);
  const { countryFilter, setCountryFilter } =
    useCountryFilterContext(CountryFilterContext);

  function filterCountriesByRegion() {
    const newFilteredCountries = countries.filter(
      (country) => country.region === countryFilter.region
    );

    return countryFilter.region === undefined
      ? countries
      : newFilteredCountries;
  }

  function filterCountriesBySearch() {
    if (countryFilter.search === undefined) {
      return countries;
    }

    return countries.filter((country) =>
      country.name.includes(countryFilter.search as string)
    );
  }

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await CountriesAPI.getCountries();
        setCountries(data);
        setFilteredCountries(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const filteredCountryBySearchList = filterCountriesBySearch();
    const filteredCountryByRegionList = filterCountriesByRegion();

    const commonCountries = filteredCountryBySearchList.filter((country) =>
      filteredCountryByRegionList.includes(country)
    );

    setFilteredCountries(commonCountries);
  }, [countryFilter]);

  return (
    <div className="flex flex-col ">
      <Header />
      <div className="w-full wrapper flex flex-col space-y-12 py-12">
        <FilterSection />

        {countries.length != 0 && <CountryList countries={filterdCountries} />}
      </div>
    </div>
  );
}

export default Home;
