import React from 'react';
import {FlatList, FlatListProps} from 'react-native';
import {PokeCard} from '../';

interface PokeListProps {
  data: any;
}

const PokeList: React.FC<PokeListProps> = ({data}) => {
  return (
    <FlatList
      keyExtractor={(_, index) => String(index)}
      data={data}
      columnWrapperStyle={{
        justifyContent: 'space-between',
        marginBottom: 8,
      }}
      renderItem={({item, index}) => {
        const strings = item.url.split('/');

        const uri = strings[strings.length - 2];
        console.log(uri);
        return (
          <PokeCard
            handlePress={function (): void {
              throw new Error('Function not implemented.');
            }}
            title={item.name}
            spriteUri={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${uri}.png`}
            number={''}
          />
        );
      }}
      numColumns={2}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default PokeList;
