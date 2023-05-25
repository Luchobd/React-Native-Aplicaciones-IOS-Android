import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Pagina1Screen} from '../screen/Pagina1Screen';
import {Pagina2Screen} from '../screen/Pagina2Screen';
import {Pagina3Screen} from '../screen/Pagina3Screen';
import {PersonScreen} from '../screen/PersonScreen';

// Se utiliza este tipado para darle permiso y poder tiparlas de una forma mas rapida. Agregandando los screem en este tipado.
export type RootStackParams = {
  Pagina1Screen: undefined;
  Pagina2Screen: undefined;
  Pagina3Screen: undefined;
  PersonScreen: {id: number; nombre: string};
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Pagina2Screen"
      screenOptions={{
        headerStyle: {elevation: 0, shadowColor: 'transparent'},
        cardStyle: {backgroundColor: '#fff'},
      }}>
      <Stack.Screen
        name="Pagina1Screen"
        options={{title: 'Página 1'}}
        component={Pagina1Screen}
      />
      <Stack.Screen
        name="Pagina2Screen"
        options={{title: 'Página 2'}}
        component={Pagina2Screen}
      />
      <Stack.Screen
        name="Pagina3Screen"
        options={{title: 'Página 3'}}
        component={Pagina3Screen}
      />

      <Stack.Screen name="PersonScreen" component={PersonScreen} />
    </Stack.Navigator>
  );
};
