import { BiLeftArrowAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { CountriesAPI } from "../api/CountriesAPI";
import { Country } from "../types";
import CountryInfo from "../components/country/CountryInfo";

const CountryDetails = () => {
  const [country, setCountry] = useState<Country | null>(null);
  const { countryName } = useParams();

  useEffect(() => {
    const fetchCountry = async () => {
      const data = await CountriesAPI.getCountryByName(countryName as string);
      setCountry(data);
    };

    fetchCountry();
  }, []);

  function getComplexData(
    country: Country,
    key: string,
    value: string
  ): string {
    if (!country![key]) {
      return "None";
    }
    return country![key].map((currentKey) => currentKey[value]).join(", ");
  }

  return (
    <div className="py-12">
      {country && (
        <div className="wrapper flex flex-col space-y-10 md:flex-row md:items-center md:space-x-12">
          <div className="space-y-10 md:basis-1/2">
            <Link
              to="/"
              className="rounded-md shadow flex flex-row bg-white dark:bg-dark-blue max-w-30 px-6 py-1 space-x-1 cursor-pointer"
            >
              <BiLeftArrowAlt className="w-6 h-6" />
              <span>Back</span>
            </Link>
            {/** Flag */}
            <div>
              <img src={country.flag} alt={countryName} />
            </div>
          </div>

          <div className="flex flex-col space-y-12  md:basis-1/2">
            <h1 className="font-bold text-2xl hidden md:flex">
              {country.name}
            </h1>
            <div className="flex flex-col space-y-12 md:flex-row md:space-y-0 md:space-x-12 md:justify-between">
              {/** First info section */}
              <div className="flex flex-col space-y-6">
                <h1 className="font-bold text-2xl md:hidden">{country.name}</h1>
                <div className="flex flex-col space-y-2">
                  <CountryInfo
                    title={"Native name"}
                    info={country.nativeName}
                  />
                  <CountryInfo title={"Population"} info={country.population} />
                  <CountryInfo title={"Region"} info={country.region} />
                  <CountryInfo title={"Sub region"} info={country.subregion} />
                  <CountryInfo title={"Capital"} info={country.capital} />
                </div>
              </div>

              {/** Second info section */}
              <div className="flex flex-col space-y-2">
                <CountryInfo
                  title={"Top level domain"}
                  info={country.topLevelDomain}
                />
                <CountryInfo
                  title={"Currencies"}
                  info={getComplexData(country, "currencies", "name")}
                />
                <CountryInfo
                  title={"Languages"}
                  info={getComplexData(country, "languages", "name")}
                />
              </div>
            </div>

            {/** Countries borders */}
            <div>
              {country.borders && (
                <>
                  <h2 className="text-xl capitalize font-bold">
                    Border countries:
                  </h2>
                  <div className="flex flex-row justify-start flex-wrap  pt-2 space-x-2 space-y-2">
                    {country.borders.map((border) => (
                      <div
                        key={border}
                        className="shadow bg-white px-6 py-1 rounded-md dark:bg-dark-blue"
                      >
                        {border}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
