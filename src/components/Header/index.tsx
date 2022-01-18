import React from 'react';
import {TouchableOpacity} from 'react-native';
import Images from '../../constants/images';

import * as S from './styles';

interface HeaderProps {
  pokemonName: string;
  pokemonNumber: string;
  onPressIcon: () => void;
}

const SearchBox: React.FC<HeaderProps> = ({
  pokemonName,
  pokemonNumber,
  onPressIcon,
}) => {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.TitleLeft>
          <TouchableOpacity onPress={onPressIcon}>
            <Images.arrowLeft />
          </TouchableOpacity>
          <S.TitleText>{pokemonName}</S.TitleText>
        </S.TitleLeft>
        <S.TitleText>{pokemonNumber}</S.TitleText>
      </S.TitleContainer>
    </S.Container>
  );
};

export default SearchBox;
