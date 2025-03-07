import { TbSearch } from "react-icons/tb";
import {
  CountryFilterContext,
  useCountryFilterContext,
} from "../contexts/CountryFilterContext";
const SearchBar = () => {
  const { countryFilter, setCountryFilter } =
    useCountryFilterContext(CountryFilterContext);

  function handleInputChange(e: string) {
    setCountryFilter({ ...countryFilter, search: e });
  }

  return (
    <div className="w-full relative">
      {/** Input */}
      <input
        onChange={(e) => handleInputChange(e.target.value)}
        type="text"
        placeholder="Search for a country..."
        className="w-full py-4 pl-14 shadow-md rounded-md placeholder:text-dark-gray text-dark-gray outline-very-dark-blue-2 bg-white"
      ></input>
      {/** Search Icon */}
      <TbSearch className="text-dark-gray w-6 h-6 absolute left-4 top-4" />
    </div>
  );
};

export default SearchBar;
