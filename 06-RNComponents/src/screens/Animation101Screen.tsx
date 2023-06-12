/* eslint-disable react-native/no-inline-styles */
import React, {View, StyleSheet, Animated, Button} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {useContext} from 'react';

export const Animation101Screen = () => {
  const {fadeIn, fedeOut, position, opacity, startMovingPosition} =
    useAnimation();

  const {theme} = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          backgroundColor: theme.colors.primary,
          marginBottom: 20,
          opacity: opacity,
          transform: [{translateX: position}],
        }}
      />

      <Button
        title="FadeIn"
        onPress={() => {
          fadeIn();
          startMovingPosition(100);
        }}
        color={theme.colors.primary}
      />
      <Button
        title="FadeOut"
        onPress={() => {
          fedeOut();
          startMovingPosition(-100);
        }}
        color={theme.colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856d6',
    width: 150,
    height: 150,
  },
});
