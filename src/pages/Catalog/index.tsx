import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import * as S from './styles';

const Catalog: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <S.Text>Go to Home</S.Text>
      </TouchableOpacity>
    </View>
  );
};

export default Catalog;
