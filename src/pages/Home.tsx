import { useEffect, useState } from "react";
import { Country } from "../types";
import {
  CountryFilterContext,
  useCountryFilterContext,
} from "../contexts/CountryFilterContext";
import { CountriesAPI } from "../api/CountriesAPI";
import Header from "../components/Header";
import FilterSection from "../components/FilterSection";
import CountryList from "../components/country/CountryList";

function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filterdCountries, setFilteredCountries] = useState<Country[]>([]);
  const { countryFilter } = useCountryFilterContext(CountryFilterContext);

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
      country.name
        .toLowerCase()
        .includes(countryFilter.search?.toLowerCase() as string)
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
    <div className="w-full wrapper flex flex-col space-y-12 py-12">
      <FilterSection />

      {countries.length != 0 && <CountryList countries={filterdCountries} />}
    </div>
  );
}

export default Home;
