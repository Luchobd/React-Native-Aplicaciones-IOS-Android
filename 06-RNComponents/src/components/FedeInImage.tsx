/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View,
} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FedeInImage = ({uri, style}: Props) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {
        isLoading && (
          <ActivityIndicator
            style={{position: 'absolute'}}
            size={30}
            color="grey"
          />
        ) // aqui se pone el indicador de carga.
      }
      <Animated.Image
        source={{uri}} // aqui se pone la imagen o url de las imagenes.
        onLoad={finishLoading} // aqui se pone la funcion que se ejecuta cuando se termina de cargar la imagen.={() => fadeIn()} // aqui se pone la funcion que se ejecuta cuando se carga la imagen.
        // onLoadEnd={finishLoading} // aqui se pone la funcion que se ejecuta cuando se termina de cargar la imagen.={() => fadeIn()} // aqui se pone la funcion que se ejecuta cuando se carga la imagen. Se pueden usar cualquiera de los dos. El efecto es que le primero nos muestra todas las imagenes cargando y el end NO.
        style={{
          ...(style as any),
          // width: '100%',
          // height: 400,
          opacity,
        }}
      />
    </View>
  );
};
