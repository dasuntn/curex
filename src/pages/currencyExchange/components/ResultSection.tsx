import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { Currency } from '../../../typing/common/country';
import currencyExchangeStyles from '../currencyExchange.styles';
import CurrencySelect from './currencySelect/CurrencySelect';

type Props = {
  selectedCurrency: Currency | undefined;
  setSelectedCurrency: React.Dispatch<React.SetStateAction<Currency | undefined>>;
  currencies: Currency[];
  convertedAmount: number;
};

const ResultSection: React.FC<Props> = ({
  setSelectedCurrency,
  selectedCurrency,
  currencies,
  convertedAmount,
}: Props) => {

  return (
    <View style={currencyExchangeStyles.currencySection}>
      <Text style={currencyExchangeStyles.locatAmountText}>Local Amount</Text>
      <View style={currencyExchangeStyles.currencyInfo}>
        <View style={currencyExchangeStyles.outputTextContainer}>
          <Text numberOfLines={1} style={currencyExchangeStyles.symbolText}>
            {selectedCurrency?.symbol}
          </Text>
          <Text numberOfLines={1} style={currencyExchangeStyles.convertedResultText}>
            {convertedAmount.toFixed(4)}
          </Text>
        </View>
        <CurrencySelect
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setSelectedCurrency}
          currencies={currencies}
        />
      </View>
    </View>
  );
};

export default memo(ResultSection);
