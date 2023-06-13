/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabList} from './TabList';

import Icon from 'react-native-vector-icons/Ionicons';

import {TabSearchScreen} from './TabSearch';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white', // Color de fondo "background" de las pantallas
      }}
      screenOptions={{
        tabBarHideOnKeyboard: true, // Oculta la pestaña al presionar la tecla "Esc"
        headerShown: false, // Oculta la cabecera
        tabBarActiveTintColor: '#5856D6', // Color de la pestaña activa
        tabBarInactiveTintColor: 'black', // Color de la pestaña inactiva
        tabBarStyle: {
          // Estilo de la pestaña
          marginBottom: Platform.OS === 'ios' ? 0 : 10,
          height: Platform.OS === 'ios' ? 80 : 60,
          position: 'absolute',
          bottom: -10,
          backgroundColor: 'rgba(255,255,255,0.9)',
          borderWidth: 0, // Borde de la pestaña
          elevation: 0, // Elevación de la pestaña
        },
        tabBarLabelStyle: {
          // Estilo de la etiqueta de la pestaña. Es decir el texto como tal.
          fontSize: 15,
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name="Navigator"
        component={TabList}
        options={{
          tabBarLabel: 'List', // Nombre de la pestaña
          tabBarIcon: ({color}) => (
            <Icon color={color} size={25} name="list-outline" />
          ), // Icono de la pestaña
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={TabSearchScreen}
        options={{
          tabBarLabel: 'Search', // Nombre de la pestaña
          tabBarIcon: ({color}) => (
            <Icon color={color} size={25} name="search-outline" />
          ), // Icono de la pestaña
        }}
      />
    </Tab.Navigator>
  );
};
