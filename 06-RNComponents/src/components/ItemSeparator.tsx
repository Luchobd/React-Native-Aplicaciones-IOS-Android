/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export default function ItemSeparator() {
  const {theme} = useContext(ThemeContext);
  return (
    // Se puede realizar todo el JSX desde "ListHeaderComponent" directo, pero mas limpio es hacer una funcion y pasarle la funcion.
    <View style={{borderBottomWidth: 1, borderBottomColor: theme.dividerColor, marginVertical: 8}} />
  );
}
