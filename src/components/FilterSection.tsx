import FilterDropdown from "./FilterDropdown";
import SearchBar from "./SearchBar";

const FilterSection = () => {
  return (
    <div className="flex flex-col space-y-6 sm:flex-row sm:justify-between">
      <SearchBar />
      <FilterDropdown />
    </div>
  );
};

export default FilterSection;
