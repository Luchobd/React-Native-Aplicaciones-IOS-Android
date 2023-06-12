/* eslint-disable react-native/no-inline-styles */
import {View, ScrollView, RefreshControl} from 'react-native';
import React, {useContext, useState} from 'react';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const PullToRefreshScreen = () => {
  const {top} = useSafeAreaInsets(); // Solo funciona en IOS. Dar un marginTop entre el header y el main

  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const {theme} = useContext(ThemeContext);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('Terminamos');
      setRefreshing(false);
      setData('Hola Mundo');
    }, 3500);
  };

  return (
    <ScrollView
      style={{marginTop: refreshing ? top : 0}}
      refreshControl={
        <RefreshControl
          refreshing={refreshing} // Boolean para identificar en que momento debe aparecer y desaparecer el loading
          onRefresh={onRefresh} // Funcion que se ejecuta cuando se hace el refresh. Ejecuta el evento del loading
          progressViewOffset={10} // Un marginTop para que no se vea el loading cuando se hace el refresh
          progressBackgroundColor={theme.dividerColor} // Colocar un bakground color para que no se vea el loading cuando se hace el refresh
          colors={[theme.colors.text]} // Colocar un color para que se vea el loading cuando se hace el refresh. Se puede jugar con varios colores para el loading.
          style={{backgroundColor: 'red'}} // Esto solo aplica en IOS
          tintColor={'white'} // Esto solo aplica en IOS'
          title="Refreshing" // Esto solo aplica en IOS
          titleColor={theme.dark ? 'white' : 'black'} // Esto solo aplica en IOS
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to Refresh" />

        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};
