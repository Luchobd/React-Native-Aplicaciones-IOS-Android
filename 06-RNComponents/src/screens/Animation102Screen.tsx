import {View, StyleSheet, Animated} from 'react-native';
import {usePanResponder} from '../hooks/usePanResponder';
import React from 'react';

export const Animation102Screen = () => {
  // const pan = useRef(new Animated.ValueXY()).current;

  // // Animación para poder mover una figura por toda la pantalla.
  // const panResponder = PanResponder.create({
  //   onStartShouldSetPanResponder: () => true,
  //   onPanResponderMove: Animated.event(
  //     [
  //       null,
  //       {
  //         dx: pan.x,
  //         dy: pan.y,
  //       },
  //     ],
  //     {useNativeDriver: false}, // Se debe agregar nuevamente "useNativeDriver: false" para eliminar el warning
  //   ),
  //   onPanResponderRelease: () => {
  //     Animated.spring(pan, {
  //       toValue: {x: 0, y: 0},
  //       useNativeDriver: false,
  //     }).start();
  //   },
  // });

  const {panResponder, pan} = usePanResponder();

  return (
    <View style={styles.constainer}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.aquaBox]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aquaBox: {
    backgroundColor: '#75cedb',
    width: 150,
    height: 150,
    borderRadius: 20,
  },
});
