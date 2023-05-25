/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MenuItem} from '../interfaces/appInterfaces';
import {FlatListMenuItem} from '../components/FlatListMenuItem';

const menuItem: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    components: 'Animation101Screen',
  },

  {
    name: 'Animation 102',
    icon: 'albums-outline',
    components: 'Animation102Screen',
  },
];

export const HomeScreen = () => {
  // Es una funcion "react native" que sirve para ajustar entre el header y el main de la app.
  const {top} = useSafeAreaInsets();

  // Se puede realizar todo el JSX desde "ListHeaderComponent" directo, pero mas limpio es hacer una funcion y pasarle la funcion.
  const renderListHeader = () => {
    return (
      <View style={{marginTop: top + 20, marginBottom: 20}}>
        <Text style={styles.title}>Opciones de Menú</Text>
      </View>
    );
  };

  // Se puede realizar todo el JSX desde "ListHeaderComponent" directo, pero mas limpio es hacer una funcion y pasarle la funcion.
  const itemSeparator = () => {
    return (
      <View style={{borderBottomWidth: 1, opacity: 0.4, marginVertical: 8}} />
    );
  };

  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={menuItem} // data => la data debe estar siempre de forma iterable, es decir un Array.
        // renderItem={({item}) => <Text>{item.name}</Text>} // renderItem => Es nuestro iterador o map, que renderiza cada valor del array de objeto. El "item" es el valor de cada iteración del array que viene desde la "data".
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name} // keyExtractor => Es una funcion que nos permite extraer el key de cada iteración del array. Debe ser de tipo string y un valor unico.
        ListHeaderComponent={() => renderListHeader()} // ListHeaderComponent => Nos permite renderizar un componente en el header de la lista.
        ItemSeparatorComponent={() => itemSeparator()} // ItemSeparatorComponent => Nos permite crear un separador entre cada elemento de la lista.
      />
    </View>
  );
};
