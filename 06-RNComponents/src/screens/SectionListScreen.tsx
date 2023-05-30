/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {SectionList, View, Text} from 'react-native';
import React from 'react';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import ItemSeparator from '../components/ItemSeparator';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
    ],
  },
  {
    casa: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
    ],
  },
];

export const SectionListScreen = () => {
  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <SectionList
        sections={casas} // Data de la sections
        renderItem={({item}) => <Text> {item} </Text>} // Renderizar cada item
        keyExtractor={(item, index) => item + index} // Indice del item para que no se repitan
        ListHeaderComponent={() => <HeaderTitle title="Section List" />} // Renderizar encabezado de la lista. Titulo principal.
        ListFooterComponent={() => (
          <View style={{marginBottom:  70}}>
            <HeaderTitle title={'Total de casas ' + casas.length} />
          </View>
        )} // Renderizar pie de la lista. Como un Footer de titulo.
        stickySectionHeadersEnabled={true} // Para que se muestren los encabezados sticky. Forma que se muestra en la parte superior de la pantalla de forma estatica.
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: 'white'}}>
            <HeaderTitle title={section.casa} />
          </View>
        )} // Renderizar cada section header. En resumen es el encabezado de cada section, es decir el titulo.
        renderSectionFooter={({section}) => (
          <HeaderTitle title={'Total: ' + section.data.length} /> // Renderizar cada section footer. En resumen es el footer de cada section, es decir el titulo.
        )}
        // SectionSeparatorComponent={()=> <ItemSeparator/>} // Renderizar separador de cada section. Encerrandolos en una caja.
        ItemSeparatorComponent={() => <ItemSeparator />} // Renderizar separador de cada item. Entre cada texto de la lista.
        showsVerticalScrollIndicator={false} // Para que no aparezcan los scroll indicadores.
      />
    </View>
  );
};
