import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
  },
  title: {
    paddingHorizontal: 100,
    paddingVertical: 30,
    marginHorizontal: 10,
    fontSize: 20,
    // width: '100%',
    borderWidth: 10,
  },
});
