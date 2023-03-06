import React, { useState, useEffect } from 'react';
import { Box, Center, Checkbox, NativeBaseProvider, Stack, Text, View } from "native-base";
import colors from '../colors';
import Boton from '../components/Boton';
import { Fontisto } from '@expo/vector-icons'; 


const Recoleccion = (props) => {

    const navegacion= (item) => {
        props.navigation.navigate(item);
    };

    const Sucursal = (props) =>{
        const {name, address} =props;
        const [isChecked, setIsChecked] = useState(false);
        const handleClick = () => {
           setIsChecked(!isChecked);
          };

        return(
            <Center>
            <Stack direction={"row"} space={3}>
                <Center>
                    <Fontisto name="shopping-store" size={24} color="black" />
                </Center>
                
                <Stack  w="70%">
                    <Text fontWeight={500} fontSize={"lg"}> 
                       Sucursal {name}
                    </Text>
                    <Text> 
                        {address}
                    </Text>
                   
                </Stack>
                <Center>
                    <Checkbox isChecked={isChecked} onChange={handleClick} accessibilityLabel="This is a dummy checkbox"/>
                </Center>
            </Stack>
            </Center>
        )

    }



    return(
        <NativeBaseProvider>
            <View flex={1} bg={colors.blanco}>
                <Text bold fontSize={"xl"} ml={5} my={3}>¿Dónde deseas recoger tus productos?</Text>
                <Box w="90%" mx="5%" bg={colors.blanco} h={96} shadow={6} my={4} borderRadius={20} > 
                    <Sucursal name="Matriz" address="Avenida Siempre Viva #123, Colonia Limitrofe, Sprindfield"/>
                    <Sucursal name="Matriz" address="Avenida Siempre Viva #123, Colonia Limitrofe, Sprindfield"/>
                    <Sucursal name="Matriz" address="Avenida Siempre Viva #123, Colonia Limitrofe, Sprindfield"/>
                </Box>
                <Boton text="Siguiente" color={colors.azul} colorText={colors.blanco} nav="" />

            </View>
        </NativeBaseProvider>
    );
};

export default Recoleccion;