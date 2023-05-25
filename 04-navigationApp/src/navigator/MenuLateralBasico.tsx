import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screen/SettingsScreen';
import { useWindowDimensions } from 'react-native';
const Drawer = createDrawerNavigator();

export default function MenuLateralBasico() {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        // headerShown:false, // Ocultar el menu hamburguesa
        // drawerPosition: 'right', // Mover la direccion del menu hamburguesa "izquierda" o "derecha"
        drawerType: width >= 768 ? 'permanent' : 'front', // drawer horizontal visible y vertical oculto.
      }}>
      <Drawer.Screen
        name="StackNavigator"
        options={{ title: 'Home' }}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{ title: 'Settings' }}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
}
