import FilterDropdown from "./FilterDropdown";
import SearchBar from "./SearchBar";

const FilterSection = () => {
  return (
    <div className="flex flex-col space-y-6">
      <SearchBar />
      <FilterDropdown />
    </div>
  );
};

export default FilterSection;
