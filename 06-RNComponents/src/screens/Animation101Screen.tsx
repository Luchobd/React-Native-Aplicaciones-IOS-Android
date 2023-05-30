/* eslint-disable react-native/no-inline-styles */
import React, {View, StyleSheet, Animated, Button} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const {fadeIn, fedeOut, position, opacity, startMovingPosition} =
    useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
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
        color="#5856d6"
      />
      <Button
        title="FadeOut"
        onPress={() => {
          fedeOut();
          startMovingPosition(-100);
        }}
        color="#ff8ff0"
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
