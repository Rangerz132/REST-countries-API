import { createContext, useContext, useState } from "react";
import { Region } from "../types";

type CountryFilter = {
  region: Region;
  search: string | undefined;
};

const initialCountryFilter: CountryFilter = {
  region: undefined,
  search: undefined,
};

type CountryFilterContext = {
  countryFilter: CountryFilter;
  setCountryFilter: React.Dispatch<React.SetStateAction<CountryFilter>>;
};

export const CountryFilterContext = createContext<CountryFilterContext | null>(
  null
);

export function CountryFilterContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [countryFilter, setCountryFilter] =
    useState<CountryFilter>(initialCountryFilter);

  return (
    <CountryFilterContext.Provider value={{ countryFilter, setCountryFilter }}>
      {children}
    </CountryFilterContext.Provider>
  );
}

export function useCountryFilterContext(
  countryFilterContext: React.Context<CountryFilterContext | null>
) {
  const context = useContext(countryFilterContext);

  if (!context) {
    throw new Error(
      "useCountryFilterContext has to be within CountryFilterContextProvider..."
    );
  } else {
    return context;
  }
}
