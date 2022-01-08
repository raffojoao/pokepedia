import React from 'react';
import Images from '../../constants/images';

import * as S from './styles';

interface SearchBoxProps {
  toggleSortMode: () => void;
  sortByNumber: boolean;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  toggleSortMode,
  sortByNumber,
}) => {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.TitleLeft>
          <Images.pokeballSmall />
          <S.TitleText>Pokédex</S.TitleText>
        </S.TitleLeft>
        {/* <S.SortBy onPress={toggleSortMode}>
          {sortByNumber ? <Images.sortByName /> : <Images.sortByNumber />}
        </S.SortBy> */}
      </S.TitleContainer>
      <S.SearchBox>
        <S.SearchText>Search</S.SearchText>
      </S.SearchBox>
    </S.Container>
  );
};

export default SearchBox;
