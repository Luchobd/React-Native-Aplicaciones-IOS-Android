import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {Navigator} from './src/navigator/Navigator';
import {Tabs} from './src/navigator/Tabs';

function App() {
  return (
    <NavigationContainer>
      {/* <Navigator /> */}
      {/* Mostramos Tabs porque tenemos envuelto tanto "Navigator" como "Tabs" con "SearchScreen".  */}
      <Tabs />
    </NavigationContainer>
  );
}

export default App;
