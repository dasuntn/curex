import { CurrencyList } from "../../../../typing/common/country";

/**
 * Function will return currency names string joined with commas.
 *
 * @param  {CurrencyList} currencyList
 * @returns string
 */
const getCurrencies = (currencyList: CurrencyList): string => {
  const currencies = Object.values(currencyList);

  return currencies.length > 1
    ? currencies.map((currency) => currency.name).join(", ")
    : currencies[0]?.name ?? "";
};

export { getCurrencies };
