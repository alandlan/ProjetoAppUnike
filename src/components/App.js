// @flow
import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { Routes } from './organisms';
import theme from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
);

export default App;
