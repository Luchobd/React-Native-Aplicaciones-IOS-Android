import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../theme/app.Theme';

interface Props {
  text: string;
  color?: string;
  widthBool?: boolean;
  action: (numberText: string) => void;
}

export const ButtonCalc = ({
  text,
  color = '#2d2d2d',
  widthBool = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.button,
          backgroundColor: color,
          width: widthBool ? 180 : 80,
        }}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.TextButton,
            color: color === '#9b9b9b' ? '#000' : '#fff',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

// <TouchableOpacity> => Esta etiqueta o component es para hacer el efecto de touch en los botones.
