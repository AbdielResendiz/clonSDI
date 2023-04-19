import React, { useState, useEffect } from 'react';
import { Box, NativeBaseProvider, ScrollView, Text, View, Center, Checkbox, Stack, Pressable, HStack, Divider} from "native-base";
import Boton from '../components/Boton';
import colors from '../colors';
import { FontAwesome } from '@expo/vector-icons'; 
const SeleccionaTarjeta = (props) => {

    const navegacion= (item) => {
        props.navigation.navigate(item);
    };
    const pagar=()=>{
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
    };

 


    return(
        <NativeBaseProvider>
            <View flex={1} bg={colors.blanco} safeAreaButton={3} >
                <Text bold fontSize={"xl"} ml={5} my={3}>Pago </Text>
              
                <Pressable my={5} alignItems="center" onPress={()=>navegacion("DetalleTarjeta")} >
                    <Text bold underline color={colors.azul} fontSize={18}>Testing pagar</Text>
                </Pressable>
                <Boton text="Pago Stripe" color={colors.azul} colorText={colors.blanco} nav="PagoStripe" />
                

            </View>
        </NativeBaseProvider>
    );
};


export default SeleccionaTarjeta;