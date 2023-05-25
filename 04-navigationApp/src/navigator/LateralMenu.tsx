/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
// import {StackNavigator} from './StackNavigator';
import { SettingsScreen } from '../screen/SettingsScreen';
import {
  View,
  Image,
  useWindowDimensions,
  Platform,
  TouchableOpacity,
  Text,
} from 'react-native';
import { colors, styles } from '../theme/appTheme';
import { Tabs } from './Tabs';
import { DrawerActions } from '@react-navigation/native';

// Componente para configurar y alimentar el drawer
const Drawer = createDrawerNavigator();

export default function LateralMenu() {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        drawerType: width >= 768 ? 'permanent' : 'front',
        // Cambiar el icono del menu lateral.
        drawerPosition: 'left',
        drawerStyle: {
          width: 240,
        },
        headerLeft: () => (
          <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Text>
              <Icon name="grid-outline" size={35} color={colors.primary} />
            </Text>
          </TouchableOpacity>
        ),
      })}
      drawerContent={props => <InternalMenu {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const InternalMenu = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Contenedor del avatar */}
      <View
        style={
          Platform.OS === 'android'
            ? styles.avatarContainer
            : { ...styles.avatarContainer, marginTop: 0 }
        }>
        <Image
          source={{
            uri: 'https://alumni.engineering.utoronto.ca/files/2022/05/Avatar-Placeholder-400x400-1.jpg',
          }}
          style={styles.avatar}
        />
      </View>

      {/* Opciones de menú */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('Tabs')}>
          <Text>
            <Icon name="compass-outline" size={25} color={'black'} />
          </Text>
          <Text style={styles.menuText}>Navegación</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Text>
            <Icon name="cog-outline" size={25} color={'black'} />
          </Text>
          <Text style={styles.menuText}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
