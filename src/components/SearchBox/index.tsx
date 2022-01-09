import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import Images from '../../constants/images';
import {usePokemon} from '../../hooks/pokemon/PokemonProvider';

import * as S from './styles';

interface SearchBoxProps {
  toggleSortMode: () => void;
  sortByNumber: boolean;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  toggleSortMode,
  sortByNumber,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const {getAllPokemon, searchPokemon, setOffset} = usePokemon();

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setOffset(0);
      getAllPokemon();
    }
  }, [searchTerm]);

  return (
    <S.Container>
      <S.TitleContainer>
        <S.TitleLeft>
          <Images.pokeballSmall />
          <S.TitleText>Poképedia</S.TitleText>
        </S.TitleLeft>
        {/* <S.SortBy onPress={toggleSortMode}>
          {sortByNumber ? <Images.sortByName /> : <Images.sortByNumber />}
        </S.SortBy> */}
      </S.TitleContainer>
      <S.SearchBox>
        <S.SearchText
          placeholder="Search"
          value={searchTerm}
          onChangeText={setSearchTerm}
          maxLength={20}
          onSubmitEditing={() => searchPokemon(searchTerm)}
          onEndEditing={() => searchPokemon(searchTerm)}
        />
        <TouchableOpacity onPress={() => searchPokemon(searchTerm)}>
          <Images.search />
        </TouchableOpacity>
      </S.SearchBox>
    </S.Container>
  );
};

export default SearchBox;
