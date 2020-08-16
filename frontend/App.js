import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux'
import store from './store'
import Main from './main'
import theme from './theme';

export default function App() {

  return (
    <NavigationContainer>
      <ReduxProvider store={store}>
        <PaperProvider theme={theme}>
          <Main />
        </PaperProvider>
      </ReduxProvider>
    </NavigationContainer>

  );
}


