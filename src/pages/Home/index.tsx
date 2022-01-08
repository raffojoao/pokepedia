import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {SearchBox, PokeCard, PokeList} from '../../components';
import {usePokemon} from '../../hooks/pokemon/PokemonProvider';
import {useNavigation} from '@react-navigation/native';

import * as S from './styles';

const Home: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [sortByNumber, setSortByNumber] = useState(true);

  const {
    getAllPokemon,
    allPokemon,
    hasNext,
    hasPrevious,
    getNext,
    getPrevious,
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
        <View
          style={{backgroundColor: 'yellow', flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity
            style={{width: 100, height: 100, backgroundColor: 'blue'}}
            onPress={getPrevious}
            disabled={!hasPrevious}
          />
          <TouchableOpacity
            style={{width: 100, height: 100, backgroundColor: 'red'}}
            onPress={getNext}
            disabled={!hasNext}
          />
        </View>
      </S.Wrapper>
    </S.Container>
  );
};

export default Home;
