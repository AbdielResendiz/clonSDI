//Este archivo tiene el algoritmo para mapear los items en dos filas. 
//NO BORRAR


import React, { useState, useEffect } from 'react';
import colors from '../colors';
import { NativeBaseProvider, Text, Box, ScrollView, Row, Center, HStack, VStack } from "native-base";
import SwiperList from '../components/SwiperList';
//import ProductoComponent from '../components/ProductoComponent';

const DetalleSubCategoria = (props) => {
  //  const subCategoria = props.route.params.subCategoria;

  //Datos de mapeo de prueba.
  const data = [
    { id: 1, text: 'Objeto 1' },
    { id: 2, text: 'Objeto 2' },
    { id: 3, text: 'Objeto 3' },
    { id: 4, text: 'Objeto 4' },
    { id: 5, text: 'Objeto 5' },
    { id: 6, text: 'Objeto 6' },
    { id: 7, text: 'Objeto 7' },
    { id: 8, text: 'Objeto 8' },
    { id: 9, text: 'Objeto 9' },
    { id: 10, text: 'Objeto 10' },
  ];

    return (
        <NativeBaseProvider >
          <Box h={"100%"} bg={colors.grisbg}>
            <Box h={"20%"}>
                <SwiperList/>
            </Box>
            
            <Box ml={3}>
                <Text bold> Categorias </Text>
            </Box>

           <ScrollView horizontal={false}>
                <HStack>
                    <VStack>
                    {data.map((item, index) => {
        // Si el índice es par, comienza una nueva fila
                        if (index % 2 === 0) {
                        return (
                            <Center key={index}>
                                <Text>{item.text}</Text>
                            </Center>
                        );
                        }
                    })}


                    </VStack>
                    

                    <VStack>
                    {data.map((item, index) => {
        // Si el índice es par, comienza una nueva fila
                        if (index % 2 !== 0) {
                        return (
                            <Center key={index}>
                                <Text>{item.text}</Text>
                            </Center>
                        );
                        }
                    })}

                    </VStack>
                </HStack>

           </ScrollView>
        
            
            
          </Box>
        </NativeBaseProvider>
      );
};

export default DetalleSubCategoria;