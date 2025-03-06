import { BiChevronDown } from "react-icons/bi";
const FilterDropdown = () => {
  return (
    <div className="w-[60%] relative">
      {/** Select input */}
      <select className="p-4 w-full appearance-none shadow-md rounded-md outline-very-dark-blue-2">
        <option>Filter by Region</option>
        <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
      {/** Down icon */}
      <BiChevronDown className="w-6 h-6 absolute top-4 right-4 " />
    </div>
  );
};

export default FilterDropdown;
