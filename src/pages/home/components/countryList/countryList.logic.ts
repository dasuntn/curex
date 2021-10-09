import { Currency } from '../../../../typing/common/country';

/**
 * Funtion will return currency names string joined with commas.
 *
 * @param  {Currency[]} currencyList
 * @returns string
 */
const getCurrencies = (currencyList: Currency[]): string => {
  return currencyList.length > 1
    ? currencyList.map((currency) => currency.name).join(', ')
    : currencyList[0].name;
};

export { getCurrencies };
