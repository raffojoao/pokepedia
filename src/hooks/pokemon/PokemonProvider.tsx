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
  hasNext: boolean;
  setHasNext: () => void;
  getNext: () => Promise<void>;
  totalFound: string;
  setTotalFound: (total: string) => void;
  offset: number;
  setOffset: (offset: number) => void;
  searchPokemon: (name: string) => Promise<void>;
  loadMore: () => Promise<void>;
  totalViewed: number;
  setTotalViewed: (number: number) => void;
  getPokemon: (number: string) => Promise<void>;
}

const PokemonContext = createContext<IPokemonContext>({} as IPokemonContext);

const PokemonProvider = ({children}: any) => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [hasNext, setHasNext] = useState(false);
  const [nextUrl, setNextUrl] = useState('');
  const [totalFound, setTotalFound] = useState('');
  const [offset, setOffset] = useState(0);
  const [viewedItems, setViewedItems] = useState(offset + 20);

  const handlePagination = (response: any) => {
    if (response.next) {
      setHasNext(true);
      setNextUrl(response.next);
    } else {
      setHasNext(false);
    }
  };

  const getAllPokemon = async () => {
    try {
      const response = await (
        await api.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}`)
      ).data;

      handlePagination(response);
      setAllPokemon(response.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getNext = async () => {
    if (hasNext) {
      try {
        const difference = 898 - viewedItems;
        if (difference >= 20) {
          const response = (await api.get(nextUrl)).data;
          setOffset(offset + 20);
          setViewedItems(viewedItems + 20);
          setAllPokemon(oldState => [...oldState, ...response.results]);
          handlePagination(response);
        } else {
          const response = (
            await api.get(
              `https://pokeapi.co/api/v2/pokemon?limit=${difference}&offset=${viewedItems}`,
            )
          ).data;
          setAllPokemon(oldState => [...oldState, ...response.results]);
          setOffset(898);
          setViewedItems(898);
          setHasNext(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const searchPokemon = async (name: string) => {
    try {
      let foundPokemon = await (
        await api.get(`https://pokeapi.co/api/v2/pokemon?limit=898`)
      ).data;

      foundPokemon = foundPokemon.results.filter(item =>
        item.name.toLowerCase().includes(name.toLowerCase()),
      );

      // setTotalFound(foundPokemon.length);
      // if (foundPokemon.length < 20) {
      //   setOffset(foundPokemon.length);
      // }
      setAllPokemon(foundPokemon);
      setHasNext(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getPokemon = async (number: string) => {
    const response = await api.get(
      `https://pokeapi.co/api/v2/pokemon/${number}`,
    );
    return response.data;
  };

  return (
    <PokemonContext.Provider
      value={{
        getAllPokemon,
        allPokemon,
        hasNext,
        getNext,
        setHasNext,
        totalFound,
        setTotalFound,
        offset,
        setOffset,
        searchPokemon,
        setAllPokemon,
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
