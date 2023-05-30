/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';

export default function ItemSeparator() {
  return (
    // Se puede realizar todo el JSX desde "ListHeaderComponent" directo, pero mas limpio es hacer una funcion y pasarle la funcion.
    <View style={{borderBottomWidth: 1, opacity: 0.4, marginVertical: 8}} />
  );
}
