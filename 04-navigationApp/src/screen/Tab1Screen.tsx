import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../theme/appTheme';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TouchableIcon} from '../components/TouchableIcon';

export const Tab1Screen = () => {
  const {top} = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab1Screen effect');
  }, []);

  return (
    <View style={{...styles.globalMargin, marginTop: top + 10}}>
      <Text style={styles.title}>Tab1Screen</Text>
      <Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="contrast-outline" />
        <TouchableIcon iconName="flame-outline" />
        <TouchableIcon iconName="heart-outline" />
        <TouchableIcon iconName="sunny-outline" />
        <TouchableIcon iconName="glasses-outline" />
        <TouchableIcon iconName="game-controller-outline" />
        <TouchableIcon iconName="football-outline" />
        <TouchableIcon iconName="heart-half-outline" />
        <TouchableIcon iconName="leaf-outline" />
      </Text>
    </View>
  );
};
