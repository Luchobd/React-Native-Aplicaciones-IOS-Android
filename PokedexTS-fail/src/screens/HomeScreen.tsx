/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Text, FlatList, ActivityIndicator} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {PokemonCard} from '../components/PokemonCard';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemon} = usePokemonPaginated();
  // console.log(simplePokemonList);

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebollBG}
      />

      <View style={{ alignItems: 'center'}}>
        <FlatList
          data={simplePokemonList}
          keyExtractor={pokemon => pokemon.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({item}) => <PokemonCard pokemon={item} />}
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
          }
          // infinite scroll
          onEndReached={loadPokemon} // funcion que se ejecuta cuando llega al final del scroll
          onEndReachedThreshold={0.4} // cuanto mide el scroll para llamar a la funcion
          ListFooterComponent={
            <ActivityIndicator style={{height: 100}} size={20} color="grey" />
          } // indicador de carga. Es decir el loading inferior
        />
      </View>
    </>
  );
};
