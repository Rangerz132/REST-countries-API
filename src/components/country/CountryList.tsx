import { Country } from "../../types";
import CountryCard from "./CountryCard";

const CountryList = (props: { countries: Country[] }) => {
  return (
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 sm:px-0">
      {props.countries.map((country) => (
        <CountryCard data={country} key={country.name} />
      ))}
    </div>
  );
};

export default CountryList;
