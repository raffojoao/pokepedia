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
  getDescription: (number: string) => Promise<void>;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const PokemonContext = createContext<IPokemonContext>({} as IPokemonContext);

const PokemonProvider = ({children}: any) => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [hasNext, setHasNext] = useState(false);
  const [nextUrl, setNextUrl] = useState('');
  const [totalFound, setTotalFound] = useState('');
  const [offset, setOffset] = useState(0);
  const [viewedItems, setViewedItems] = useState(offset + 20);
  const [loading, setLoading] = useState(false);

  const handlePagination = (response: any) => {
    if (response.next) {
      setHasNext(true);
      setNextUrl(response.next);
    } else {
      setHasNext(false);
    }
  };

  const getAllPokemon = async () => {
    setLoading(true);
    try {
      const response = await (
        await api.get(`https://pokeapi.co/api/v2/pokemon?limit=898`)
      ).data;

      handlePagination(response);
      setAllPokemon(response.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getNext = async () => {
    if (hasNext) {
      try {
        setLoading(true);
        const difference = 898 - viewedItems;
        if (difference >= 20) {
          const response = (await api.get(nextUrl)).data;
          setOffset(offset + 20);
          setViewedItems(viewedItems + 20);
          setAllPokemon(oldState => [...oldState, ...response.results]);
          handlePagination(response);
          setLoading(false);
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
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  const searchPokemon = async (name: string) => {
    try {
      setLoading(true);
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
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getPokemon = async (number: string) => {
    try {
      setLoading(true);
      const response = await api.get(
        `https://pokeapi.co/api/v2/pokemon/${number}`,
      );
      setLoading(false);
      return response.data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getDescription = async (number: string) => {
    try {
      setLoading(true);
      const response = (
        await api.get(`https://pokeapi.co/api/v2/pokemon-species/${number}`)
      ).data;

      const allDescriptions = response.flavor_text_entries.filter(
        (flavor: any) => flavor.language.name === 'en',
      );
      const description = allDescriptions[0].flavor_text;
      setLoading(false);
      setLoading(false);
      return description.replace(/\r\n|\r|\n|\f/gm, ' ');
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
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
        getDescription,
        loading,
        setLoading,
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
