import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home/Home';
import CurrencyExchange from '../pages/currencyExchange/CurrencyExchange';
import colors from '../assets/styles/colors';
import { Country } from '../typing/common/country';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Home: undefined;
  CurrencyExchange: { country: Country };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStack: React.FC = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    <Stack.Screen
      name="CurrencyExchange"
      component={CurrencyExchange}
      options={{ title: 'Currency Exchange', headerTintColor: colors.darkGary }}
    />
  </Stack.Navigator>
);

export default HomeStack;
