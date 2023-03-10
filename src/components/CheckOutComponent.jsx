import { Box, Icon, Stack , Image, Text, Center, Button, Pressable, HStack} from "native-base";
import {   Entypo, MaterialCommunityIcons } from '@expo/vector-icons'; 
import colors from "../colors";
import { useEffect, useState } from "react";

const CheckOutComponent= (props)=>{
     //inicia funciones para contar
     

    return(
        <Box h={32} w={"90%"} mx={"5%"}  my={2} shadow={6} bg="white" borderRadius={20} >
            <Stack direction={"row"}> 
             
                
                <Image source={{
                uri: "https://clipground.com/images/hoodie-png-2.png"
                }} alt="Alternate Text" size="lg" mt={5} mx={8} />
                <Stack direction={"column"} alignItems={"flex-end"} w="150" mt={2}>
                    <Text textAlign={"right"} color={"muted.500"}> Sudadera Gris algodón Unisex Infantil</Text>
                    <Text color={"muted.400"}>Precio unitario: $130</Text>
                    <Text color={"muted.400"}>Cantidad: 1 </Text>
                    <Text bold fontSize={"lg"}>$300.00</Text>
                    
               

                </Stack>


            </Stack>

        </Box>
    );
};
export default CheckOutComponent;