import React, { useState, useEffect } from 'react';
import { Center, NativeBaseProvider, Text, Stack, Pressable, Divider, Box, Image, HStack,  Icon, ScrollView, VStack} from "native-base";
import colors from '../colors';
import {  AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { TextInput } from 'react-native';
import checkFav from '../helper/checkFav';
import agregarFav from '../helper/agregarFav';
import eliminarFav from '../helper/eliminarFav';
import AtributoSelector from '../components/Componentes/Producto/AtributoSelector';

const DetalleProducto   = (props) => {

    const id = props.route.params.id;
    const impreso = props.route.params.impreso;
    const image = props.route.params.image;
    const idAS = props.route.params.idAS;
    const nombre = props.route.params.nombre;
    const idU = props.route.params.idU;
    // console.log("id" , id);
    // console.log("ESTADO ===", impreso);
    // console.log("imagen", image);
     console.log("idAgrupacion", idAS);
    // console.log("nombre", nombre);
    // console.log("idU DetalleProd", idU);
    
    const [loader, setLoader ]= useState(true);
    //SELECTOR DE FAVORITO
    const [ selected, setSelected] = useState(false);

    const handleIconPress = (idAS, idU) => {
      if (selected===true){
          eliminarFav(idU, idAS);

          setSelected(false);
      }else{
          agregarFav(idU, idAS);
          setSelected(true);}
    };


    const checked = async()=>{
     // console.log("idAS check", idAS);
     // console.log("idU check", idU);
      let state = await checkFav(idU, idAS);
      //console.log("state", state)
      setSelected(state);
  }

   useEffect( ()=>{
      
      checked();
   },[selected]);



     useEffect( ()=>{
       
        console.log("count", count)
        
     },[ count]);




     useEffect( ()=>{
        console.log("count", count)
        
    notNumber();
     },[count]);
  

     //inicia funciones para contar
  const [ count, setCount ] = useState(1);
  console.log("count fuera: ", count)


const notNumber=()=>{
    if (count===NaN){
        setCount(1);
    }
}




const [ atributos, setAtributos] = useState();

const getAtributos = async()=>{

        
    const dataAtributo = new FormData();
    dataAtributo.append("idU", value);
    const url = `${BASE_URL}abdiel/favoritos/get_items`
    const options = {
      method:'POST',
      body: dataAtributo
    };
    const responseAtributo = await fetchPost(url, options);
    if (responseAtributo !== null){
        setAtributos(responseAtributo.data);
    }else{
        setAtributos([]);
    }
   
    //console.log("res", responseFav.data);
    setLoader(false);
    
}


    return(
        <NativeBaseProvider >
            <ScrollView bg={colors.blanco} flex={1}>
            {/**Titulo */}
            <Center my={1}>
                <Text bold fontSize={18}>{nombre}</Text>
            </Center>
            {/**IMAGEN */}
            <Center  h={32} w="90%" mx="5%" mb={2}>
                <Image source={{
                uri: `http://sdiqro.store/static/imgServicios/${image}`
                }} alt="Alternate Text" size="xl" />
            </Center>
            <AtributoSelector/>
            

                {/** color, talla y precio */}
            <Stack direction={"row"} justifyContent={"space-between"} mx={"5%"} my={2}  flex={1}>
                <VStack>
                    <Text>Atributos</Text>
                   
                </VStack>
                <VStack >
                    <Text>Precio menudeo: $300 </Text>
                    <Text>Precio medio mayoreo: $250 </Text>
                    <Text>Precio mayoreo: $200 </Text>
                </VStack>
                
                

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
                    <HStack ml={5} my={1} bg={colors.blanco} borderRadius={10} borderWidth={2} borderColor={colors.azul}>
                        <Center px={2}>
                            <Text bold>Cantidad: </Text>
                        </Center>
                        
                        <Center w={16}>
                        <TextInput
                        
                            value={count}
                            onChangeText={(text) => setCount(parseInt(text))}
                            keyboardType="numeric"
                        />
                        </Center>
                        
                       
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
                   <Pressable onPress={()=>handleIconPress(idAS, idU)} mr={10}>
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