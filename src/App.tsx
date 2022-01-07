import React from 'react';
import {View, Text} from 'react-native';
import Navigation from './routes';
import {ThemeProvider} from 'styled-components';
import {defaultTheme} from './themes/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
