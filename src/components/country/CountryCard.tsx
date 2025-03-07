import { Country } from "../../types";

const CountryCard = (props: { data: Country }) => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden rounded-md shadow-md cursor-pointer hover:scale-105 transition-transform duration-200">
      {/** Flag */}
      <div className="w-full h-40">
        <img src={props.data.flag} className="w-full h-full object-cover" />
      </div>
      <div className="bg-white p-6 flex flex-col space-y-6 w-full dark:bg-dark-blue ">
        {/** Name */}
        <h1 className="font-bold text-2xl text-ellipsis line-clamp-1">
          {props.data.name}
        </h1>
        <div className="flex flex-col space-y-2">
          {/** Population */}
          <div className="flex flex-row space-x-1">
            <span className="font-bold">Population:</span>
            <span>{props.data.population}</span>
          </div>
          {/** Region */}
          <div className="flex flex-row space-x-1">
            <span className="font-bold">Region:</span>
            <span>{props.data.region}</span>
          </div>
          {/** Capital */}
          <div className="flex flex-row space-x-1">
            <span className="font-bold">Capital:</span>
            <span>{props.data.capital}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
