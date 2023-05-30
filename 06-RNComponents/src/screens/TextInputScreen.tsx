/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React from 'react';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {ScrollView} from 'react-native-gesture-handler';
import {useForm} from '../hooks/useForm';
import {CustomSwitch} from '../components/CustomSwitch';

export const TextInputScreen = () => {
  const {form, onChange, isSubscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  // const [form, setForm] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   isSubscribed: false,
  // });

  // // El field pasa como el "name del input" y el value pasa como el valor del input.
  // const onChange = (value: string, field: string) => {
  //   setForm({
  //     ...form,
  //     [field]: value,
  //   });
  // };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="TextInput" />

            <TextInput
              style={stylesScreen.inputStyle}
              placeholder="Ingrese su nombre"
              autoCorrect={false} // Desactivar el autocorrector y las sugerencias.
              autoCapitalize="words" // Auto capitaliza las palabras.
              onChangeText={value => onChange(value, 'name')} // El value es el valor que ingresa el usuario. primer valor "value", segundo valor "name" que viene desde el objeto del useState.
            />
            <TextInput
              style={stylesScreen.inputStyle}
              placeholder="Ingrese su email"
              autoCorrect={false} // Desactivar el autocorrector y las sugerencias.
              autoCapitalize="none" // desabilita la capitalización.
              onChangeText={value => onChange(value, 'email')} // El value es el valor que ingresa el usuario. primer valor "value", segundo valor "email" que viene desde el objeto del useState.
              keyboardType="email-address" // Permite que el usuario ingrese un email. Ajustando el teclado a que tenga el @.
              keyboardAppearance="dark" // Permite que el teclado se vea oscuro. Solo IOS.
            />

            <View style={stylesScreen.switchRow}>
              <Text style={stylesScreen.switchText}>Subscriberse: </Text>
              <CustomSwitch
                isOn={isSubscribed}
                onChange={value => onChange(value, 'isSubscribed')}
              />
            </View>

            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />

            <TextInput
              style={stylesScreen.inputStyle}
              placeholder="Ingrese su telefono"
              autoCorrect={false} // Desactivar el autocorrector y las sugerencias.
              onChangeText={value => onChange(value, 'phone')} // El value es el valor que ingresa el usuario. primer valor "value", segundo valor "telefono" que viene desde el objeto del useState.
              keyboardType="phone-pad" // Permite que el usuario ingrese un telefono. Ajustando el teclado a que tenga solo el teclado numerico.
            />
            <View style={{height: 100}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  inputStyle: {
    marginVertical: 10,
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.3)',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
});

// ScrollView => Realiza el mismo comportamiento que KeyboardAvoidingView de una forma mas simple. Es solo invocarlo y listo.
