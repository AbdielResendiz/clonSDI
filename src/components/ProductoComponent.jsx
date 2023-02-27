import { Box, Pressable, Icon, Center, Image, Text, Stack} from "native-base";
import {  AntDesign } from '@expo/vector-icons'; 
import colors from "../colors";
const ProductoComponent = ()=>{

    return(
        <>
        <Box  h={180} w={120} ml={2} borderRadius={20} shadow={6} bg="white" my={3}>
        <Pressable justifyContent={"flex-end"} alignContent="flex-end">
            
            <Icon as={AntDesign} name="hearto"  ml={24} mt={2} />
        </Pressable>

        <Center>
            <Image source={{
            uri: "https://w7.pngwing.com/pngs/638/892/png-transparent-hoodie-t-shirt-sweater-bluza-deep-grey-zipper-hat-active-shirt.png"
            }} alt="Alternate Text" size="md" />
        </Center>
        <Center w={120} h={10} mx={1}>
            <Text fontSize={10} justifyContent={"center"}> Sudadera Gris algodon Unisex Infantil</Text>
        </Center>
        <Center >
            <Text fontSize={10} justifyContent={"center"} bold> $220.00</Text>
        </Center>
        <Pressable bg={colors.azul} borderRadius={30} w="80%" ml="10%">
            <Center>
            <Stack direction={"row"}>
                <Icon as={AntDesign} name="shoppingcart"   mt={1} mr={1} color="white"/>
                <Text bold color={"white"}>Agregar</Text>
            </Stack>
            </Center>
        </Pressable>

        </Box>
        
        </>
    );
};

export default ProductoComponent;