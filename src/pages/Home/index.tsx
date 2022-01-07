import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {usePokemon} from '../../hooks/pokemon/PokemonProvider';

import * as S from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const {getPokemon} = usePokemon();

  const getPkmTest = async () => {
    const pokemon = await getPokemon('1');
    console.log(pokemon.name);
  };

  useEffect(() => {
    getPkmTest();
  }, []);
  return (
    <S.Test>
      <TouchableOpacity onPress={() => navigation.navigate('Catalog')}>
        <Text style={{fontSize: 72}}>Go to Catalog</Text>
      </TouchableOpacity>
    </S.Test>
  );
};

export default Home;
