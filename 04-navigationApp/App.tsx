import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import { Tabs } from './src/navigator/Tabs';
import LateralMenu from './src/navigator/LateralMenu';
// import MenuLateralBasico from './src/navigator/MenuLateralBasico';
// import { StackNavigator } from './src/navigator/StackNavigator';
import {AuthProvider} from './src/context/AuthContext';

function App() {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator/> */}
        {/* <MenuLateralBasico /> */}
        <LateralMenu />
        {/* <Tabs/> */}
      </AppState>
    </NavigationContainer>
  );
}

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
