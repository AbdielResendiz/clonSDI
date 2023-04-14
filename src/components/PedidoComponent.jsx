import React, { useState, useEffect } from 'react';
import { Box, Divider, Text, Pressable, HStack , Icon, Stack, Center} from "native-base";
import colors from '../colors';
import { FontAwesome, Entypo } from '@expo/vector-icons'; 
import { Alert } from 'react-native';

const PedidoComponent = (props)=>{
    // status de pedido
    // 0.Por recoger
    // 1. entregado
    // 2. cancelado
    const {fecha, sucursal, total, orden, estatus ,color, token, idVenta, navigation} = props;
   // const [ status, setStatus ] = useState(0);

    const alertaToken = ()  =>{
        return(
            Alert.alert(`Token de orden #${orden}:`, `    ${token}`, [
               
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ])
        )

    }

    const detallePedido= () => {
        navigation.navigate("DetallePedido", {
          id: idVenta,
          suc: sucursal,
          tot:total
          
        });
      };
    
    return(
        <Box w="90%"  h={40} mx={"5%"} my={3}  borderRadius={10} bg={colors.blanco} shadow={6} borderWidth={2} borderColor={"#eeeeee"} p={2}>
            <Stack direction={"row"} justifyContent={"space-between"}>
                <Text fontSize={"md"} mx={1} my={1} bold>Orden: # {orden}</Text>
                
                <Pressable borderWidth={1} borderColor={"#dddddd"} borderRadius={10} p={2}  mr={4} shadow={6} bg={colors.rosa} onPress={()=>alertaToken()}> 
                   <Stack direction={"row"}>
                        <Text bold color={"white"}> Token: </Text>
                        <Icon as={Entypo} name="key" size={4} mt={1} mx={1}  color={colors.blanco}  />
                   </Stack>
                </Pressable>
            </Stack>
         
            <Divider w="50%" mx="3%" h={0.5}/>
            
            <Text ml={2}  fontSize="md" >Fecha:  {fecha.substring(0,10)}</Text>
            <Text fontSize="md"  mx={2}>Sucursal:  {sucursal}</Text>


            <Stack direction={"row"} justifyContent={"space-between"}>
                <Text fontSize="md"  mx={2}>Total:  <Text bold>${total}</Text></Text>
                <Pressable flexDirection={"row"} bg={colors.azul} borderRadius={10} px={2} mr={3} py={1} shadow={6} 
                    onPress={()=>detallePedido()}>
                    <Icon as={FontAwesome} name="list-ul" size={4} mt={1} mx={1}  color="white"  />
                    
                    <Text color="#fff" bold > Detalle</Text>

                </Pressable>
            </Stack>

          
            <Stack direction={"row"}>
                <Center>
                    <Text ml={1} fontSize="md" > Estatus: </Text>
                </Center>
             
                <Center bg={color} borderRadius={10}>
                    <Text color={"white"}  bold letterSpacing={0.5} px={2} py={0.5} m={0} >{estatus}</Text> 
                </Center>
            </Stack>

            
        </Box>
    )


}

export default PedidoComponent;