import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {Catalog, Home} from '../pages';

export type AppRoutesProps = {
  Catalog: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<AppRoutesProps>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Catalog" component={Catalog} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
