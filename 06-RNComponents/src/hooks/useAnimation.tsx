import {Animated} from 'react-native';
import {useRef} from 'react';

export const useAnimation = () => {
  // new Animated.Value(0) o new Animated.ValueXY(0, 0) => El Animated, es para crear animaciones y el -Value es para manejar 1 valor y el .ValueVY es para manejar dos valores.
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start(); // start(() => console.log('Animation finished)) => inicia la animacion y recibe un callback para saber cuando termina
  };

  const fedeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start(); // start(() => console.log('Animation finished)) => inicia la animacion y recibe un callback para saber cuando termina
  };

  const startMovingPosition = (
    initPosition: number,
    duration: number = 1500,
  ) => {
    position.setValue(initPosition);

    Animated.timing(position, {
      toValue: 0,
      duration: duration,
      useNativeDriver: true,
      // easing: Easing.bounce, // Easing.bounce => para que la animacion tenga un rebote. Pero "Easing" tiene mas de una propiedad para dar animaciones.
    }).start();
  };

  return {
    fadeIn,
    fedeOut,
    opacity,
    position,
    startMovingPosition,
  };
};
