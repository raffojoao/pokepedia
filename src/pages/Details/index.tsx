import React, {useEffect, useState} from 'react';
import {Image, ActivityIndicator} from 'react-native';
import Images from '../../constants/images';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Pokemon, usePokemon} from '../../hooks/pokemon/PokemonProvider';
import * as S from './styles';
import {Header, Attributes, Stats, Pagination} from '../../components';

const Details: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {getPokemon, getDescription} = usePokemon();
  const [mainType, setMainType] = useState('');
  const [types, setTypes] = useState([]);
  const [pokeName, setPokename] = useState('');
  const [pokeNumber, setPokeNumber] = useState<number>();
  const [pokeStringNumber, setPokeStringNumber] = useState('');
  const [pokemonData, setPokemonData] = useState<Pokemon>();
  const [description, setDescription] = useState('');
  const [baseStats, setBaseStats] = useState([]);
  const [loading, setloading] = useState(true);
  const [next, setNext] = useState('');
  const [previous, setPrevious] = useState('');

  const pokemon: any = route.params;

  const getPokemonData = async (number: string) => {
    setloading(true);
    const pokeData: any = await getPokemon(number);

    setPokename(pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1));
    let zeros = '';
    for (var i = 0; i < 3 - number.length; i++) {
      zeros += '0';
    }
    setPokeNumber(parseInt(number));
    setPokeStringNumber(`#${zeros + number}`);
    setPokemonData(pokeData);
    setTypes(pokeData.types);
    setMainType(pokeData.types[0].type.name);
    setBaseStats(pokeData.stats);

    const pokeDescription = await getDescription(number);
    setDescription(pokeDescription);

    parseInt(number) < 898 && setNext(`${parseInt(number) + 1}`);
    parseInt(number) > 1 && setPrevious(`${parseInt(number) - 1}`);

    setloading(false);
  };

  useEffect(() => {
    getPokemonData(pokemon.number);
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
        pokemonNumber={pokeStringNumber}
        onPressIcon={() => navigation.goBack()}
      />
      <S.Wrapper showsVerticalScrollIndicator={false}>
        <S.ImageContainer>
          <Images.pokeball fillOpacity={0.1} />
        </S.ImageContainer>

        <S.DataContainer>
          <Pagination
            canGoLeft={pokeNumber > 1}
            canGoRight={pokeNumber < 898}
            onPressLeftButton={() => getPokemonData(previous)}
            onPressRightButton={() => getPokemonData(next)}
          />
          <Image
            style={{
              width: 200,
              height: 200,
              position: 'absolute',
              top: -150,
            }}
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNumber}.png`,
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
            // moves={pokemonData.moves}
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
