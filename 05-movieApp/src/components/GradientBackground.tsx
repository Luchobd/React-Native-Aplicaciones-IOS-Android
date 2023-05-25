/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View, Animated} from 'react-native';
import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../context/GradientContext';
import {useEffect} from 'react';
import {useFede} from '../hooks/useFede';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}: Props) => {
  const {colors, prevColors, setPrevMainColors} = useContext(GradientContext);

  const {opacity, fedeIn, fedeOut} = useFede();

  useEffect(() => {
    fedeIn(() => {
      setPrevMainColors(colors);
      fedeOut(0);
    });
  }, [colors]);

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, '#ffffff']}
        style={{...StyleSheet.absoluteFillObject}}
        // No son obligatorias estos propiedades.
        start={{x: 0.1, y: 0.1}} // Donde iniciar el gradiente
        end={{x: 0.5, y: 0.7}} // Donde termina el gradiente
      />

      <Animated.View style={{...StyleSheet.absoluteFillObject, opacity}}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, '#ffffff']}
          style={{...StyleSheet.absoluteFillObject}}
          // No son obligatorias estos propiedades.
          start={{x: 0.1, y: 0.1}} // Donde iniciar el gradiente
          end={{x: 0.5, y: 0.7}} // Donde termina el gradiente
        />
      </Animated.View>
      {children}
    </View>
  );
};
