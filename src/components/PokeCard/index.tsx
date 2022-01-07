import React from 'react';
import {View} from 'react-native';

import * as S from './styles';

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

  return (
    <S.Container onPress={() => console.log('TEST')}>
      <S.Header>
        <S.Number>{`#${number}`}</S.Number>
      </S.Header>
      <S.SpriteContainer>
        <S.Sprite
          source={{
            uri: spriteUri,
          }}
        />
      </S.SpriteContainer>
      <S.Footer>
        <S.Title>{capitalizedTitle}</S.Title>
      </S.Footer>
    </S.Container>
  );
};

export default PokeCard;
