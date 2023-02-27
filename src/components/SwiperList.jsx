import React from 'react';
import {  Dimensions, StyleSheet, View } from 'react-native';
import { Image, Box } from 'native-base';
import { SwiperFlatList } from 'react-native-swiper-flatlist';


const SwiperList = () => (
  <View style={styles.container}>
    <SwiperFlatList autoplay autoplayDelay={2} autoplayLoop index={1} //showPagination 
    >
      <Box w={Dimensions.get('window').width}>
      <Image  source={{uri: 'https://shop.marypymes.es/wp-content/uploads/2021/01/BANNER-PAPELERIA.png'}} alt="banner1"
       w={(Dimensions.get('window').width)} h={"100%"} resizeMode="contain" />
      </Box>
      <Box w={Dimensions.get('window').width}>
      <Image  source={{uri: `https://www.suescun.com.co/wp-content/uploads/2022/02/BANNER-CATEGORIAS-DE-PAPELERIA-PARA-MOVIL.jpg`}} alt="banner1"
       w={(Dimensions.get('window').width)} h={"100%"} resizeMode="contain" />
      </Box> 
      
    </SwiperFlatList>
  </View>
);

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { flex: 1, height:150 },
  child: { width, justifyContent: 'center' },
  text: { fontSize: width * 0.5, textAlign: 'center' },
});

export default SwiperList;