import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Box 1</Text>
      <Text style={styles.box2}>Box 2</Text>
      <Text style={styles.box3}>Box 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28c4d9',
  },
  box1: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    // alignSelf: 'center',
  },
  box2: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    // alignSelf: 'flex-start',
  },
  box3: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    // alignSelf: 'flex-end',
  },
});

//  flexDirection: 'column' => por defecto "column" es la dirección que mantiene en las pantallas.
// flexWrap: 'wrap' => no permite que se desborde el contenido. Realiza un salto de linea o ajusta su tamaño en el dispositivo.
