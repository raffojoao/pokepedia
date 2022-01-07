import React from 'react';
import Images from '../../constants/images';

import * as S from './styles';

const SearchBox: React.FC = () => {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.TitleLeft>
          <Images.pokeballSmall />
          <S.TitleText>Pokédex</S.TitleText>
        </S.TitleLeft>
        <S.SortBy>
          <Images.sortByName />
        </S.SortBy>
      </S.TitleContainer>
      <S.SearchBox>
        <S.SearchText>Search</S.SearchText>
      </S.SearchBox>
    </S.Container>
  );
};

export default SearchBox;
