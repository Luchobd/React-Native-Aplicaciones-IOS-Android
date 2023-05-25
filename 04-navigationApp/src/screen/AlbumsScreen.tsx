import {View, Text, Button} from 'react-native';
import React, {useContext} from 'react';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

export const AlbumsScreen = () => {
  const {logout, authState} = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Albums</Text>

      {authState.isLoggedIn && (
        <Button title="Loagout" onPress={() => logout()} />
      )}
    </View>
  );
};
