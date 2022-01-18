import React from 'react';
import {TouchableOpacity} from 'react-native';
import Images from '../../constants/images';

import * as S from './styles';

interface SearchBoxProps {
  toggleSortMode: () => void;
  sortByNumber: boolean;
  onPressSearch: () => void;
  onChangeText: (text: string) => void;
  onSubmitEditing: () => void;
  onEndEditing: () => void;
  searchTerm: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  toggleSortMode,
  sortByNumber,
  onPressSearch,
  onChangeText,
  onSubmitEditing,
  onEndEditing,
  searchTerm,
}) => {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.TitleLeft>
          <Images.pokeballSmall />
          <S.TitleText>Poképedia</S.TitleText>
        </S.TitleLeft>
        <S.SortBy onPress={toggleSortMode}>
          {sortByNumber ? <Images.sortByName /> : <Images.sortByNumber />}
        </S.SortBy>
      </S.TitleContainer>
      <S.SearchBox>
        <S.SearchText
          placeholder="Search"
          value={searchTerm}
          onChangeText={onChangeText}
          maxLength={20}
          onSubmitEditing={onSubmitEditing}
          onEndEditing={onEndEditing}
        />
        <TouchableOpacity onPress={onPressSearch}>
          <Images.search />
        </TouchableOpacity>
      </S.SearchBox>
    </S.Container>
  );
};

export default SearchBox;
