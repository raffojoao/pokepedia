import React, {useEffect, useState} from 'react';
import {usePokemon} from '../../hooks/pokemon/PokemonProvider';
import * as S from './styles';
import Image from 'react-native-image-progress';
export interface CardProps {
  handlePress: () => void;
  title: string;
  spriteUri: string;
  number: string;
}

const PokeCard: React.FC<CardProps> = ({
  handlePress,
  title,
  number,
  spriteUri,
}) => {
  const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);
  const {getMainType} = usePokemon();
  const [type, setType] = useState('');
  const [loading, setLoading] = useState(false);

  const renderColor = async () => {
    const type = await getMainType(number);
    setType(type);
  };

  useEffect(() => {
    renderColor();
  }, [number]);

  return (
    <S.Container onPress={handlePress} cardColor={type}>
      <S.Header>
        <S.Number cardColor={type}>{`#${number}`}</S.Number>
      </S.Header>
      <Image
        source={{uri: spriteUri}}
        style={{
          flex: 1,
        }}
        imageStyle={{
          flex: 1,
          resizeMode: 'contain',
        }}
      />
      <S.Footer cardColor={type}>
        <S.Title>{capitalizedTitle}</S.Title>
      </S.Footer>
    </S.Container>
  );
};

export default PokeCard;
