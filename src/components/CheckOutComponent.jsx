import { Box, Icon, Stack , Image, Text, Center, Button, Pressable, HStack} from "native-base";
import {   Entypo, MaterialCommunityIcons } from '@expo/vector-icons'; 
import colors from "../colors";
import { useEffect, useState } from "react";

const CheckOutComponent= (props)=>{
     //inicia funciones para contar
     const {nombre, imagen, cantidad, precio, subtotal}= props;

    return(
        <Box h={32} w={"90%"} mx={"5%"}  my={2} shadow={6} bg="white" borderRadius={20} >
            <Stack direction={"row"}> 
             
                
                <Image source={{
                uri: `http://sdiqro.store/static/imgServicios/${imagen}`
                }} alt="Alternate Text" size="lg" mt={5} mx={8} />
                <Stack direction={"column"} alignItems={"flex-end"} w="150" mt={2}>
                    <Text textAlign={"right"} color={"muted.500"}> {nombre}</Text>
                    <Text color={"muted.400"}>Precio unitario: ${precio}</Text>
                    <Text color={"muted.400"}>Cantidad: {cantidad} </Text>
                    <Text bold fontSize={"lg"}>${subtotal}</Text>
                    
               

                </Stack>


            </Stack>

        </Box>
    );
};
export default CheckOutComponent;