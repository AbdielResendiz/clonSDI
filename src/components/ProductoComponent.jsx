import { Box, Pressable, Icon, Center, Image, Text, Stack} from "native-base";
import {  AntDesign } from '@expo/vector-icons'; 
import colors from "../colors";
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from "react";
const ProductoComponent = (props)=>{
    const navigation =useNavigation();

    const { nombre, precio, id, image, impreso } =props;

    const detalleCategorias= (item, impreso, image, nombre) => {
        navigation.navigate("DetalleProducto", {
          id: item,
          impreso: impreso,
          image: image,
          nombre: nombre
          
          
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
        <Box  h={190} w={120} ml={2} borderRadius={20} shadow={6} bg="white" my={3}>
        <Pressable justifyContent={"flex-end"} alignContent="flex-end" onPress={()=>handleIconPress()}>
            { selected===true ?
            <Icon as={AntDesign} name="heart"  ml={24} mt={2}  color={colors.rosa }/> :
            <Icon as={AntDesign} name="hearto"  ml={24} mt={2}  />
        }
           
        </Pressable>
        <Pressable onPress={()=>detalleCategorias(id, impreso, image, nombre)}>
            <Center>
                <Image source={{
                uri: `http://sdiqro.store/static/imgServicios/${image}`
                }} alt="Alternate Text" size="md" />
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

export default ProductoComponent;