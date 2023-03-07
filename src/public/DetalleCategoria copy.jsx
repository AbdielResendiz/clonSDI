import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, TouchableOpacity, View } from 'react-native';
import { NativeBaseProvider, Box, Text, Stack, Pressable, Center, ScrollView, Icon } from 'native-base';
import colors from '../colors';
import { FontAwesome5, Entypo } from '@expo/vector-icons'; 

import SwiperList from '../components/SwiperList';
import ProductoComponent from '../components/ProductoComponent';
import ScrollSubCategorias from '../components/ScrollSubCategorias';
import fetchPost from '../helper/fetchPost';
import URL from '../helper/URL';
import { useState, useEffect } from 'react';

export default function DetalleCategoria(props) {



  const estado = props.route.params.estado;
  const urlCat = props.route.params.url;
  console.log("link" , urlCat);

  

  const [ productos, setProductos ] = useState([]);

  const navegacion= (item) => {
    props.navigation.navigate(item);
  };
   const getProductos= async()=>{

    const url = urlCat
    const options = {
      method:'POST',
    };
    const res = await fetchPost(url, options);
    setProductos(res.data);
    console.log("res", res.data);
    
  }
  useEffect(() => {
    getProductos();
    console.log(productos)
  }, [])


  return (
    <NativeBaseProvider >
      <Box h={"100%"} bg={colors.grisbg}>
        <Box h={"20%"}>
            <SwiperList/>
        </Box>
        
        <Box ml={3}>
            <Text bold>  {estado === true ? "Categorias de impresos" : "Categorias de no impresos"}</Text>
        </Box>
        <Center w={"95%"} ml={3}>

        <ScrollView horizontal={true}>

            <Pressable mx={1} onPress={()=>navegacion("DetalleSubCategoria")}>
                <Center bg="#cfcfcf" h={16} w={16} borderRadius={16}>
                    <FontAwesome5 name="tshirt" size={24} color="#808080" />
                </Center>
            </Pressable>
            <Pressable mx={1}>
                <Center bg="#cfcfcf" h={16} w={16} borderRadius={16}>
                    <Entypo name="cup" size={24} color="#808080" />
                </Center>
            </Pressable>

            <Pressable mx={1}>
                <Center bg="#cfcfcf" h={16} w={16} borderRadius={16}>
                    <FontAwesome5 name="pencil-alt" size={24} color="#808080" />
                </Center>
            </Pressable>

            <Pressable mx={1}>
                <Center bg="#cfcfcf" h={16} w={16} borderRadius={16}>
                    <Entypo name="book" size={24} color="#808080" />
                </Center>
            </Pressable>

            <Pressable mx={1}>
                <Center bg="#cfcfcf" h={16} w={16} borderRadius={16}>
                    <Entypo name="scissors" size={24} color="#808080" />
                </Center>
            </Pressable>
            <Pressable mx={1}>
                <Center bg="#cfcfcf" h={16} w={16} borderRadius={16}>
                    <FontAwesome5 name="tshirt" size={24} color="#808080" />
                </Center>
            </Pressable>




        </ScrollView>


        </Center>
        <ScrollView>
      <Box>
        <Stack direction={"row"} justifyContent={"space-between"} mx={9} my={1}>
          <Text bold >Promocionales</Text>
          <Pressable>
            <Text color={"#ff0000"}> Ver más</Text>
          </Pressable>

        </Stack>

        <ScrollView horizontal={true}>
          <ProductoComponent/>
          <ProductoComponent/>
          <ProductoComponent/>
          <ProductoComponent/>
          <ProductoComponent/>
        </ScrollView>
      </Box>


      <Box my={3}>
        <Stack direction={"row"} justifyContent={"space-between"} mx={9} my={1}>
          <Text bold >Offset</Text>
          <Pressable>
            <Text color={"#ff0000"}> Ver más</Text>
          </Pressable>

        </Stack>

        <ScrollView horizontal={true}>
          <ProductoComponent/>
          <ProductoComponent/>
          <ProductoComponent/>
          <ProductoComponent/>
          <ProductoComponent/>
        </ScrollView>
      </Box>
      </ScrollView>
        
        
      </Box>
    </NativeBaseProvider>
  );
}