import { Link } from "react-router";
import { Country } from "../../types";
import CountryInfo from "./CountryInfo";

const CountryCard = (props: { data: Country }) => {
  return (
    <Link
      to={`/countryDetails/${props.data.name}`}
      className="flex flex-col items-center justify-center overflow-hidden rounded-md shadow-md cursor-pointer hover:scale-105 transition-transform duration-200"
    >
      {/** Flag */}
      <div className="w-full h-40">
        <img src={props.data.flag} className="w-full h-full object-cover" />
      </div>
      <div className="bg-white p-6 flex flex-col space-y-6 w-full dark:bg-dark-blue ">
        {/** Name */}
        <h1 className="font-bold text-2xl text-ellipsis line-clamp-1">
          {props.data.name}
        </h1>
        {/** Info */}
        <div className="flex flex-col space-y-2">
          <CountryInfo title={"Population"} info={props.data.population} />
          <CountryInfo title={"Region"} info={props.data.region} />
          <CountryInfo title={"Capital"} info={props.data.capital} />
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
