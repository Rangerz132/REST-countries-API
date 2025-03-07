import Header from "./components/Header";
import FilterSection from "./components/FilterSection";
import { useEffect, useState } from "react";
import { CountriesAPI } from "./api/CountriesAPI";
import { Country } from "./types";

import CountryList from "./components/country/CountryList";

function Home() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await CountriesAPI.getCountries();

        setCountries(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="flex flex-col space-y-6">
      <Header />
      <div className="w-full wrapper flex flex-col space-y-12">
        <FilterSection />

        {countries.length != 0 && <CountryList countries={countries} />}
      </div>
    </div>
  );
}

export default Home;
