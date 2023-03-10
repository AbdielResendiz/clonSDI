import React, { useState, useEffect } from 'react';
import { Box, Divider, NativeBaseProvider, ScrollView, Text, View, Pressable, HStack , Icon} from "native-base";
import colors from '../colors';
import { FontAwesome } from '@expo/vector-icons'; 


const Pedidos = (props) => {
// status de pedido
// 0.Por recoger
// 1. entregado
// 2. cancelado
    const [ status, setStatus ] = useState(0);

    const statusRender = (value)=>{
        switch (value) {
            case 0:
              return (<>
                <Text ml={1}> Estatus: <Text color={"warning.500"}>Por recoger</Text> </Text>
                <Pressable flexDirection={"row"} bg={colors.azul} borderRadius={10} px={2} mr={3} py={1} shadow={6} onPress={()=>(props.navigation.navigate("DetalleCompra"))}>
                    <Icon as={FontAwesome} name="list-ul" size={4} mt={1} mx={1}  color="white"  />
                    
                    <Text color="#fff"> Detalle</Text>

                </Pressable>
                </>);
            case 1:
              return (<>
                <Text ml={1}> Estatus: <Text color={"success.500"}>Entregado</Text> </Text>
                <Pressable flexDirection={"row"} bg={colors.rosa} borderRadius={10} px={1} mr={1} py={1} shadow={6} onPress={()=>(props.navigation.navigate("ListaFactura"))}>
                    <Icon as={FontAwesome} name="copy" size={4} mt={1} mx={1}  color="white"  />
                    
                    <Text color="#fff"> Facturar</Text>

                </Pressable>
                <Pressable flexDirection={"row"} bg={colors.azul} borderRadius={10} px={1} mr={2} py={1} shadow={6} onPress={()=>(props.navigation.navigate("DetalleCompra"))}>
                    <Icon as={FontAwesome} name="list-ul" size={4} mt={1} mx={1}  color="white"  />
                    
                    <Text color="#fff"> Detalle</Text>

                </Pressable>
                </>);
         
            case 2:
              return  (<>
              <Text ml={1}> Estatus: <Text color={"danger.600"} >Cancelado</Text> </Text>
              </>);
            default:
              return ( 
              <>
              <Text ml={1}> Estatus: </Text>
              </>);
              
          }
    }

    return(
        <NativeBaseProvider>
            <View flex={1} bg={colors.blanco}>
                <Text m={2}  bold fontSize={"xl"}>Mis Pedidos</Text>

                <ScrollView  >
                    {/**MAPEO DE PEDIDOS */}
                    <Box w="90%"  h={40} mx={"5%"} my={3}  borderRadius={10} bg={colors.blanco} shadow={6} p={2}>
                        <Text m={1}  fontSize="lg" bold>02/03/2023</Text>
                        <Divider w="94%" mx="3%" h={0.5}/>
                        <Text fontSize={"md"} mx={1} my={1} bold>Orden: #123456</Text>
                        <Text color={colors.gris} mx={2}>Sucursal Plaza del Río</Text>
                        <Text color={colors.gris} mx={2}>Total: $550.00</Text>
                        <HStack justifyContent={"space-between"}>
                            {statusRender(1)}


                     

                        </HStack>
                    </Box>
                    {/**Fin  */}
                    
                    <Box w="90%"  h={40} mx={"5%"} my={3}  borderRadius={10} bg={colors.blanco} shadow={6} p={2}>
                        <Text m={1}  fontSize="lg" bold>02/03/2023</Text>
                        <Divider w="94%" mx="3%" h={0.5}/>
                        <Text fontSize={"md"} mx={1} my={1} bold>Orden: #123456</Text>
                        <Text color={colors.gris} mx={2}>Sucursal Plaza del Río</Text>
                        <Text color={colors.gris} mx={2}>Total: $550.00</Text>
                        <HStack justifyContent={"space-between"}>
                            {statusRender(0)}


                     

                        </HStack>
                    </Box>

                    <Box w="90%"  h={40} mx={"5%"} my={3}  borderRadius={10} bg={colors.blanco} shadow={6} p={2}>
                        <Text m={1}  fontSize="lg" bold>02/03/2023</Text>
                        <Divider w="94%" mx="3%" h={0.5}/>
                        <Text fontSize={"md"} mx={1} my={1} bold>Orden: #123456</Text>
                        <Text color={colors.gris} mx={2}>Sucursal Plaza del Río</Text>
                        <Text color={colors.gris} mx={2}>Total: $550.00</Text>
                        <HStack justifyContent={"space-between"}>
                            {statusRender(2)}


                     

                        </HStack>
                    </Box>



                </ScrollView>

            </View>
        </NativeBaseProvider>
    );
};

export default Pedidos;