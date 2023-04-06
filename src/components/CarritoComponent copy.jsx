import { Box, Icon, Stack , Image, Text, Center, Button, Pressable, HStack} from "native-base";
import {   Entypo, MaterialCommunityIcons } from '@expo/vector-icons'; 
import colors from "../colors";
import { useEffect, useState } from "react";

const CarritoComponent= (props)=>{
     //inicia funciones para contar
     const [ count, setCount ] = useState(1);
     const incrementCount = () => {
       setCount(count + 1);
     };
   
     const decrementCount = () => {
       if (count > 1) {
         setCount(count - 1);
       }
     };

    return(
        <Box h={32} w={"90%"} mx={"5%"}  my={2} shadow={6} bg="white" borderRadius={20} >
            <Stack direction={"row"}> 
             
                <Image source={{
                uri: "https://clipground.com/images/hoodie-png-2.png"
                }} alt="Alternate Text" size="lg" mt={5} mx={8} />
                <Stack direction={"column"} justifyContent={"flex-end"}  w="150" mt={2}>
                    <Text> Sudadera Gris algodón Unisex Infantil</Text>
                    <Text bold fontSize={"lg"}>$300.00</Text>
                    
                    <HStack my={1} >
                    
                        <Pressable bg={colors.azul} borderRadius={10} w={24} h={9} >
                            <Center >
                                <Stack direction={"row"} mt={1}>
                                    <Icon as={MaterialCommunityIcons} name="cart-plus" size={6}  mt={1} mr={2} color="white"/>
                                    <Text bold color={"white"} mt={1}>Agregar</Text>
                                </Stack>
                            </Center>
                        </Pressable>

                        <HStack ml={"10%"} my={1} bg={colors.azul} borderRadius={10}>
                            <Pressable onPress={decrementCount}  py={2} px={0.5}>
                                <Entypo name="minus" size={16} color="#fff"  />
                            </Pressable>
                            <Center>
                                <Text fontSize={16} mx={2} bold color="#fff">{count}</Text>
                            </Center>
                            
                            <Pressable onPress={incrementCount}  py={2} px={0.5}>
                                <Entypo name="plus" size={16} color={"#fff"}  />
                            </Pressable>
                        </HStack>
                    </HStack>
                </Stack>
            </Stack>
        </Box>
    );
};
export default CarritoComponent;