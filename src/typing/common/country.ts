export interface Country {
  capital: string;
  currencies: CurrencyList;
  name: {
    common: string;
    official: string;
    nativeName: [];
  };
  flags: {
    png: string;
  };
  population: number;
  cca2: string;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface CountryResult {
  countries: Country[] | undefined;
  error: string | undefined;
  loading: boolean;
}
export type CurrencyList = {
  [key: string]: {
    name: string;
    symbol: string;
  };
};
