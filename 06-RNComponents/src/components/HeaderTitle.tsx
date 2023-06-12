/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  title: string;
}

export const HeaderTitle = ({title}: Props) => {
  // Es una funcion "react native" que sirve para ajustar entre el header y el main de la app.
  const {top} = useSafeAreaInsets();
  const {theme} = useContext(ThemeContext);
  return (
    // Se puede realizar todo el JSX desde "ListHeaderComponent" directo, pero mas limpio es hacer una funcion y pasarle la funcion.
    <View style={{marginTop: top + 20, marginBottom: 20}}>
      <Text style={{...styles.title, color: theme.colors.text}}>{title}</Text>
    </View>
  );
};
