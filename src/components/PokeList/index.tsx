import React from 'react';
import {FlatList} from 'react-native';
import {PokeCard} from '../';
import {useNavigation} from '@react-navigation/native';

interface PokeListProps {
  data: any;
  footer: any;
}

const PokeList: React.FC<PokeListProps> = ({data, footer}) => {
  const navigation = useNavigation();

  return (
    <FlatList
      keyExtractor={(_, index) => String(index)}
      data={data}
      columnWrapperStyle={{
        justifyContent: 'space-between',
        marginBottom: 8,
      }}
      renderItem={({item}) => {
        let pokeNumber = item.url.slice(0, -1);
        pokeNumber = pokeNumber.substring(pokeNumber.lastIndexOf('/') + 1);

        return (
          <PokeCard
            handlePress={() =>
              navigation.navigate('Details', {
                name: item.name,
                number: pokeNumber,
                url: item.url,
              })
            }
            title={item.name}
            spriteUri={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNumber}.png`}
            number={pokeNumber}
          />
        );
      }}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      // ListFooterComponent={footer}
    />
  );
};

export default PokeList;
