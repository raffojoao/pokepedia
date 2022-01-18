import React, {createContext, useState, useContext, useEffect} from 'react';
import api from '../../services/api';

export type Pokemon = {
  name: string;
  number: string;
  url: string;
  weight: string;
  height: string;
  types: object[];
  moves: object[];
};
export interface IPokemonContext {
  getAllPokemon: (limit?: number, offset?: number) => Promise<void>;
  allPokemon: Pokemon[];
  setAllPokemon?: (pokemon: any[]) => void;
  getPokemon: (number: string) => Promise<void>;
  getDescription: (number: string) => Promise<void>;
  getMainType: (name: string) => Promise<void>;
}

const PokemonContext = createContext<IPokemonContext>({} as IPokemonContext);

const PokemonProvider = ({children}: any) => {
  const [allPokemon, setAllPokemon] = useState([]);

  const getAllPokemon = async () => {
    try {
      const response = await (
        await api.get(`https://pokeapi.co/api/v2/pokemon?limit=898`)
      ).data;

      setAllPokemon(response.results);
      return response.results;
    } catch (error) {
      console.log(error);
    }
  };

  const getPokemon = async (number: string) => {
    try {
      const response = await api.get(
        `https://pokeapi.co/api/v2/pokemon/${number}`,
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getDescription = async (number: string) => {
    try {
      const response = (
        await api.get(`https://pokeapi.co/api/v2/pokemon-species/${number}`)
      ).data;

      const allDescriptions = response.flavor_text_entries.filter(
        (flavor: any) => flavor.language.name === 'en',
      );
      const description = allDescriptions[0].flavor_text;
      return description.replace(/\r\n|\r|\n|\f/gm, ' ');
    } catch (error) {
      console.log(error);
    }
  };

  const getMainType = async (name: string) => {
    const type = await (
      await api.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    ).data;
    return type.types[0].type.name;
  };

  return (
    <PokemonContext.Provider
      value={{
        getAllPokemon,
        allPokemon,
        setAllPokemon,
        getPokemon,
        getDescription,
        getMainType,
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
