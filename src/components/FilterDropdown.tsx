import { BiChevronDown } from "react-icons/bi";
import {
  CountryFilterContext,
  useCountryFilterContext,
} from "../contexts/CountryFilterContext";
import { Region } from "../types";

const FilterDropdown = () => {
  const { countryFilter, setCountryFilter } =
    useCountryFilterContext(CountryFilterContext);

  function handleOptionClick(region: Region) {
    setCountryFilter({ ...countryFilter, region: region });
  }

  return (
    <div className="w-[60%] relative">
      {/** Select input */}
      <select
        className="p-4 w-full appearance-none shadow-md rounded-md outline-very-dark-blue-2 bg-white dark:bg-dark-blue cursor-pointer"
        onChange={(e) =>
          handleOptionClick(
            e.target.value ? (e.target.value as Region) : undefined
          )
        }
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      {/** Down icon */}
      <BiChevronDown className="w-6 h-6 absolute top-4 right-4 " />
    </div>
  );
};

export default FilterDropdown;
