export interface Country {
  name: string;
  capital: string;
  currencies: Currency[];
  population: number;
  cca2: string;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface CountryResult {
  countries: CountryApi[] | undefined;
  error: string | undefined;
  loading: boolean;
}

export type CountryApi = {
  name: { common: string };
  capital: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  population: number;
  cca2: string;
};
