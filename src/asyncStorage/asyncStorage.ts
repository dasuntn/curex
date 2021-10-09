import AsyncStorage from '@react-native-async-storage/async-storage';
import { LatestRates } from '../typing/common/exchangeRates';
/**
 * Function will store the send time stamp in async storage
 *
 * @param  {number} value
 */
const cacheTimeStampOnRatesData = async (value: number): Promise<void> => {
  try {
    await AsyncStorage.setItem('@time_stamp_on_getRates', value.toString());
  } catch (e) {
    console.error(e);
  }
};

/**
 * Function will store the latest exchange rate data in async storage
 *
 * @param  {LatestRates} value
 */
const cacheRateData = async (value: LatestRates): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@rate_data', jsonValue);
  } catch (e) {
    console.error(e);
  }
};
/**
 * Function will retrieve time stamp data from async storage
 */
const getCachedTimeStampOnRatesData = async (): Promise<number | undefined> => {
  try {
    const value = await AsyncStorage.getItem('@time_stamp_on_getRates');
    if (value !== null) {
      return parseInt(value);
    }
  } catch (e) {
    console.error(e);
  }
};

/**
 * Function will retrieve the latest exchange rate data from async storage
 */
const getCachedRateData = async (): Promise<LatestRates | undefined> => {
  try {
    const jsonValue = await AsyncStorage.getItem('@rate_data');
    return jsonValue != null ? (JSON.parse(jsonValue) as LatestRates) : undefined;
  } catch (e) {
    console.error(e);
  }
};

export {
  cacheRateData,
  cacheTimeStampOnRatesData,
  getCachedRateData,
  getCachedTimeStampOnRatesData,
};
