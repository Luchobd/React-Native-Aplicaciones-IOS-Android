/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Platform, Text, FlatList, Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {styles as globalStyles} from '../theme/appTheme';
import {PokemonCard} from '../components/PokemonCard';
import {Loading} from '../components/Loading';
import {SimplePokemon} from '../interfaces/pokemon.interface';

const screenWidth = Dimensions.get('window').width; // Para saber el ancho y alto de la pantalla.

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets(); /// Para saber cuanto espacio hay de arriba. En el note, parte superior del dispositivo.
  const {isFetching, simplePokemonList} = usePokemonSearch();

  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

  const [term, setTerm] = useState('');

  useEffect(() => {
    if (term.length === 0) {
      return setPokemonFiltered([]);
    }

    if (isNaN(Number(term))) {
      // Si el termino es un string es "true". Pero si es un numero es "false".
      setPokemonFiltered(
        simplePokemonList.filter(poke =>
          poke.name.toLowerCase().includes(term.toLowerCase()),
        ),
      );
    } else {
      const pokemonById = simplePokemonList.find(poke => poke.id === term);
      // Si el termino es un numero, busca ese pokemon.
      setPokemonFiltered(pokemonById ? [pokemonById] : []);
    }
  }, [simplePokemonList, term]);

  // Loading de carga de la pantalla.
  if (isFetching) {
    return <Loading />;
  }

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 20,
      }}>
      <SearchInput
        onDebounce={value => setTerm(value)}
        style={{
          position: 'absolute',
          zIndex: 999,
          width: screenWidth - 40,
          top: Platform.OS === 'ios' ? top : top + 30,
        }}
      />
      <FlatList
        data={pokemonFiltered} // Data de todo los pokemones. Segun su busqueda.
        keyExtractor={pokemon => pokemon.id} // Llave para identificar cada pokemon
        showsVerticalScrollIndicator={false} // Ocultar la barra de scroll
        numColumns={2} // Numero de columnas
        // Header
        ListHeaderComponent={
          <Text
            style={{
              ...globalStyles.title,
              ...globalStyles.globalMargin,
              paddingBottom: 10,
              marginTop: Platform.OS === 'ios' ? top + 60 : top + 90,
            }}>
            {term}
          </Text>
        } // Renderizar el encabezado. En este caso es el titulo.
        renderItem={({item}) => <PokemonCard pokemon={item} />} // Renderizar cada pokemon
      />
    </View>
  );
};
