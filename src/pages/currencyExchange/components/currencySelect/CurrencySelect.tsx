import React, {memo} from 'react';
import { View, Text } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { Currency } from '../../../../typing/common/country';
import currencySelectStyles from './currencySelect.styles';

type Props = {
  selectedCurrency: Currency | undefined;
  setSelectedCurrency: React.Dispatch<React.SetStateAction<Currency | undefined>>;
  currencies: Currency[];
};

const CurrencySelect: React.FC<Props> = ({
  selectedCurrency,
  setSelectedCurrency,
  currencies,
}: Props) => {

  return (
    <>
    {currencies.length > 1 ? (
        <Menu style={currencySelectStyles.menuContainer}>
          <MenuTrigger
            text={selectedCurrency?.code}
            customStyles={{ triggerText: currencySelectStyles.menuTriggerText }}
          />
          <MenuOptions
            customStyles={{
              optionsContainer: currencySelectStyles.menuOptions,
            }}>
            {currencies.map((item) => (
              <MenuOption
                key={item.code}
                onSelect={() => setSelectedCurrency(item)}
                text={item.code}
                customStyles={{
                  optionText: currencySelectStyles.menuOptionTex,
                }}
              />
            ))}
          </MenuOptions>
        </Menu>)
        : (
          <View style={currencySelectStyles.enterCodeWrapper}>
            <Text style={currencySelectStyles.enterCodeText}>{currencies[0].code}</Text>
          </View>
        )}
    </>
  );
};

export default memo(CurrencySelect)
