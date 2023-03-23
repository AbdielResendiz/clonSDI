import { Box, Pressable, Icon, Center, Image, Text, Stack} from "native-base";
import {  AntDesign } from '@expo/vector-icons'; 
import colors from "../colors";
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from "react";
const FavoritoComponent = (props)=>{
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

     const [ existe, setExiste ] = useState(false);

    return(
        <>
      <Box h={32} w={"90%"} mx={"5%"}  my={2} shadow={6} bg="white" borderRadius={20} >
            <Stack direction={"row"}> 
                <Icon as={AntDesign} name="heart" size={6} ml={3}  mt={3} color={colors.rosa} />
                
                <Image source={{
                uri: `http://sdiqro.store/static/imgServicios/${image}`
                }} alt="Alternate Text" size="lg" mt={4} mx={1} />
                <Stack direction={"column"}   flex={1} mt={2}>
                    <Text  pt={1}> {nombre}</Text>
                    <Text bold fontSize={"lg"}>${precio}</Text>
                    <Box my={1} >
                 
                     <Pressable bg={colors.azul} borderRadius={10} w={24} h={9}
                     onPress={()=>detalleCategorias(id, impreso, image, idAS, nombre)} >
                        <Center >
                            <Stack direction={"row"} mt={1}>
                                
                                <Text bold color={"white"} mt={1}>Ver más</Text>
                            </Stack>
                        </Center>
                    </Pressable>
                   
                    </Box>

                </Stack>


            </Stack>

        </Box>
        
        </>
    );
};

export default FavoritoComponent;