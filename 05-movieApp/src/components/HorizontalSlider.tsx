/* eslint-disable react-native/no-inline-styles */
import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {Movie} from '../interfaces/movieInterface';
import {MoviePoster} from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View style={{height: title ? 260 : 220}}>
      {title && (
        <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 10}}>
          {title}
        </Text>
      )}
      <FlatList
        data={movies} // Data de donde sacar la información
        renderItem={({item}: any) => (
          <MoviePoster movie={item} width={140} height={200} />
        )} // Información a renderizar
        keyExtractor={item => item.id.toString()} // Key para el mapeo del objeto
        horizontal={true} // Colocar la lista de forma horizontal
        showsHorizontalScrollIndicator={false} // Desactiva que se muestre un scroll en la lista.
      />
    </View>
  );
};
