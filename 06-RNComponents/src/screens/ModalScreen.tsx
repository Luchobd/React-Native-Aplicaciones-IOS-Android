/* eslint-disable react-native/no-inline-styles */
import {View, Button, Modal, Text} from 'react-native';
import React, {useState} from 'react';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const ModalScreen = () => {
  const [isVisible, setisVisible] = useState(false);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal Screen" />

      <Button title="Open Modal" onPress={() => setisVisible(true)} />

      <Modal animationType="slide" visible={isVisible} transparent={true}>
        {/* Background Modal  */}
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* Contenido Modal   */}
          <View
            style={{
              backgroundColor: 'white',
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              elevation: 10, // Con esto aplicamos sombras en android.
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Modal</Text>
            <Text style={{fontSize: 16, fontWeight: '300', marginBottom: 20}}>Cuerpo del Modal</Text>
            <Button title="Close" onPress={() => setisVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
