import React, {useEffect} from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';

import {PokeCard, SearchBox} from '../../components';

import {useNavigation} from '@react-navigation/native';
import {usePokemon} from '../../hooks/pokemon/PokemonProvider';

import * as S from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const {getPokemon} = usePokemon();

  return (
    <S.Container>
      <SearchBox />
    </S.Container>
  );
};

export default Home;
