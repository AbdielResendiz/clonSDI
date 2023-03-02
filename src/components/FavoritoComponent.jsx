import { Box, Icon, Stack , Image, Text, Center, CheckCircleIcon, Pressable} from "native-base";
import {  AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'; 
import colors from "../colors";
import { useEffect, useState } from "react";

const Favoritocomponent= (props)=>{

    const [ existe, setExiste ] = useState(false);

    useEffect( () =>{
console.log("existeFav", existe)
    },[existe]);

    return(
        <Box h={32} w={"90%"} mx={"5%"}  my={2} shadow={6} bg="white" borderRadius={20} >
            <Stack direction={"row"}> 
                <Icon as={AntDesign} name="heart" size={6} ml={3}  mt={3} color={colors.rosa} />
                
                <Image source={{
                uri: "https://clipground.com/images/hoodie-png-2.png"
                }} alt="Alternate Text" size="lg" mt={5} mx={8} />
                <Stack direction={"column"} justifyContent={"flex-end"}  w="150" mt={2}>
                    <Text> Sudadera Gris algodón Unisex Infantil</Text>
                    <Text bold fontSize={"lg"}>$300.00</Text>
                    <Box my={3} >
                    { (existe === true) ?
                     <Pressable bg={colors.azul} borderRadius={10} w={24} h={9} >
                        <Center >
                            <Stack direction={"row"} mt={1}>
                                <Icon as={MaterialCommunityIcons} name="cart-plus" size={6}  mt={1} mr={2} color="white"/>
                                <Text bold color={"white"} mt={1}>Agregar</Text>
                            </Stack>
                        </Center>
                    </Pressable>
                    :
                    <Stack direction={"row"} >
                        <Icon as={AntDesign} name="exclamationcircle" size={4} color={colors.rosa} mr={3} />
                        <Text fontSize={12} color={"#222222"}>No hay existencia</Text>
                    </Stack>
                    }
                    </Box>

                </Stack>


            </Stack>

        </Box>
    );
};
export default Favoritocomponent;