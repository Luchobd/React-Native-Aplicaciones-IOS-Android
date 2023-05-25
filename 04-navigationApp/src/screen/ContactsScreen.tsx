import {View, Text, Button} from 'react-native';
import React, {useContext} from 'react';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

export const ContactsScreen = () => {
  const {signIn, authState} = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Contacts</Text>

      {/* Forma de comprobar y realizar el login. */}
      {!authState.isLoggedIn && (
        <Button title="SignIn" onPress={() => signIn()} />
      )}
    </View>
  );
};
