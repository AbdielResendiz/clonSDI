import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, TouchableOpacity, View } from 'react-native';
import { NativeBaseProvider, Box, Text, Stack, Pressable, Center, ScrollView, useSafeArea } from 'native-base';
import colors from '../colors';
import fetchPost from '../helper/fetchPost';
import SwiperList from '../components/SwiperList';
import ProductoComponent from '../components/ProductoComponent';
import URL from '../helper/URL';
import { useState, useEffect } from 'react';

export default function Home(props) {
  const BASE_URL =URL.BASE_URL;
 // console.log(BASE_URL)

  const navegacion= (item) => {
    props.navigation.navigate(item);
  }; 

  const detalleCategorias= (item) => {
    props.navigation.navigate("DetalleCategoria", {
      categoria: item,
    });
  };

  const [ impresos, setImpresos ] = useState([]);
  const getImpresos = async()=>{
    const url = `${BASE_URL}abdiel/Productos/ver_impresos`
    const options = {
      method:'POST',
    };
    const res = await fetchPost(url, options);
    setImpresos(res.data);
   // console.log("res", res.data);
    
  }
  useEffect(() => {
    getImpresos();
    
  }, [])
  
 
  return (
    <NativeBaseProvider >
      <Box h={"100%"} bg={colors.blanco}>
        <Box h={"20%"}>
        <SwiperList/>
        </Box>
        
        <Box ml={3}>
        <Text bold> Categorías</Text>
        </Box>
        <Center w={"95%"} ml={3}>
        <Stack direction={"row"}>
          <Pressable h={10} w={"40%"} bg={colors.blanco} shadow={6} borderRadius={10} m={3} onPress={()=>detalleCategorias("Impresos")}>
            <Center h={"100%"} w={"100%"}>
              <Text bold>Impresos</Text>
            </Center>
          </Pressable>

          <Pressable h={10} w={"40%"} bg={colors.blanco} shadow={6} borderRadius={10} m={3} onPress={()=>detalleCategorias("No impresos")}>
            <Center h={"100%"} w={"100%"}>
              <Text bold>No Impresos</Text>
            </Center>
          </Pressable>
      </Stack>

        </Center>
        <ScrollView>
      <Box>
        <Stack direction={"row"} justifyContent={"space-between"} mx={9} my={1}>
          <Text bold >Más vendidos impresos</Text>
          <Pressable onPress={()=>detalleCategorias("Impresos")}>
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
          <Text bold >Más vendidos impresos</Text>
          <Pressable onPress={()=>detalleCategorias("No Impresos")}>
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
