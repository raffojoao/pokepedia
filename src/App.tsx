import React from 'react';
import Navigation from './routes';
import {ThemeProvider} from 'styled-components';
import {defaultTheme} from './themes/theme';
import {PokemonAppProvider} from './hooks';

const App: React.FC = () => {
  return (
    <PokemonAppProvider>
      <ThemeProvider theme={defaultTheme}>
        <Navigation />
      </ThemeProvider>
    </PokemonAppProvider>
  );
};

export default App;
