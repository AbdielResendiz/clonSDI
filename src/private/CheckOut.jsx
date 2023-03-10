import React, { useState, useEffect } from 'react';
import { NativeBaseProvider, ScrollView, Text, View , Box, Center, HStack, Icon, Divider} from "native-base";
import colors from '../colors';
import CheckOutComponent from '../components/CheckOutComponent';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 



const CheckOut = (props) => {
    const navegacion= (item) => {
        props.navigation.navigate(item);
      }; 

    return(
        <NativeBaseProvider>
            <ScrollView flex={1} bg={colors.blanco} >
            <Text bold fontSize={20} ml={5} mt={3}>Checkout</Text>
            <ScrollView w="98%" h={96} showsVerticalScrollIndicator={true} persistentScrollbar={true}>    
                <CheckOutComponent/>
                <CheckOutComponent/>
                <CheckOutComponent/>
                <CheckOutComponent/>
            </ScrollView>
            <Divider bg={colors.azul} borderRadius={100} h={1} w="80%" alignSelf={"center"} my={1}/>
            <Center h="70" w="85%"  mx={7} >  
                <Text fontSize={22} bold>Total: $ 600.00</Text>
                <Text fontSize={18} >Recolección: Sucursal Matriz </Text>
            </Center>

            <Pressable alignItems="center" onPress={()=>navegacion("ConfirmaPago")}>
                <Center h="35" my={1} w="50%" bg={colors.azul} borderRadius={20} mx={7} >  
                    <HStack>
                        <Icon as={Ionicons} name="wallet"  size={6} color={"white"} />
                        <Text fontSize={16} color={"white"} bold  mx={3}>Pagar</Text>
                    </HStack>
                </Center>
            </Pressable>

            </ScrollView>

        </NativeBaseProvider>
    );
};

export default CheckOut;