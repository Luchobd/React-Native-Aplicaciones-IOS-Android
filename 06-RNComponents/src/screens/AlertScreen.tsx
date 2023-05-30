/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, View, Alert} from 'react-native';
import prompt from 'react-native-prompt-android';

import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const AlertScreen = () => {
  const showAleret = () => {
    Alert.alert(
      'Titulo de la alerta',
      'Cuerpo de la alerta',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
          style: 'default',
        },
      ],
      {
        cancelable: true, // Esta propiedad permite cancelar la  "alerta" dando click fuera de la tarjeta.
        onDismiss: () => console.log('onDismiss'), // Esta propiedad se dispara cuando el usuario cierra la alerta, dando click por fuera de la tarjeta.
      },
    );
  };

  const showPrompt = () => {
    // Solo funciona para IOS
    // Alert.prompt(
    //   '¿Está seguro?', // Titulo del prompt
    //   'Esta acción no se puede revertir', // Subtitulo del prompt
    //   (valor: string) => console.log('Valor ingresado: ', valor), // Es una Función "callback" que se ejecuta al dar click en OK
    //   'plain-text', // Tipo de texto que se ingresa al prompt, es decir que tipo va a contemplar los inputs. "password", "plant", etc.
    //   'Hola Mundo', // Valor por defecto del input. Si no se especifica, no se mostrará nada.'
    //   'number-pad'
    // );

    // Este prompt funciona para Android e IOS => es un paquete de terceros. npm i react-native-prompt-android
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'default',
        cancelable: false,
        defaultValue: 'Mensaje por defecto',
        placeholder: 'soy un placeholder',
      },
    );
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />

      <Button title="Mostrar Alerta" onPress={() => showAleret()} />
      <View style={{height: 10}} />
      <Button title="Mostrar Prompt" onPress={() => showPrompt()} />
    </View>
  );
};
