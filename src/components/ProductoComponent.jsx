import { Box, Pressable, Icon, Center, Image, Text, Stack} from "native-base";
import {  AntDesign } from '@expo/vector-icons'; 
import colors from "../colors";
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from "react";
const ProductoComponent = (props)=>{
    const navigation =useNavigation();

    const { nombre, precio, id, image, impreso, idAS , idU} =props;

    const detalleCategorias= (item, impreso, image,idAS, nombre, idU) => {
        navigation.navigate("DetalleProducto", {
          id: item,
          impreso: impreso,
          image: image,
          idAS: idAS,
          nombre: nombre,
          idU : idU
          
          
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
        //console.log(selected)
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
        <Pressable onPress={()=>detalleCategorias(id, impreso, image, idAS, nombre)}>
            <Center>
                <Image source={{
                uri: `http://sdiqro.store/static/imgServicios/${image}`
                }} alt="Alternate Text" size="md" />
            </Center>
            <Center w={120} h={10} mx={1}>
                <Text fontSize={12} textAlign="center"> {nombre}</Text>
            </Center>
            <Center >
                <Text fontSize={12} justifyContent={"center"} bold> ${precio}</Text>
            </Center>
        </Pressable>

        <Pressable bg={colors.rosa} borderRadius={30} w="80%" ml="10%"
         onPress={()=>detalleCategorias(id, impreso, image, idAS, nombre)}>
            <Center>
            <Stack direction={"row"}> 
               
                <Text bold color={"white"}>Ver más</Text>
            </Stack>
            </Center>
        </Pressable>

        </Box>
        
        </>
    );
};

export default ProductoComponent;