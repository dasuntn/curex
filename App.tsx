import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './src/navigation/HomeStack';
import { StyleSheet, SafeAreaView } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import { StatusBar } from 'expo-status-bar';

const App: React.FC = () => (
  <SafeAreaView style={styles.container}>
    <StatusBar hidden={true} />
    <MenuProvider>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </MenuProvider>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default App;
