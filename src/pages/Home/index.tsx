import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import * as S from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  return (
    <S.Test>
      <TouchableOpacity onPress={() => navigation.navigate('Catalog')}>
        <Text style={{fontSize: 72}}>Go to Catalog</Text>
      </TouchableOpacity>
    </S.Test>
  );
};

export default Home;
