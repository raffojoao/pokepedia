import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Images from '../../constants/images';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Pokemon, usePokemon} from '../../hooks/pokemon/PokemonProvider';
import {TypeCard} from '../../components';

import * as S from './styles';
import {Header, Attributes, Stats} from '../../components';
import api from '../../services/api';

const Details: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {getPokemon, getDescription} = usePokemon();
  const [mainType, setMainType] = useState('');
  const [types, setTypes] = useState([]);
  const [pokeName, setPokename] = useState('');
  const [pokeNumber, setPokeNumber] = useState('');
  const [pokemonData, setPokemonData] = useState<Pokemon>();
  const [description, setDescription] = useState('');
  const [baseStats, setBaseStats] = useState([]);

  const pokemon: any = route.params;

  const getPokemonData = async () => {
    setPokename(pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1));
    let zeros = '';
    for (var i = 0; i < 3 - pokemon.number.length; i++) {
      zeros += '0';
    }
    setPokeNumber(`#${zeros + pokemon?.number}`);

    const pokeData: any = await getPokemon(pokemon.number);
    setPokemonData(pokeData);
    setTypes(pokeData.types);
    setMainType(pokeData.types[0].type.name);
    setBaseStats(pokeData.stats);

    const pokeDescription = await getDescription(pokemon.number);
    setDescription(pokeDescription);
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  const typeImgs = {
    bug: () => {
      return <Images.bug />;
    },
    dark: () => {
      return <Images.dark />;
    },
    dragon: () => {
      return <Images.dragon />;
    },
    electric: () => {
      return <Images.electric />;
    },
    fairy: () => {
      return <Images.fairy />;
    },
    fighting: () => {
      return <Images.fighting />;
    },
    flying: () => {
      return <Images.flying />;
    },
    ghost: () => {
      return <Images.ghost />;
    },
    grass: () => {
      return <Images.grass />;
    },
    ground: () => {
      return <Images.ground />;
    },
    ice: () => {
      return <Images.ice />;
    },
    normal: () => {
      return <Images.normal />;
    },
    poison: () => {
      return <Images.poison />;
    },
    psychic: () => {
      return <Images.psychic />;
    },
    rock: () => {
      return <Images.rock />;
    },
    steel: () => {
      return <Images.steel />;
    },
    water: () => {
      return <Images.water />;
    },
  };

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
              return typeImgs[item.type.name]();
            })}
          </S.TypeContainer>
          <S.TitleContainer>
            <S.Title pageColor={mainType}>About</S.Title>
          </S.TitleContainer>
          <Attributes
            weight={pokemonData?.weight}
            height={pokemonData?.height}
            moves={pokemonData?.moves}
          />
          <S.DescriptionContainer>
            <S.Description>{description}</S.Description>
          </S.DescriptionContainer>
          <S.TitleContainer>
            <S.Title pageColor={mainType}>BaseStats</S.Title>
          </S.TitleContainer>
          <Stats type={mainType} stats={baseStats} />
        </S.DataContainer>
      </S.Wrapper>
    </S.Container>
  );
};

export default Details;
