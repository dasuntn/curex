import { useEffect, useState } from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/HomeStack';
import Constants from 'expo-constants';
import { AxiosResponse } from 'axios';
import { Currency } from '../../typing/common/country';
import { getLatestRates as getLatestRatesFromApi } from '../../apis/fixer';
import { isWithinCurrentTimeLimit } from '../../helpers/helpers';
import {
  getCachedTimeStampOnRatesData,
  getCachedRateData,
  cacheRateData,
  cacheTimeStampOnRatesData,
} from '../../asyncStorage/asyncStorage';
import {
  ConvertedAmountResponse,
  FixerApiResponse,
  LatestRateResult,
  LatestRates,
} from '../../typing/common/exchangeRates';

const FIXER_UPDATE_RATE_IN_SEC: number =
  !!Constants.manifest && !!Constants.manifest.extra
    ? (Constants.manifest.extra.FIXER_UPDATE_RATE_IN_SEC as number)
    : 3600;

const SEK = 'SEK';

const useCurrencyExchange = () => {
  const [amount, setAmount] = useState<string>('1');
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>();
  const [latestRatesData, setLatestRatesData] = useState<LatestRateResult>({
    rates: undefined,
    error: undefined,
    loading: false,
  });
  const [convertedAmount, setConvertedAmount] = useState<ConvertedAmountResponse>({ amount: 0, error: undefined });
  const { params: { country } } = useRoute<RouteProp<RootStackParamList, 'CurrencyExchange'>>();

  /**
   * Function to decide wheather to access latest exchange rates from async storage
   * or to fetch from fixer api
   */
  const getLatestRates = async () => {
    try {
      const cachedTimestamp: number | undefined = await getCachedTimeStampOnRatesData();

      if (!!cachedTimestamp && isWithinCurrentTimeLimit(cachedTimestamp, FIXER_UPDATE_RATE_IN_SEC)) {
        const cachedlatestRates = await getCachedRateData();
        if (cachedlatestRates) {
          setLatestRatesData({ rates: cachedlatestRates, error: undefined, loading: false });
        } else {
          fetchLatestRates();
        }
      } else {
        fetchLatestRates();
      }
    } catch (error) {
      console.error(error)
    }
  };

  /**
   * Function fetches the latest rates from fixer api and save to local state and async storage
   */
  const fetchLatestRates = async () => {
    setLatestRatesData({ rates: undefined, error: undefined, loading: true });
    getLatestRatesFromApi
      .then((result: AxiosResponse<FixerApiResponse>) => {
        if (!!result && !!result.data) {
          if (result.data.success) {
            cacheTimeStampOnRatesData(result.data.timestamp);
            cacheRateData(result.data.rates);
            setLatestRatesData({ rates: result.data.rates, error: undefined, loading: false });
          } else {
            setLatestRatesData({
              rates: undefined,
              error: result.data.error?.info,
              loading: false,
            });
          }
        }
      })
      .catch(() => {
        setLatestRatesData({ rates: undefined, error: 'Please try again later', loading: false });
      });
  };

  useEffect(() => {
    getLatestRates();

    //To fetch latest exchange rates from background after
    const dataInterval = setInterval(() => getLatestRates(), FIXER_UPDATE_RATE_IN_SEC * 1000);

    return () => clearInterval(dataInterval);
  }, [FIXER_UPDATE_RATE_IN_SEC]);

  useEffect(() => {
    if (!!country && country.currencies.length > 0) {
      setSelectedCurrency(country.currencies.filter((cur) => !!cur.code)[0]);
    }
  }, []);

  useEffect(() => {
    if (!!amount && !!latestRatesData && latestRatesData.rates && !!selectedCurrency && !!selectedCurrency.code) {

      setConvertedAmount(getConvertedRate(latestRatesData.rates, selectedCurrency.code, parseFloat(amount)));

    } else {
      setConvertedAmount({ amount: 0, error: undefined });
    }
  }, [amount, latestRatesData, selectedCurrency]);

  return { country, amount, setAmount, selectedCurrency, setSelectedCurrency, convertedAmount, latestRatesData };

};

/**
 * 
 * Function to convert Swedish krona values to requested currency 
 * using the latest available exchange rates.
 * 
 * @param  {LatestRates} latestRates
 * @param  {string} code
 * @param  {number} amount
 * @returns ConvertedAmountResponse
 */
export const getConvertedRate = (
  latestRates: LatestRates,
  code: string,
  amount: number,
): ConvertedAmountResponse => {

  //   Since the free version of Fixer API does not support base currency change, 
  //  had to get the latest rates with respect to Euro and then convert to Swedish krona.

  const sek = latestRates[SEK];
  const codeRate = latestRates[code];

  if (amount >= 0 && !!sek && !!codeRate) {
    return { amount: (amount * codeRate) / sek, error: undefined };
  } else {
    return { amount: 0, error: 'Could not get the rates' };
  }
};

export { useCurrencyExchange };
