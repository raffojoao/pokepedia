import React from 'react';
import Navigation from './routes';
import {ThemeProvider} from 'styled-components';
import {defaultTheme} from './themes/theme';
import {PokemonAppProvider} from './hooks';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App: React.FC = () => {
  return (
    <PokemonAppProvider>
      <ThemeProvider theme={defaultTheme}>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </ThemeProvider>
    </PokemonAppProvider>
  );
};

export default App;
