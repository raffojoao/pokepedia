import React, {useEffect, useState} from 'react';
import {SearchBox, PokeList, Footer} from '../../components';
import {usePokemon} from '../../hooks/pokemon/PokemonProvider';
import {useNavigation} from '@react-navigation/native';

import * as S from './styles';

const Home: React.FC = () => {
  const [sortByNumber, setSortByNumber] = useState(true);

  const {
    getAllPokemon,
    allPokemon,
    setAllPokemon,
    hasNext,
    getNext,
    totalFound,
    offset,
  } = usePokemon();

  const navigation = useNavigation();

  const getPokemon = async () => {
    await getAllPokemon();
  };

  const toggleSortMode = () => {
    setSortByNumber(!sortByNumber);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  useEffect(() => {
    if (!sortByNumber) {
      const pokemonByName = allPokemon.sort((a, b) =>
        a.name.localeCompare(b.name),
      );
      setAllPokemon(pokemonByName);
    }
  }, [sortByNumber]);

  return (
    <S.Container>
      <SearchBox sortByNumber={sortByNumber} toggleSortMode={toggleSortMode} />
      <S.Wrapper>
        <S.ListContainer>
          <PokeList
            data={allPokemon}
            footer={hasNext && <Footer handlePress={getNext} />}
          />
        </S.ListContainer>
      </S.Wrapper>
    </S.Container>
  );
};

export default Home;
