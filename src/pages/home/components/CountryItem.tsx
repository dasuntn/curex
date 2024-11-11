import React, { memo } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import countryListStyles from "./countryList/countryList.styles";
import Flag from "react-native-flags";
import { Country } from "../../../typing/common/country";
import { getCurrencies } from "./countryList/countryList.logic";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import colors from "../../../assets/styles/colors";

type Props = {
  country: Country;
};

const CountryItem: React.FC<Props> = ({ country }: Props) => {
  const availableCurrencies = getCurrencies(country.currencies);
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigate("CurrencyExchange", { country })}
      style={countryListStyles.countryContainer}
    >
      <Flag code={country.cca2} size={64} />
      <View style={countryListStyles.detail}>
        <Text numberOfLines={2} style={countryListStyles.nameText}>
          {country.name.official}
        </Text>
        <Text
          style={countryListStyles.capitalText}
        >{`Capital: ${country.capital}`}</Text>
        <Text
          style={countryListStyles.otherText}
        >{`Population: ${country.population}`}</Text>
        <Text
          style={countryListStyles.otherText}
          numberOfLines={2}
        >{`Currency: ${availableCurrencies}`}</Text>
      </View>
      <View style={countryListStyles.arrowIcon}>
        <Ionicons
          name="chevron-forward-outline"
          size={24}
          color={colors.darkGary}
        />
      </View>
    </TouchableOpacity>
  );
};

export default memo(CountryItem);
