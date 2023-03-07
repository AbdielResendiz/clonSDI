import React, { useState, useEffect } from 'react';
import { Box, NativeBaseProvider, ScrollView, Text, View, Center, Checkbox, Stack, Pressable, HStack, Divider} from "native-base";
import Boton from '../components/Boton';
import colors from '../colors';
import { FontAwesome } from '@expo/vector-icons'; 
const SeleccionaTarjeta = (props) => {

    const navegacion= (item) => {
        props.navigation.navigate(item);
    };

 
    const EliminarBtn = () =>{
        
    }

    const DetalleTarjeta = () =>{
        props.navigation.navigate("DetalleTarjeta")
    }


    const TarjetaRow= (props) => {
        const { text } = props;
        const [isChecked, setIsChecked] = useState(false);
        const handleClick = () => {
           setIsChecked(!isChecked);
          };
        return(
            <Box>
                <HStack w="86%" mx="7%" mt={4} justifyContent="space-between">
                <Center>
                    <Checkbox isChecked={isChecked} onChange={handleClick} accessibilityLabel="This is a dummy checkbox"/>
                </Center>
                    <FontAwesome name="credit-card" size={24} color={colors.azul} style={{marginTop:5}} />
                    <Pressable w="75%"  h={10} onPress={()=>DetalleTarjeta()}>
                        <Text fontSize={"lg"}>
                            {text}
                        </Text>

                    </Pressable>
                    
               
                </HStack>
                <Divider w="90%" mx="5%" my={1}/>
            </Box>
        )

    }

    return(
        <NativeBaseProvider>
            <View flex={1} bg={colors.blanco} safeAreaButton={3} >
                <Text bold fontSize={"xl"} ml={5} my={3}>Mis Tarjetas</Text>
                <ScrollView bg={colors.blanco} w="90%" mx="5%"  borderRadius={20} shadow={6} safeAreaTop={4} mb={5}>
                    <TarjetaRow text="0000 (tarjeta de Pepe)"/>
                    <TarjetaRow text="0000 (tarjeta de Lulu)"/>
                    <TarjetaRow text="0000 (tarjeta Hermano)"/>
                    
                </ScrollView>
                <Pressable my={5} alignItems="center" onPress={()=>navegacion("DetalleTarjeta")} >
                    <Text bold underline color={colors.azul} fontSize={18}>Agregar tarjeta</Text>
                </Pressable>
                <Boton text="Siguiente" color={colors.azul} colorText={colors.blanco} nav="CheckOut" />
                

            </View>
        </NativeBaseProvider>
    );
};


export default SeleccionaTarjeta;