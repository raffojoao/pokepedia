import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {SearchBox, PokeCard, PokeList, Footer} from '../../components';
import {usePokemon} from '../../hooks/pokemon/PokemonProvider';
import {useNavigation} from '@react-navigation/native';

import * as S from './styles';

const Home: React.FC = () => {
  const [sortByNumber, setSortByNumber] = useState(true);

  const {
    getAllPokemon,
    allPokemon,
    hasNext,
    hasPrevious,
    getNext,
    getPrevious,
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
    getPokemon();
  }, [sortByNumber]);

  return (
    <S.Container>
      <SearchBox sortByNumber={sortByNumber} toggleSortMode={toggleSortMode} />
      <S.Wrapper>
        <S.ListContainer>
          <PokeList data={allPokemon} />
        </S.ListContainer>
      </S.Wrapper>
      <Footer
        leftButtonEnabled={hasPrevious}
        rightButtonEnabled={hasNext}
        onPressLeftButton={getPrevious}
        onPressRightButton={getNext}
        totalItems={totalFound}
        currentItems={offset}
        // onChangeOffset={(ed: string) => console.warn(ed)}
      />
    </S.Container>
  );
};

export default Home;
