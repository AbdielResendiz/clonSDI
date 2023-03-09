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



  const detalleCategorias= (item, link) => {
    props.navigation.navigate("DetalleCategoria", {
      estado: item,
      url: link,
    });
  };

  const [ impresos, setImpresos ] = useState([]);
  const getImpresos = async()=>{
    const url = `${BASE_URL}abdiel/Productos/ver_impresos10`
    const options = {
      method:'POST',
    };
    const res = await fetchPost(url, options);
    setImpresos(res.data);
    //console.log("res", res.data);
    
  }
  useEffect(() => {
    getImpresos();
    
  }, [])

  const [ noImpresos, setNoImpresos ] = useState([]);
  const getNoImpresos = async()=>{
    const url = `${BASE_URL}abdiel/Productos/ver_noimpresos10`
    const options = {
      method:'POST',
    };
    const res = await fetchPost(url, options);
    setNoImpresos(res.data);
    console.log("res", res.data);
    
  }
  useEffect(() => {
    getNoImpresos();
    
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
          <Pressable h={10} w={"40%"} bg={colors.blanco} shadow={6} 
          borderRadius={10} m={3} onPress={()=>detalleCategorias(true, "http://sdiqro.store/abdiel/Productos/ver_impresos")}>
            <Center h={"100%"} w={"100%"}>
              <Text bold>Impresos</Text>
            </Center>
          </Pressable>

          <Pressable h={10} w={"40%"} bg={colors.blanco} shadow={6} 
          borderRadius={10} m={3} onPress={()=>detalleCategorias(false, "http://sdiqro.store/abdiel/Productos/ver_noimpresos")}>
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
          <Pressable onPress={()=>detalleCategorias(false, "http://sdiqro.store/abdiel/Productos/ver_impresos")}>
            <Text color={"#ff0000"}> Ver más</Text>
          </Pressable>

        </Stack>

        <ScrollView horizontal={true}>
          { impresos.map( (impreso, index)=>{
            return(
              <ProductoComponent 
              key={index} nombre={impreso.nombreS} id={impreso.idS}
              precio={impreso.precioS} 
              image={impreso.image_url}
              impreso={true}/>
            ) 
          } )

          }
        </ScrollView>
      </Box>


      <Box my={3}>
        <Stack direction={"row"} justifyContent={"space-between"} mx={9} my={1}>
          <Text bold >Más vendidos no impresos</Text>
          <Pressable onPress={()=>detalleCategorias(false, "http://sdiqro.store/abdiel/Productos/ver_noimpresos")}>
            <Text color={"#ff0000"}> Ver más</Text>
          </Pressable>

        </Stack>

        <ScrollView horizontal={true}>
        { noImpresos.map( (noImpreso, index)=>{
            return(
              <ProductoComponent 
              key={index} nombre={noImpreso.nombreS} id={noImpreso.idS}
              precio={noImpreso.precioS} 
              image={noImpreso.image_url}
              impreso={false}/>
            ) 
          } )

          }
        
        </ScrollView>
      </Box>
      </ScrollView>
        
        
      </Box>
    </NativeBaseProvider>
  );
}
