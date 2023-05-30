import {useRef} from 'react';
import {PanResponder, Animated} from 'react-native';


export const usePanResponder = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  // Animación para poder mover una figura por toda la pantalla.
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x,
          dy: pan.y,
        },
      ],
      {useNativeDriver: false}, // Se debe agregar nuevamente "useNativeDriver: false" para eliminar el warning
    ),
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: {x: 0, y: 0},
        useNativeDriver: false,
      }).start();
    },
  });

  return {
    panResponder,
    pan,
  };
};
