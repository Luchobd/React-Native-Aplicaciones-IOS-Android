/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {MenuItem} from '../interfaces/appInterfaces';

interface Props {
  menuItem: MenuItem;
}

// Se puede realizar todo el JSX desde "renderItem" directo, pero mas limpio es hacer una funcion y pasarle la funcion.
export const FlatListMenuItem = ({menuItem}: Props) => {
  const navigation: any = useNavigation();
  // Este hooks es para el manejo de todos los colores del thema. Es un hook de react-navigation.
  const {theme} = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(menuItem.component)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color={theme.colors.primary} size={23} />
        <Text style={{...styles.itemText, color: theme.colors.text}}>
          {menuItem.name}
        </Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-forward-outline" color={theme.colors.primary} size={23} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
});
