/* eslint-disable curly */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

import ImageColors from 'react-native-image-colors';
import {useNavigation} from '@react-navigation/native';

import {SimplePokemon} from '../interfaces/pokemon.interface';
import {FadeInImage} from './FedeInImage';
import {useRef} from 'react';

const windowWidth = Dimensions.get('window').width;

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({pokemon}: Props) => {
  const [bgColor, setBgColor] = useState('grey');
  // Avitar warning de componentes desmontados
  const isMounted = useRef(true); // Cuando el componente se desmonte, se cambia el valor de esta variable a false

  useEffect(() => {
    ImageColors.getColors(pokemon.picture, {fallback: 'grey'}).then(colors => {
      if (!isMounted.current) return; // Si el componente ya no está montado, no hacer nada (para evitar warnings de desmontado)

      if (colors.platform === 'android') {
        setBgColor(colors.dominant || 'grey');
      } else if (colors.platform === 'ios') {
        setBgColor(colors.background || 'grey');
      }
    });
    return () => {
      isMounted.current = false;
    };
  }, []);

  const navigation: any = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('PokemonScreen', {
          simplePokemon: pokemon, // Tipado del navigation.navigate. Array de pokemons.
          color: bgColor, // Tipado del navigation.navigate. Color por default de los pokemons.
        })
      }>
      <View
        style={{
          ...styles.cardContainer,
          width: windowWidth * 0.4,
          backgroundColor: bgColor,
        }}>
        <View>
          <Text style={styles.name}>
            {pokemon.name} {'\n#' + pokemon.id}
          </Text>
        </View>

        <View style={styles.pokeballContainer}>
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={styles.pokeboll}
          />
        </View>

        <FadeInImage uri={pokemon.picture} style={styles.pokemonImage} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    // backgroundColor: 'grey',
    height: 120,
    // width: windowWidth * 0.4,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
    textTransform: 'capitalize',
  },
  pokeballContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    opacity: 0.5,
    overflow: 'hidden', // Esta propiedad corta todo lo que se salga del contenedor padre.
  },
  pokeboll: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: -20,
    bottom: -20,
  },
  pokemonImage: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: -8,
    bottom: -5,
  },
});
