import { View, StyleSheet } from 'react-native';
import React from 'react';

export const Task6 = () => {
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
    },
    boxPurple: {
        flex:1,
        // width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
    },
    boxOrange: {
        flex:1,
        // width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
    },
    boxBlue: {
        flex:2,
        // width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D6',
    },
});
