export interface ConvertedAmountResponse {
  amount: number;
  error: string | undefined;
}

export interface LatestRates {
  [key: string]: number;
}

export interface FixerApiResponse {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: LatestRates;
  error?: {
    code: number;
    info: string;
  };
}

export interface LatestRateResult {
  rates: LatestRates | undefined;
  error: string | undefined;
  loading: boolean;
};
