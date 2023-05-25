import { View, StyleSheet } from 'react-native';
import React from 'react';

export const Task10 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxPurple}/>
      <View style={styles.boxOrange}/>
      <View style={styles.boxBlue}/>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425b',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxPurple: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
    },
    boxOrange: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        top: 50,
    },
    boxBlue: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D6',
    },
});
