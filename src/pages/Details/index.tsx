import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import Images from '../../constants/images';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Pokemon, usePokemon} from '../../hooks/pokemon/PokemonProvider';
import {typeCard} from '../../constants/types';

import * as S from './styles';
import {Header} from '../../components';

const Details: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {getPokemon} = usePokemon();
  const [mainType, setMainType] = useState('');
  const [types, setTypes] = useState([]);
  const [pokeName, setPokename] = useState('');
  const [pokeNumber, setPokeNumber] = useState('');

  const pokemon: Pokemon = route.params;

  const getPokemonData = async () => {
    setPokename(pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1));
    let zeros = '';
    for (var i = 0; i < 3 - pokemon.number.length; i++) {
      zeros += '0';
    }
    setPokeNumber(`#${zeros + pokemon?.number}`);

    const pokeData = await getPokemon(pokemon.number);
    setTypes(pokeData.types);
    setMainType(pokeData.types[0].type.name);
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  return (
    <S.Container pageColor={mainType}>
      <Header
        pokemonName={pokeName}
        pokemonNumber={pokeNumber}
        onPressIcon={() => navigation.goBack()}
      />
      <S.Wrapper>
        <S.ImageContainer>
          <Images.pokeball fillOpacity={0.1} />
        </S.ImageContainer>
        <S.DataContainer>
          <Image
            style={{
              width: 200,
              height: 200,
              position: 'absolute',
              top: -150,
              // backgroundColor: 'red',
            }}
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.number}.png`,
            }}
          />
          <S.TypeContainer>
            {types.map(item => {
              return (
                <Image
                  style={{
                    width: 42,
                    height: 20,
                    marginHorizontal: 8,
                  }}
                  source={typeCard[item.type.name]}
                  key={String(item.type.name)}
                />
              );
            })}
          </S.TypeContainer>
        </S.DataContainer>
      </S.Wrapper>
    </S.Container>
  );
};

export default Details;
