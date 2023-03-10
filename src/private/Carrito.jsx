import React, { useState, useEffect } from 'react';
import { NativeBaseProvider, ScrollView, Text, View , Box, Center, HStack, Icon, Divider} from "native-base";
import colors from '../colors';
import CarritoComponent from '../components/CarritoComponent';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 



const Carrito = (props) => {
    const navegacion= (item) => {
        props.navigation.navigate(item);
      }; 

    return(
        <NativeBaseProvider>
            <View flex={1} bg={colors.blanco} >
            <Text bold fontSize={20} ml={5} mt={3}>Carrito</Text>
            <ScrollView w="100%" >    
                <CarritoComponent/>
                <CarritoComponent/>
                <CarritoComponent/>
                <CarritoComponent/>
            </ScrollView>
            <Divider bg={colors.azul} borderRadius={100} h={1} w="80%" alignSelf={"center"} my={1}/>
            <Box h="70" w="85%"  mx={7} alignItems={"flex-end"} >  
                <Text fontSize={18} >Subtotal: $ 600.00</Text>
                <Text fontSize={22} bold>Total: $ 600.00</Text>
            </Box>

            <Pressable alignItems="center" onPress={()=>navegacion("Recoleccion")}>
                <Center h="35" my={1} w="50%" bg={colors.azul} borderRadius={20} mx={7} >  
                    <HStack>
                        <Icon as={Ionicons} name="wallet"  size={6} color={"white"} />
                        <Text fontSize={16} color={"white"} bold  mx={3}>Pagar</Text>
                    </HStack>
                </Center>
            </Pressable>

            </View>

        </NativeBaseProvider>
    );
};

export default Carrito;