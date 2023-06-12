import React, {createContext, useEffect, useReducer} from 'react';
import {ChildrenProps} from '../../interfaces/appInterfaces';
import {ThemeState, darkTheme, lightTheme, themeReducer} from './ThemeReducer';
import {useColorScheme} from 'react-native';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: ChildrenProps) => {
  // ======== Cambio de tema basado en el sistema operativo. ========
  const colorScheme = useColorScheme();

  const [theme, dispatch] = useReducer(
    themeReducer,
    colorScheme === 'dark' ? darkTheme : lightTheme,
  );

  useEffect(() => {
    colorScheme === 'dark' ? setDarkTheme() : setLightTheme();
  }, [colorScheme]);

  // ===================================================================

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
    console.log('setDarkTheme');
  };

  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
    console.log('setLightTheme');
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setDarkTheme,
        setLightTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

// dispatch es para enviar un action al reducer, el action es un objeto que tiene una propiedad que es el type, y eso nos permite enviar un action al reducer.
// el reducer es el que va a tener el estado de nuestro app, y el action es el que va a tener el tipo de accion que queremos que haga nuestro reducer.
// el action tiene que tener un type, y el type es un string, y el type es el que vamos a usar para identificar que accion vamos a ejecutar.
// el reducer va a tener un switch, y el switch va a tener un case, y el case va a tener un if, y el if va a tener una comparacion, y la comparacion va a tener una condicion, y la condicion va a tener una propiedad que es el type, y esa propiedad va a ser el type que definimos en el action.
