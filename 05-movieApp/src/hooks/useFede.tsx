import {useRef} from 'react';
import {Animated} from 'react-native';

export const useFede = () => {
  const opacity = useRef(new Animated.Value(0)).current;

  const fedeIn = (callback?: Function) => {
    // Esta funcion maneja el efecto de la animación.
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => callback ? callback() : null);
  };

  const fedeOut = (duration: number = 300) => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };

  return {
    opacity,
    fedeIn,
    fedeOut,
  };
};
