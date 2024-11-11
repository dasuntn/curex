import axios from "axios";

const getLatestRates = axios.get(
  `http://data.fixer.io/api/latest?access_key=${process.env.EXPO_PUBLIC_FIXER_API_KEY}`
);

export { getLatestRates };
