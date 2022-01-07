import React, {useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {PokeCard} from '../../components';

import {useNavigation} from '@react-navigation/native';
import {usePokemon} from '../../hooks/pokemon/PokemonProvider';

import * as S from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const {getPokemon} = usePokemon();

  const getPkmTest = async () => {
    const pokemon: any = await getPokemon('1');
    console.log(pokemon?.name);
  };

  useEffect(() => {
    getPkmTest();
  }, []);
  return (
    <S.Test>
      <TouchableOpacity onPress={() => navigation.navigate('Catalog')}>
        <Text style={{fontSize: 72}}>Go to Catalog</Text>
        <PokeCard
          title="Bulbasaur"
          number="1"
          spriteUri="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          handlePress={() => console.log('Test')}
        />
      </TouchableOpacity>
    </S.Test>
  );
};

export default Home;
