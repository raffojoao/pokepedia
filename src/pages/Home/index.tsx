import React, {useEffect, useState} from 'react';
import {SearchBox, PokeList} from '../../components';
import {usePokemon} from '../../hooks/pokemon/PokemonProvider';

import * as S from './styles';

const Home: React.FC = () => {
  const {getAllPokemon, allPokemon, hasNext, getNext} = usePokemon();

  const [sortByNumber, setSortByNumber] = useState(true);
  const [pokemonList, setPokemonList] = useState<any[]>(allPokemon);
  const [searchTerm, setSearchTerm] = useState('');
  const [foundPokemon, setFoundPokemon] = useState<any[]>([]);

  const getPokemon = async () => {
    const response = await getAllPokemon();
    setPokemonList(response);
  };

  const searchPokemon = () => {
    if (!searchTerm) {
      setPokemonList(allPokemon);
    }
    const found = [...allPokemon].filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setFoundPokemon(found);
    setPokemonList(found);
  };

  const toggleSortMode = () => {
    setSortByNumber(!sortByNumber);
    const pokemonByName = [...pokemonList].sort((a, b) =>
      a.name.localeCompare(b.name),
    );

    if (!sortByNumber) {
      setPokemonList(searchTerm ? foundPokemon : allPokemon);
    } else {
      setPokemonList(pokemonByName);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  useEffect(() => {
    searchPokemon();
  }, [searchTerm]);

  return (
    <S.Container>
      <SearchBox
        sortByNumber={sortByNumber}
        toggleSortMode={toggleSortMode}
        searchTerm={searchTerm}
        onChangeText={text => setSearchTerm(text)}
        onEndEditing={() => searchPokemon()}
        onSubmitEditing={() => searchPokemon()}
        onPressSearch={() => searchPokemon()}
      />
      <S.Wrapper>
        <S.ListContainer>
          <PokeList data={pokemonList} />
        </S.ListContainer>
      </S.Wrapper>
    </S.Container>
  );
};

export default Home;
