import React, { useState, useEffect } from 'react';
import { Center, NativeBaseProvider, Text, Stack, Pressable, Divider, Box, Image, HStack, Button, View, Icon, ScrollView} from "native-base";
import colors from '../colors';
import {  AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'; 

const DetalleProducto   = () => {

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
        <NativeBaseProvider >
            <ScrollView bg={colors.blanco} flex={1}>
            {/**Titulo */}
            <Center my={1}>
                <Text bold fontSize={18}>Detalle Producto</Text>
            </Center>
            {/**IMAGEN */}
            <Center  h={32} w="90%" mx="5%" mb={2}>
                <Image source={{
                uri: "https://wallpaperaccess.com/full/317501.jpg"
                }} alt="Alternate Text" size="xl" />
            </Center>
                {/** color, talla y precio */}
            <Stack direction={"row"} justifyContent={"space-between"} mx={"5%"} my={2}  flex={1}>
                <Stack direction={"column"}>
                    <Text bold>
                        Color:
                    </Text>
                    <HStack>
                        <Pressable  h={6} w={6} mx={1}>
                            <Center bg={"#ff0000"} flex={1} borderRadius={100} shadow={6}/>
                        </Pressable>
                        <Pressable  h={6} w={6} mx={1}>
                            <Center bg={"#00ff00"} flex={1} borderRadius={100} shadow={6}/>
                        </Pressable>
                        <Pressable  h={6} w={6} mx={1}>
                            <Center bg={"#0000ff"} flex={1} borderRadius={100} shadow={6}/>
                        </Pressable>
                    </HStack>
                    <Text bold mt={2}>Talla:</Text>
                    <Center>
                        <Box w={32} h={6} borderWidth={1}>
                        
                        </Box>
                    </Center>

                </Stack>
                <Stack direction={"column"}>
                    <Text bold fontSize={"lg"}>$130</Text>

                </Stack>
                

            </Stack>
            <Divider w="90%" mx="5%" bg={colors.azul} h={0.5}/>
            {/** STOCK */}
            <Text bold ml={5} mt={1}> Stock:</Text>
            <Stack direction={"column"}  flex={1} mx="5%" mt={1} p={2} px={4} bg={colors.grisclaro} borderRadius={10} mb={2}> 
                
                <Stack direction={"row"} justifyContent="space-between">
                    <Text>Matriz</Text>
                    <Text>16</Text>
                </Stack>
                <Stack direction={"row"} justifyContent="space-between">
                    <Text>Matriz</Text>
                    <Text>16</Text>
                </Stack>
                <Stack direction={"row"} justifyContent="space-between">
                    <Text>Matriz</Text>
                    <Text>16</Text>
                </Stack>

            </Stack>
            <Divider w="90%" mx="5%" bg={colors.azul} h={0.5}/>
            {/** DESCRIPCION */}
            <Box mx={"5%"} mt={2} mb={4} flex={1}>
                <Text bold>Descripción</Text>
                <Text mx={2}>Sudadera unisex con capucha deportiva hoodie</Text>
            </Box> 
                {/**BOTONES DEL FINAL */}
            <Stack direction={"row"} justifyContent="space-around">

                {/**BOTON CANTIDAD */}
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
                        {/**BOTON AGREGAR */}
                    <Pressable bg={colors.azul} borderRadius={10} w="30%" h={9} >
                        <Center >
                        <Stack direction={"row"} mt={1}>
                            <Icon as={MaterialCommunityIcons} name="cart-plus" size={6}  mt={1} mr={2} color="white"/>
                            <Text bold color={"white"} mt={1}>Agregar</Text>
                        </Stack>
                        </Center>
                    </Pressable>
                    {/**FAVORITO */}
                   <Pressable onPress={()=>handleIconPress()} mr={10}>
                        <Center>
                            { selected===true ?
                            <Icon as={AntDesign} name="heart"   mt={2} size={6} color={colors.rosa}/> :
                            <Icon as={AntDesign} name="hearto"   mt={2} size={6} />
                        }
                        </Center>
                    </Pressable>

                </Stack>

            
            </ScrollView>
            
        </NativeBaseProvider>
    );
};

export default DetalleProducto;