export interface Country {
  capital: string;
  currencies: Currency[];
  name: string;
  population: number;
  numericCode: string;
  alpha2Code: string;
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
};
