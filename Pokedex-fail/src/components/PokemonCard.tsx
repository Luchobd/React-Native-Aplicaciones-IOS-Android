import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import ImageColors from 'react-native-image-colors';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

const windowWidth = Dimensions.get('window').width; // Dimencionar el ancho de la pantalla

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({pokemon}: Props) => {
  const isMounted = useRef(false);
  const [bgColor, setBgColor] = useState('grey');

  useEffect(() => {
    ImageColors.getColors(pokemon.picture, {fallback: 'gray'}).then(colors => {
      if (!isMounted.current) {
        return;
      }

      if (colors.platform === 'android') {
        setBgColor(colors.dominant || 'gray');
      } else if (colors.platform === 'ios') {
        setBgColor(colors.background || 'gray');
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [pokemon.picture]);

  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={{...styles.cardContainer, backgroundColor: bgColor}}>
        {/* Nombre del pokemon y ID */}
        <View>
          <Text style={styles.name}>
            {pokemon.name}
            {'\n#' + pokemon.id}
          </Text>
        </View>

        <View style={styles.pokeballContainer}>
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={styles.pokeball}
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
    width: windowWidth * 0.4,
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
    // overflow: 'hidden',
  },
  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pokeballContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    opacity: 0.5,
    overflow: 'hidden',
  },
  pokeball: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: -25,
    bottom: -25,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    bottom: -5,
    right: -8,
  },
});
