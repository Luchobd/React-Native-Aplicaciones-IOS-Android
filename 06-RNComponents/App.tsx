import React from 'react';
import { Navigation } from './src/navigation/Navigation';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';
import { ChildrenProps } from './src/interfaces/appInterfaces';

// Construccion del tema dark/light en react native con react navigation.
// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     // ...DarkTheme.colors, // <-- Aqui se puede agregar los colores que quieran. Colores por defecto del tema dark.
//     ...DefaultTheme.colors, // <-- Aqui se puede agregar los colores que quieran. Colores por defecto del tema dark.
//     // primary: '',
//     // background: '',
//     // card: '',
//     // text: '',
//     // border: '',
//     // notification: '',
//   },
// };

function App() {
  return (
    <AppState>
      <Navigation />
    </AppState>
  );
}

const AppState = ({ children }: ChildrenProps) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};

export default App;

/*
  Link a la documentación de todos los componentes de React Native => https://reactnative.dev/docs/components-and-apis
  theme={} // Afectara solo al NavigationContainer.
*/
