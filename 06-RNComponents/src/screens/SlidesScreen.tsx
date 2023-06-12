/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useRef} from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native';

import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useState} from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import {useAnimation} from '../hooks/useAnimation';
import { StackScreenProps } from '@react-navigation/stack';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const {width: screenWidth} = Dimensions.get('window'); //  Para obtener el alto y ancho de la pantalla

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

interface Props extends StackScreenProps<any,any> {}

export const SlidesScreen = ({navigation}:Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {opacity, fadeIn} = useAnimation();

  const {theme} = useContext(ThemeContext);

  const isVisible = useRef(false);

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
          borderRadius: 5,
          padding: 15,
          justifyContent: 'center',
        }}>
        <Image
          source={item.img}
          style={{
            width: 350,
            height: 400,
            resizeMode: 'center', //  Ajusta la imagen  al tamaño de la pantalla y contenedor.
          }}
        />
        <Text style={{...styles.title, color: theme.colors.primary}}>{item.title}</Text>
        <Text style={{...styles.subTitle, color: theme.colors.text}}>{item.desc}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, paddingTop: 30}}>
      <Carousel
        // ref={(c) => { this._carousel = c; }} // Manejar el carrucel de manera manual
        data={items} // Datos que se van a mostra
        renderItem={({item}) => renderItem(item)} // Renderizar cada elemento
        sliderWidth={screenWidth} // Ancho de la pantalla
        itemWidth={screenWidth} // Ancho de cada elemento
        layout="default"
        onSnapToItem={index => {
          setActiveIndex(index);
          if (items.length - 1 === index) {
            isVisible.current = true;
            fadeIn();
          }
        }} // Cuando se mueve el slide
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          alignItems: 'center',
        }}>
        <Pagination
          dotsLength={items.length} // Cantidad de puntos "Dots"
          activeDotIndex={activeIndex} // Indice del dot que se encuentra activo
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: theme.colors.primary,
          }} // Estilo del dot
        />

        <Animated.View style={{opacity}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              backgroundColor: theme.colors.primary,
              width: 140,
              height: 50,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            activeOpacity={0.8}
            onPress={() => {
              if (isVisible.current) {
                navigation.navigate('HomeScreen');
              }
            }}>
            <Text style={{color: 'white', fontSize: 25}}>Enter</Text>
            <Icon
              name="chevron-forward-outline"
              color="white"
              size={30}
              style={{marginLeft: 20}}
            />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856d6',
  },
  subTitle: {
    fontSize: 16,
  },
});
