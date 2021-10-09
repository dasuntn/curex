import { getConvertedRate } from "../currencyExchange.logic";

//relative to euro
const testLatestRates = {SEK: 10.16, LKR: 235.53};

describe('Get Converted Rate Test',()=>{

  test('emptyText', () => {
    expect(getConvertedRate(testLatestRates, 'LKR', 200).amount).toEqual(4636.417322834645)
  });

})
