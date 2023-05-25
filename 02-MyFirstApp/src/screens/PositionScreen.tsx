import {View, StyleSheet} from 'react-native';
import React from 'react';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxGreen} />
      <View style={styles.boxPurple} />
      <View style={styles.boxOrange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#28c4d9',
  },
  boxPurple: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 0,
    right: 0,
  },

  boxOrange: {
    width: 100,
    height: 100,
    backgroundColor: '#F0a23b',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },

  boxGreen: {
    // width: 100,
    // height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    // position: 'absolute',
    // bottom: 0,
    // top: 0,
    // left: 0,
    // right: 0,
    ...StyleSheet.absoluteFillObject,
  },
});

// ...StyleSheet.absoluteFillObject => Esta propiedad que viene desde el StyleSheet, nos permite extender una propiedad por todo la pantalla. Es decir simula un position absoluto con left right top bottom en 0.
