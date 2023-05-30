/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {styles} from '../theme/appTheme';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {menuItem} from '../data/menuItems';
import {HeaderTitle} from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';

export const HomeScreen = () => {
  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={menuItem} // data => la data debe estar siempre de forma iterable, es decir un Array.
        // renderItem={({item}) => <Text>{item.name}</Text>} // renderItem => Es nuestro iterador o map, que renderiza cada valor del array de objeto. El "item" es el valor de cada iteración del array que viene desde la "data".
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name} // keyExtractor => Es una funcion que nos permite extraer el key de cada iteración del array. Debe ser de tipo string y un valor unico.
        ListHeaderComponent={() => <HeaderTitle title="Opciones de menú" />} // ListHeaderComponent => Nos permite renderizar un componente en el header de la lista.
        ItemSeparatorComponent={() => <ItemSeparator />} // ItemSeparatorComponent => Nos permite crear un separador entre cada elemento de la lista.
      />
    </View>
  );
};
