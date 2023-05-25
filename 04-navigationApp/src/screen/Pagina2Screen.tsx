import {useNavigation} from '@react-navigation/native';
import {View, Text, Button} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';

export const Pagina2Screen = () => {
  const navigation = useNavigation();

  // cambia el titulo de la flecha en IOS
  // useEffect(() => {
  //   navigation.setOptions({
  //     title: 'Hello World!!',
  //     headerBackTitle: 'Back',
  //   });
  // }, [navigation]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina2Screen</Text>

      <Button
        title="Ir página 3"
        onPress={() => navigation.navigate('Pagina3Screen')}
      />
    </View>
  );
};
