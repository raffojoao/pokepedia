import React, {createContext, useState, useContext} from 'react';
import api from '../../services/api';

type Pokemon = {
  name: string;
  url: string;
};
export interface IPokemonContext {
  getAllPokemon: (limit?: number, offset?: number) => Promise<void>;
  allPokemon: Pokemon[];
  setAllPokemon?: (pokemon: any[]) => void;
  hasNext: boolean;
  hasPrevious: boolean;
  setHasNext: () => void;
  setHasPrevious: () => void;
  getNext: () => Promise<void>;
  getPrevious: () => Promise<void>;
  totalFound: string;
  setTotalFound: (total: string) => void;
  offset: number;
  setOffset: (offset: number) => void;
}

const PokemonContext = createContext<IPokemonContext>({} as IPokemonContext);

const PokemonProvider = ({children}: any) => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrevious, setHasPrevious] = useState(false);
  const [nextUrl, setNextUrl] = useState('');
  const [previousUrl, setPreviousUrl] = useState('');
  const [totalFound, setTotalFound] = useState('');
  const [offset, setOffset] = useState(20);

  const handlePagination = (response: any) => {
    if (response.next) {
      setHasNext(true);
      setNextUrl(response.next);
    } else {
      setHasNext(false);
    }

    if (response.previous) {
      setHasPrevious(true);
      setPreviousUrl(response.previous);
    } else {
      setHasPrevious(false);
    }
  };

  const getAllPokemon = async () => {
    try {
      const response = await (
        await api.get(`https://pokeapi.co/api/v2/pokemon/`)
      ).data;

      handlePagination(response);

      setTotalFound(response.count);
      setAllPokemon(response.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getNext = async () => {
    if (hasNext) {
      try {
        const response = (await api.get(nextUrl)).data;
        setAllPokemon(response.results);
        setOffset(offset + 20);
        handlePagination(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getPrevious = async () => {
    if (hasPrevious) {
      try {
        const response = await (await api.get(previousUrl)).data;
        setAllPokemon(response.results);
        setOffset(offset - 20);
        handlePagination(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        getAllPokemon,
        allPokemon,
        hasNext,
        hasPrevious,
        getNext,
        getPrevious,
        setHasNext,
        setHasPrevious,
        totalFound,
        setTotalFound,
        offset,
        setOffset,
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
