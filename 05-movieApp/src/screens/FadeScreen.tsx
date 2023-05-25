/* eslint-disable react-native/no-inline-styles */

import {View, Animated, Button} from 'react-native';
import React from 'react';
import {useFede} from '../hooks/useFede';

// FedeIn and FedeOut
export const FadeScreen = () => {
  const {fedeIn, fedeOut, opacity} = useFede();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          backgroundColor: '#084f6a',
          width: 150,
          height: 150,
          borderColor: '#fff',
          borderWidth: 10,
          marginBottom: 10,
          opacity: opacity,
        }}
      />

      <Button title="FedeIn" onPress={() => fedeIn()} />
      <Button title="FedeOut" onPress={() => fedeOut()} />
    </View>
  );
};
