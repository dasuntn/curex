import React from "react";
import currencyExchangeStyles from "./currencyExchange.styles";
import { Ionicons } from "@expo/vector-icons";
import InputSection from "./components/InputSection";
import { View } from "react-native";
import { useCurrencyExchange } from "./currencyExchange.logic";
import ErrorComponent from "../components/errorComponent/ErrorComponent";
import ResultSection from "./components/ResultSection";
import colors from "../../assets/styles/colors";

const CurrencyExchange: React.FC = () => {
  const {
    country,
    amount,
    setAmount,
    selectedCurrency,
    setSelectedCurrency,
    convertedAmount,
    latestRatesData,
  } = useCurrencyExchange();

  return (
    <View style={currencyExchangeStyles.outerContainer}>
      <View style={currencyExchangeStyles.container}>
        <View style={currencyExchangeStyles.imageWrapper}>
          <Ionicons name="swap-horizontal" size={32} color={colors.orange} />
        </View>
        <View style={currencyExchangeStyles.verticleLine} />
        <View style={currencyExchangeStyles.convertionContainer}>
          <InputSection amount={amount} setAmount={setAmount} />
          <View style={currencyExchangeStyles.horizontalLine} />
          <ResultSection
            setSelectedCurrency={setSelectedCurrency}
            selectedCurrency={selectedCurrency}
            currencies={country.currencies.filter((cur) => !!cur.code)}
            convertedAmount={convertedAmount.amount}
          />
        </View>
      </View>
      {!!convertedAmount.error && (
        <ErrorComponent msg={convertedAmount.error} />
      )}
      {!!latestRatesData && latestRatesData.error && (
        <ErrorComponent msg={latestRatesData.error} />
      )}
      <View style={currencyExchangeStyles.bottomSection} />
    </View>
  );
};

export default CurrencyExchange;
