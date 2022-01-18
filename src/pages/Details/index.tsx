import React, {useEffect, useState} from 'react';
import {Image, ActivityIndicator} from 'react-native';
import Images from '../../constants/images';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Pokemon, usePokemon} from '../../hooks/pokemon/PokemonProvider';

import * as S from './styles';
import {Header, Attributes, Stats} from '../../components';
import api from '../../services/api';
import {SafeAreaView} from 'react-native-safe-area-context';

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
  const [loading, setloading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

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

    setloading(false);
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  const typeImgs = {
    bug: () => {
      return <Images.bug style={{marginHorizontal: 4}} key="bug" />;
    },
    dark: () => {
      return <Images.dark style={{marginHorizontal: 4}} key="dark" />;
    },
    dragon: () => {
      return <Images.dragon style={{marginHorizontal: 4}} key="dragon" />;
    },
    electric: () => {
      return <Images.electric style={{marginHorizontal: 4}} key="electric" />;
    },
    fairy: () => {
      return <Images.fairy style={{marginHorizontal: 4}} key="fairy" />;
    },
    fighting: () => {
      return <Images.fighting style={{marginHorizontal: 4}} key="fighting" />;
    },
    fire: () => {
      return <Images.fire style={{marginHorizontal: 4}} key="fire" />;
    },
    flying: () => {
      return <Images.flying style={{marginHorizontal: 4}} key="flying" />;
    },
    ghost: () => {
      return <Images.ghost style={{marginHorizontal: 4}} key="ghost" />;
    },
    grass: () => {
      return <Images.grass style={{marginHorizontal: 4}} key="grass" />;
    },
    ground: () => {
      return <Images.ground style={{marginHorizontal: 4}} key="ground" />;
    },
    ice: () => {
      return <Images.ice style={{marginHorizontal: 4}} key="ice" />;
    },
    normal: () => {
      return <Images.normal style={{marginHorizontal: 4}} key="normal" />;
    },
    poison: () => {
      return <Images.poison style={{marginHorizontal: 4}} key="poison" />;
    },
    psychic: () => {
      return <Images.psychic style={{marginHorizontal: 4}} key="psychic" />;
    },
    rock: () => {
      return <Images.rock style={{marginHorizontal: 4}} key="rock" />;
    },
    steel: () => {
      return <Images.steel style={{marginHorizontal: 4}} key="steel" />;
    },
    water: () => {
      return <Images.water style={{marginHorizontal: 4}} key="water" />;
    },
  };

  return loading ? (
    <ActivityIndicator
      size="large"
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
    />
  ) : (
    <S.Container pageColor={mainType}>
      <Header
        pokemonName={pokeName}
        pokemonNumber={pokeNumber}
        onPressIcon={() => navigation.goBack()}
      />
      <S.Wrapper showsVerticalScrollIndicator={false}>
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
            onPressMovesButton={() => setModalVisible(true)}
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
