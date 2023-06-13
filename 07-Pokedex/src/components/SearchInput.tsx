/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Platform,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDebouncedValue} from '../hooks/useDebouncedValue';
import {useEffect} from 'react';

interface Props {
  onDebounce: (value: string) => void; // Tipado para que el onDebounce reciba un string.
  style?: StyleProp<ViewStyle>; // Tipado para crear propiedad de estilos.
}

export const SearchInput = ({style, onDebounce}: Props) => {
  const [textValue, setTextValue] = useState('');

  const debouncedValue = useDebouncedValue(textValue, 500); // Debounce para que no se ejecute cada vez que se escribe.

  useEffect(() => {
    onDebounce(debouncedValue!); // Si debouncedValue es undefined, no se ejecuta el onDebounce.;
  }, [debouncedValue]);

  return (
    <View style={{...styles.container, ...(style as any)}}>
      <View
        style={{
          ...styles.textBackground,
          top: Platform.OS === 'ios' ? 0 : 1,
        }}>
        <TextInput
          placeholder="Pokemon Search"
          style={styles.textInput}
          autoCapitalize="none"
          autoCorrect={false}
          value={textValue}
          onChangeText={setTextValue}
        />
        <Icon name="search-outline" color="grey" size={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  textBackground: {
    backgroundColor: '#f3f1f3',
    borderRadius: 50,
    height: 50,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },
});
