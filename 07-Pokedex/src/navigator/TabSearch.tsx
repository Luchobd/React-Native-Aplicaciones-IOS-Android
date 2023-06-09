import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PokemonScreen} from '../screens/PokemonScreen';
import {SearchScreen} from '../screens/SearchScreen';
import {RootStackParams} from './TabList';

const TabSearch = createStackNavigator<RootStackParams>();

export const TabSearchScreen = () => {
  return (
    <TabSearch.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <TabSearch.Screen name="HomeScreen" component={SearchScreen} />
      <TabSearch.Screen name="PokemonScreen" component={PokemonScreen} />
    </TabSearch.Navigator>
  );
};
