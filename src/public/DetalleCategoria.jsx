import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, TouchableOpacity, View } from 'react-native';
import { NativeBaseProvider, Box, Text, Stack, Pressable, Center, ScrollView, VStack, HStack } from 'native-base';
import colors from '../colors';
import { FontAwesome5, Entypo } from '@expo/vector-icons'; 

import SwiperList from '../components/SwiperList';
import ProductoComponent2 from '../components/ProductoComponent2';
import ScrollSubCategorias from '../components/ScrollSubCategorias';
import fetchPost from '../helper/fetchPost';
import URL from '../helper/URL';
import { useState, useEffect } from 'react';
import Categoria from '../components/Categoria';

export default function DetalleCategoria(props) {



  const estado = props.route.params.estado;
  const urlCat = props.route.params.url;
  console.log("link" , urlCat);
  console.log("ESTADO ===", estado);

 

  
  const [ categorias, setCategorias ] = useState([]);

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


  const getCategorias= async()=>{

    const url = "http://sdiqro.store/abdiel/Productos/categorias"
    const options = {
      method:'POST',
    };
    const res1 = await fetchPost(url, options);
    setCategorias(res1.data);
    console.log("Categorias", res1.data);
    
  }
  useEffect(() => {
    getCategorias();
    console.log(categorias)
  }, [])


  return (
    <NativeBaseProvider >
      <Box flex={1} bg={colors.grisbg}>
        <Box h={"20%"}>
            <SwiperList/>
        </Box>
        
        <Box ml={3}>
            <Text bold>  {estado === true ? "Categorias de impresos" : "Categorias de no impresos"}</Text>
        </Box>
        <Center w={"95%"} ml={3}>

        <ScrollView horizontal={true} >

            { categorias.map( (item,index) => {
              return(
                <Categoria  image={item.imagen} titulo={item.nombreCS} key={index} idCS={item.idCS} impreso={estado} />
              )
            }

            )

            }
            
        




        </ScrollView>


        </Center>
        <Center>
        <ScrollView horizontal={false} h="68%">
                <HStack space={4} mr={2}>
                    <VStack >
                    {productos.map((item, index) => {
        // Si el índice es par, comienza una nueva fila
                        if (index % 2 === 0) {
                        return (
                          <ProductoComponent2 
                          key={index} nombre={item.nombreS} id={item.idS}
                          precio={item.precioS} 
                          image={item.image_url}/>
                        );
                        }
                    })}


                    </VStack>
                    

                    <VStack>
                    {productos.map((item, index) => {
        // Si el índice es par, comienza una nueva fila
                        if (index % 2 !== 0) {
                        return (
                          <ProductoComponent2 
                          key={index} nombre={item.nombreS} id={item.idS}
                          precio={item.precioS} 
                          image={item.image_url}/>
                        );
                        }
                    })}

                    </VStack>
                </HStack>

           </ScrollView>
           </Center>
        
      </Box>
    </NativeBaseProvider>
  );
}