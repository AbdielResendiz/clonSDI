import { Box, Icon, Stack , Image, Text, Center, Pressable} from "native-base";
import colors from "../colors";
import {  useState } from "react";
import { FontAwesome5 } from '@expo/vector-icons'; 
import URL from "../helper/URL";
import fetchPost from "../helper/fetchPost";
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CarritoComponent= (props)=>{
     //inicia funciones para contar
     const navigation =useNavigation();
    const navegacion= (item) => {
        navigation.navigate(item);
      };

     const { nombre, precio, id, image, impreso, idAS , idU, cantidad, sucursal, subtotal, comentario} =props;
     const [ count, setCount ] = useState(1);
  
    // console.log("impreso?", impreso)
    const eliminarItem = async()=>{
        const BASE_URL= URL.BASE_URL;
            
        const dataFav = new FormData();
        dataFav.append("id", id);
        
        const url = `${BASE_URL}abdiel/carrito/delete_item`
        const options = {
          method:'POST',
          body: dataFav
        };
        const res = await fetchPost(url, options);
        console.log("delete fav:", res);
        if (res!==true){
            Alert.alert('Error al eliminar', 'Comprueba tu conexión a internet e intentalo más tarde', [
                {
                    text: 'Volver',
                    onPress: () => console.log("btn volver error") //props.navigation.navigate("Welcome"),
                  
                }
              ])
        }else{
            Alert.alert('Se elimino con éxito', '¿Que deseas hacer ahora?', [
                {
                    text: 'Volver al carrito',
                    onPress: () => console.log("btn volver ") //props.navigation.navigate("Welcome"),
                  
                },
                {
                    text: 'Ir a inicio',
                    onPress: () => navegacion("Home") //props.navigation.navigate("Welcome"),
                  
                }

              ])
        }
      }

      const previoEliminar= ()=>{
        Alert.alert(`Estas seguro que deseas eliminar ${nombre}`, 'Puedes agregarlo nuevamente despues', [
            {
                text: 'Cancelar',
                onPress: () => console.log("btn cancelar ") //props.navigation.navigate("Welcome"),
              
            },
            {
                text: 'Eliminar del carrito',
                onPress: () => eliminarItem() //props.navigation.navigate("Welcome"),
              
            }

          ])
      }



    return(
        <Box h={48} w={"90%"} mx={"5%"}  my={2} shadow={6} bg="white" borderRadius={20} borderColor={"#dddddd"} borderWidth={2}>
            <Stack direction={"row"}> 
             
                <Image source={{
                uri: `http://sdiqro.store/static/imgServicios/${image}`
                }} alt="Alternate Text" size="xl" mt={2} mx={2} resizeMode="contain"/>
                <Stack direction={"column"} justifyContent={"center"}  w="150" mt={2}>
                    <Text bold fontSize={"lg"}> {nombre}</Text>
                    <Text bold>Producto {impreso==0 ? "no impreso" : "impreso"}</Text>
                    <Text>Sucursal: <Text bold>{sucursal} </Text> </Text>
                    <Text >Precio unitario: <Text bold> ${precio}</Text></Text>
                    <Text>Cantidad: <Text bold> {cantidad} </Text> </Text>
                    <Text>Subtotal: <Text bold>${subtotal}</Text></Text>
                    {comentario !==  "null" ? 
                     <Text>Medidas: <Text bold>{comentario}</Text></Text>
                     : null
                    }
                   
                </Stack>
                <Center  >
                    <Pressable bgColor={colors.rosa} p={2} borderRadius={10} shadow={6} onPress={()=> previoEliminar() }>
                        <Icon as={FontAwesome5} 
                         name="trash-alt"  size={6} color={colors.blanco} />
                    </Pressable>
                </Center>

            </Stack>
        </Box>
    );
};
export default CarritoComponent;