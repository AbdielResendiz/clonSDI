import React, { useState, useEffect } from 'react';
import colors from '../colors';
import { NativeBaseProvider, Text, Box, ScrollView, Row, Center, HStack, VStack } from "native-base";
import SwiperList from '../components/SwiperList';
import ProductoComponent from '../components/ProductoComponent';
import URL from '../helper/URL';
import fetchPost from '../helper/fetchPost';
import ProductoComponent2 from '../components/ProductoComponent2';
import Loader from '../components/Loader';
//import ProductoComponent from '../components/ProductoComponent';

const DetalleSubCategoria = (props) => {
 
    const BASE_URL= URL.BASE_URL;

    const impreso = props.route.params.impreso;
    const idCS =  props.route.params.idCS;
    const nombreCS =  props.route.params.nombreCS;
    console.log("impreso subcat", impreso);
    console.log("IDCS", idCS);

const [ load, setLoad ] = useState(true);

    //PRODUCTOS MAPEO 
  const [ productos, setProductos ] = useState([]);
  const getProductos= async()=>{

    const dataCat = new FormData();
    dataCat.append("idCS", idCS);
    dataCat.append("impreso", impreso);
   const url = `${BASE_URL}abdiel/Productos/servicios_categoria`
   const options = {
     method:'POST',
     body: dataCat
   };
   const res = await fetchPost(url, options);
   setProductos(res.data);
   console.log("response", res.data);
   setLoad(false);
 }
 useEffect(() => {
   getProductos();
   console.log("productos",productos)
  
 }, [])
// fin PRODUCTOS MAPEO



    return (
        <NativeBaseProvider >
          {load=== true ? <Loader/> : 
          <Box h={"100%"} bg={colors.grisbg}>
            <Box h={"20%"}>
                <SwiperList/>
            </Box>
            
            <Box ml={3}>
                <Text bold ml={3} fontSize="lg">  {nombreCS} </Text>
            </Box>

            { productos.length>0 ? 
           <ScrollView horizontal={false}  >
                <HStack justifyContent="space-between" alignContent="center" mx={10}>
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
           : <Text textAlign={"center"} mt={5} fontSize={20}>No hay productos por el momento</Text> }
          </Box>
          }
        </NativeBaseProvider>
      );
};

export default DetalleSubCategoria;