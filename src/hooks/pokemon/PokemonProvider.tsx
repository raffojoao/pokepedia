import React, {createContext, useState, useContext} from 'react';
import api from '../../services/api';
interface IPokemonContext {
  getPokemon: (params: string) => Promise<void>;
}

const PokemonContext = createContext<IPokemonContext>({} as IPokemonContext);

const PokemonProvider = ({children}: any) => {
  const getPokemon = async (params?: string) => {
    const response = await api.get(
      `https://pokeapi.co/api/v2/pokemon/${params}`,
    );
    return response.data;
  };

  return (
    <PokemonContext.Provider
      value={{
        getPokemon,
      }}>
      {children}
    </PokemonContext.Provider>
  );
};

function usePokemon(): IPokemonContext {
  const context = useContext(PokemonContext);

  if (!context)
    throw new Error(
      'usePokemonProvider must be used within as PokemonProvider',
    );

  return context;
}

export {PokemonProvider, usePokemon};
