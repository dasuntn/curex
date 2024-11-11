import axios from "axios";

const getAll = axios.get(
  "https://restcountries.com/v3.1/all?fields=name,capital,currencies,population,cca2"
);

export { getAll };
