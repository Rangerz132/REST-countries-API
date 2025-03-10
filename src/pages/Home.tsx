import { useEffect, useState } from "react";
import { Country } from "../types";
import {
  CountryFilterContext,
  useCountryFilterContext,
} from "../contexts/CountryFilterContext";
import { CountriesAPI } from "../api/CountriesAPI";
import FilterSection from "../components/FilterSection";
import CountryList from "../components/country/CountryList";
import useScrollPosition from "../hooks/useScrollPosition";

function Home() {
  const [visibleCountryCount, setVisibleCountryCount] = useState(12);
  const [countries, setCountries] = useState<Country[]>([]);
  const [filterdCountries, setFilteredCountries] = useState<Country[]>([]);
  const { countryFilter } = useCountryFilterContext(CountryFilterContext);

  const { isBottom } = useScrollPosition();

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
    setVisibleCountryCount(12);
  }, [countryFilter]);

  useEffect(() => {
    if (isBottom) {
      setVisibleCountryCount((prevState) => (prevState += 12));
    }
  }, [isBottom]);

  return (
    <div className="w-full wrapper flex flex-col space-y-12 py-12">
      <FilterSection />

      {countries.length != 0 && (
        <CountryList
          countries={filterdCountries.slice(0, visibleCountryCount)}
        />
      )}
    </div>
  );
}

export default Home;
