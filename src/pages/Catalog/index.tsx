import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

// import { Container } from './styles';

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
        <Text style={{fontSize: 72}}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Catalog;
