import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Fab} from '../components/Fab';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>

      <Fab title="+1" onPress={() => setCounter(counter + 1)} />

      <Fab title="-1" onPress={() => setCounter(counter - 1)} position="bl" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontSize: 40,
    textAlign: 'center',
    top: -15,
  },
});

// Por defecto los Componentes es decir las etiquetas, por defecto son de posicion relativa, es decir que colocar "position: relative" es innecesario.
