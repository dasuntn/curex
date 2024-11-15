import { useEffect, useState } from "react";
import {
  Country,
  CountryApi,
  CountryResult,
} from "../../typing/common/country";
import { getAll as getAllCountries } from "../../apis/countries";
import { searchFilter } from "../../helpers/helpers";

const searchParam = ["name", "capital"];

const useCountry = () => {
  const [searchText, setSearchText] = useState("");
  const [countriesData, setCountryData] = useState<CountryResult>();
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  /**
   *  Function will fetch all country list from `restcountries` api and store in local state
   */
  const fetchCountries = async () => {
    setCountryData({ countries: undefined, error: undefined, loading: true });

    getAllCountries
      .then((result) => {
        if (!!result && !!result.data) {
          const countries = result.data?.map(
            (country: CountryApi) => {
              const currencies = Object.values(country.currencies).map(
                (item, index) => ({
                  code: Object.keys(country.currencies)[index],
                  name: item.name,
                  symbol: item.symbol,
                })
              );
              return {
                ...country,
                name: country.name.common,
                capital: country.capital[0],
                currencies,
              };
            }
          );

          setCountryData({
            countries,
            error: undefined,
            loading: false,
          });
          setFilteredCountries(countries);
        }
      })
      .catch(() => {
        setCountryData({
          countries: undefined,
          error: "Could not access the country list",
          loading: false,
        });
      });
  };

  useEffect(() => {
    if (
      !!countriesData &&
      !!countriesData.countries &&
      countriesData.countries.length > 0
    ) {
      const result = searchFilter(
        countriesData.countries,
        searchParam,
        searchText
      );

      setFilteredCountries(result as Country[]);
    } else {
      setCountryData({
        countries: undefined,
        error: "Could not access the country list",
        loading: false,
      });
    }
  }, [searchText]);

  useEffect(() => {
    fetchCountries();
  }, []);

  return { searchText, setSearchText, filteredCountries, countriesData };
};

export { useCountry };
