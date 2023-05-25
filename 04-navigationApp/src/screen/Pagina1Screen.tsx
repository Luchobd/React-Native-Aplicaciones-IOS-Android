/* eslint-disable react-native/no-inline-styles */
import {View, Text, Button} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => <Button title="Menu" onPress={() => {}} />,
  //   });
  // }, [navigation]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>

      <Button
        title="Ir página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text style={{marginVertical: 20, fontSize: 20}}>
        Navegar con argumentos
      </Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            ...styles.bigButton,
            backgroundColor: '#5856d6',
            flexDirection: 'row',
            gap: 10,
          }}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              nombre: 'Luis',
            })
          }>
          <Text>
            <Icon name="body-outline" size={25} color="#ff9427" />
          </Text>
          <Text style={styles.bigButtonText}>Luis</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.bigButton,
            backgroundColor: '#ff9427',
            flexDirection: 'row',
            gap: 10,
          }}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              nombre: 'Adrian',
            })
          }>
          <Text>
            <Icon name="woman-outline" size={25} color={'#5856d6'} />
          </Text>
          <Text style={styles.bigButtonText}>Adrian</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
