/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {MenuItem} from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface Props {
  menuItem: MenuItem;
}

// Se puede realizar todo el JSX desde "renderItem" directo, pero mas limpio es hacer una funcion y pasarle la funcion.
export const FlatListMenuItem = ({menuItem}: Props) => {

  const navigation:any = useNavigation();

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate(menuItem.component)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color="#5856d6" size={23} />
        <Text style={styles.itemText}>{menuItem.name}</Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-forward-outline" color="#5856d6" size={23} />
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
