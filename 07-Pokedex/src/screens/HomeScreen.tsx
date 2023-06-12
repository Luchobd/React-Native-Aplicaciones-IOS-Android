/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, FlatList, ActivityIndicator, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {PokemonCard} from '../components/PokemonCard';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemons} = usePokemonPaginated();

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebollBG}
      />

      <View style={{alignItems: 'center'}}>
        <FlatList
          data={simplePokemonList} // Data de todo los pokemones
          keyExtractor={pokemon => pokemon.id} // Llave para identificar cada pokemon
          showsVerticalScrollIndicator={false} // Ocultar la barra de scroll
          numColumns={2} // Numero de columnas
          // Header
          ListHeaderComponent={
            <Text
              style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top + 20,
                marginBottom: top + 20,
                paddingBottom: 10,
              }}>
              Pokedex
            </Text>
          } // Renderizar el encabezado. En este caso es el titulo.
          renderItem={({item}) => <PokemonCard pokemon={item} />} // Renderizar cada pokemon
          // Inifite Scroll
          onEndReached={loadPokemons} // Cuando llegue al final de la lista
          onEndReachedThreshold={0.4} // Cuanto debe dejar de llegar para cargar mas pokemones. Es como el 40% de la pantalla
          ListFooterComponent={
            <ActivityIndicator style={{height: 100}} size={20} color="grey" />
          }
        />
      </View>
    </>
  );
};
