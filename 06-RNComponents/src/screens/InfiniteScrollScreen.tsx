/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {View, FlatList, ActivityIndicator} from 'react-native';
import React, {useContext, useState} from 'react';
import {HeaderTitle} from '../components/HeaderTitle';
import {FedeInImage} from '../components/FedeInImage';
import { ThemeContext } from '../context/themeContext/ThemeContext';
// import { styles } from '../theme/appTheme';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const {theme} = useContext(ThemeContext);

  const loadMore = () => {
    const newArray: number[] = [];
    // generar scroll infinito.
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  const renderItem = (item: number) => {
    return (
      // <Image
      //   source={{uri: `https://picsum.photos/id/${item}/500/400`}}
      //   key={item.toString()}
      //   style={{width: '100%', height: 400}}
      // />

      <FedeInImage
        uri={`https://picsum.photos/id/${item}/500/400`}
        style={{width: '100%', height: 400}}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={numbers} // data que se muestra
        keyExtractor={item => item.toString()} // identificador de cada elemento
        renderItem={({item}) => renderItem(item)} // funcion que se ejecuta para cada elemento
        ListHeaderComponent={() => (
          <View style={{marginHorizontal: 20}}>
            <HeaderTitle title="Infinite Scroll" />
          </View>
        )} // componente que se muestra antes de la lista
        onEndReached={() => loadMore()} // Cuando se llega al fondo o al final se dispara esta función.
        onEndReachedThreshold={0.5} // Viewport en el cual se desliza para disparar la función de "onEndReached". Siendo 1 el 100% y 0 el 0% de la pantalla.
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              opacity: 1,
            }}>
            <ActivityIndicator size={50} color={theme.colors.primary} />
          </View>
        )} // Componente que se muestra al final de la lista. Generando un loading.
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   textItem: {
//     backgroundColor: 'green',
//     height: 150,
//   },
// });
