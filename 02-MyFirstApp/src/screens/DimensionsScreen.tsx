import {
  View,
  Text,
  StyleSheet,
  //   Dimensions,
  useWindowDimensions,
} from 'react-native';
import React from 'react';

// con esta propiedad podemos tene rlos valores reales del dispositivo es decir, nos da los valores de Width y Height del dispositivo.
// const {width, height} = Dimensions.get('window');

export const DimensionsScreen = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.boxOrange} />
        <View style={{...styles.boxPurple, width: width * 0.5}} />
      </View>
      <Text style={styles.title}>
        W: {width}, H: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    backgroundColor: 'aqua',
  },
  boxPurple: {
    backgroundColor: '#5856D6',
    // width: '50%',
    height: '50%',
  },
  boxOrange: {
    backgroundColor: '#F0A23B',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
