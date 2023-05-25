import React from 'react';
import {CalculadoraScreen} from './src/screen/CalculadoraScreen';
import {SafeAreaView, StatusBar} from 'react-native';

import {styles} from './src/theme/app.Theme';

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor={'#000'} barStyle={'light-content'} />
      <CalculadoraScreen />
    </SafeAreaView>
  );
};

export default App;

//    <StatusBar/> => es un componente que facilita la estilización de la parte superior, que es la hora, señal, bateria, etc. Para que sea acorde con el background de la app.
