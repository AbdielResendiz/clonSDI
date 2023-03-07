import { Box, Pressable, Icon, Center, Image, Text, Stack} from "native-base";
import {  AntDesign } from '@expo/vector-icons'; 
import colors from "../colors";
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from "react";
const ProductoComponent2 = (props)=>{
    const navigation =useNavigation();

    const { nombre, precio, id, image } =props;

    const detalleCategorias= (item, tipo) => {
        navigation.navigate("DetalleProducto", {
          id: item,
          
        });
      };

      const [ selected, setSelected] = useState(false);

      const handleIconPress = () => {
        if (selected===true){
            setSelected(false);
        }else{
        setSelected(true);}
      };
     useEffect( ()=>{
        console.log(selected)
     },[selected]);



    return(
        <>
        <Box  h={210} w={150} ml={2} borderRadius={20} shadow={6} bg="white" my={3}>
        <Pressable justifyContent={"flex-end"} alignContent="flex-end" ml={7} onPress={()=>handleIconPress()}>
            { selected===true ?
            <Icon as={AntDesign} name="heart"  ml={24} mt={2}  color={colors.rosa }/> :
            <Icon as={AntDesign} name="hearto"  ml={24} mt={2}  />
        }
           
        </Pressable>
        <Pressable onPress={()=>detalleCategorias(id)}>
            <Center>
                <Image source={{
                uri: `http://sdiqro.store/static/imgServicios/${image}`
                }} alt="Alternate Text" size="lg" />
            </Center>
            <Center w={120} h={10} mx={1}>
                <Text fontSize={12} justifyContent={"center"}> {nombre}</Text>
            </Center>
            <Center >
                <Text fontSize={12} justifyContent={"center"} bold> ${precio}</Text>
            </Center>
        </Pressable>

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

export default ProductoComponent2;