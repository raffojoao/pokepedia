import React, {createContext, useContext} from 'react';
import api from '../../services/api';

const PokemonProviderContext = createContext({});

const PokemonProvider = ({children}: any) => {
  const getPokemon = async (params?: string) => {
    const response = await api.get(
      `https://pokeapi.co/api/v2/pokemon/${params}`,
    );
    return response.data;
  };

  return (
    <PokemonProviderContext.Provider
      value={{
        getPokemon,
      }}>
      {children}
    </PokemonProviderContext.Provider>
  );
};

const usePokemon = () => {
  const context = useContext(PokemonProviderContext);

  if (!context)
    throw new Error(
      'usePokemonProvider must be used within as PokemonProviderContext',
    );

  return context;
};

export {PokemonProvider, usePokemon};
