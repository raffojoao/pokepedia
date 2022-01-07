import React from 'react';
import {PokemonProvider} from './PokemonProvider';

const PokemonAppProvider: React.FC = ({children}: any) => (
  <PokemonProvider>{children}</PokemonProvider>
);

export default PokemonAppProvider;
