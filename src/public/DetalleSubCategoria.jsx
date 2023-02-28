import React, { useState, useEffect } from 'react';
import colors from '../colors';
import { NativeBaseProvider, Text, Box, ScrollView, Row, Center, HStack, VStack } from "native-base";
import SwiperList from '../components/SwiperList';
import ProductoComponent from '../components/ProductoComponent';
//import ProductoComponent from '../components/ProductoComponent';

const DetalleSubCategoria = (props) => {
 

    return (
        <NativeBaseProvider >
          <Box h={"100%"} bg={colors.grisbg}>
            <Box h={"20%"}>
                <SwiperList/>
            </Box>
            
            <Box ml={3}>
                <Text bold> Categorias </Text>
            </Box>

           <ScrollView horizontal={false}  >
                <HStack justifyContent="space-between" alignContent="center" mx={10}>
                    <VStack>
                        <ProductoComponent/>
                        <ProductoComponent/>
                        <ProductoComponent/>
                        <ProductoComponent/>
                        <ProductoComponent/>
                        <ProductoComponent/>
                    </VStack>

                    <VStack>
                        <ProductoComponent/>
                        <ProductoComponent/>
                        <ProductoComponent/>
                        <ProductoComponent/>
                        <ProductoComponent/>
                        <ProductoComponent/>
                    </VStack>
                </HStack>
           </ScrollView>
          </Box>
        </NativeBaseProvider>
      );
};

export default DetalleSubCategoria;