import React, { memo } from 'react';
import { TextInput } from 'react-native';
import { View, Text } from 'react-native';
import currencyExchangeStyles from '../currencyExchange.styles';

type Props = {
  amount: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
};
const InputSection: React.FC<Props> = ({ amount, setAmount }: Props) => {

  return (
    <View style={currencyExchangeStyles.currencySection}>
      <Text style={currencyExchangeStyles.enterText}>Enter Amount</Text>
      <View style={currencyExchangeStyles.currencyInfo}>
        <View style={currencyExchangeStyles.outputTextContainer}>
          <Text numberOfLines={1} style={currencyExchangeStyles.symbolText}>
            kr
          </Text>
          <TextInput
            value={amount}
            onChangeText={(text) => (text.length > 0 ? setAmount(text) : setAmount(''))}
            keyboardType="numeric"
            autoFocus={true}
            style={currencyExchangeStyles.amountTextInput}
          />
        </View>
        <View style={currencyExchangeStyles.enterCodeWrapper}>
          <Text style={currencyExchangeStyles.enterCodeText}>SEK</Text>
        </View>
      </View>
    </View>
  );
};

export default memo(InputSection);
