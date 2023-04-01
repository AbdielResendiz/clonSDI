import React, { useState, useEffect } from 'react';
import { Center, NativeBaseProvider, Text, Stack, Pressable, Divider, Box, Image, HStack,  Icon, ScrollView, VStack, Select, CheckIcon} from "native-base";
import colors from '../colors';
import {  AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { TextInput } from 'react-native';
import checkFav from '../helper/checkFav';
import agregarFav from '../helper/agregarFav';
import eliminarFav from '../helper/eliminarFav';

import URL from '../helper/URL';
import fetchPost from '../helper/fetchPost';

const DetalleProducto   = (props) => {
    const BASE_URL = URL.BASE_URL;
    const id = props.route.params.id;
    const desS = props.route.params.desS;
    const impreso = props.route.params.impreso;
    const image = props.route.params.image;
    const idAS = props.route.params.idAS;
    const nombre = props.route.params.nombre;
    const idU = props.route.params.idU;
    console.log("idAgrupacion", idAS);

    
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
      let state = await checkFav(idU, idAS);
      setSelected(state);
  }

   useEffect( ()=>{
      checked();
   },[selected]);


    useEffect( ()=>{
        console.log("count", count)
        notNumber();
    },[count]);

    //inicia funciones para contar
    const [ count, setCount ] = useState(1);
   // console.log("count fuera: ", count)

    const notNumber=()=>{
        if (count===NaN){
            setCount(1);
        }
    }

    const [atributos, setAtributos] = useState([]);

    const getAtributos = async()=>{

            
        const dataAtributo = new FormData();
        dataAtributo.append("idAS", idAS);
        const url = `${BASE_URL}abdiel/atributos/get_producto_atributos`
        const options = {
        method:'POST',
        body: dataAtributo
        };
        const responseAtributo = await fetchPost(url, options);
        if (responseAtributo !== null){
          console.log(responseAtributo);
            setAtributos(responseAtributo);
        }else{
            setAtributos([]);
        }
        
    }

    useEffect(() => {
        getAtributos();
        console.log("atributos", atributos)
    }, []);
        




   const [producto, setProducto ] = useState(null);
   const [ productoSelect, setProductoSelect] = useState(null);
   const [inventario, setInventario ] = useState(null);


   const getDetalleProducto = async(itemValue)=>{
        const dataAtributo = new FormData();
        dataAtributo.append("idS", itemValue);
        const url = `${BASE_URL}abdiel/atributos/get_producto_detalle`
        const options = {
        method:'POST',
        body: dataAtributo
        };
        const responseAtributo = await fetchPost(url, options);
        if (responseAtributo !== null){
            console.log("GET DETALLE PRODUCTO : ", responseAtributo.producto[0]);
            setProducto(responseAtributo.producto[0]);
            console.log("GET INVENTARIO : ", responseAtributo.inventario);
            setInventario(responseAtributo.inventario)
        }else{
            setProducto([]);
        }
        
    }


    useEffect(() => {
        console.log("producto selecccionado", productoSelect)
    }, [productoSelect]);

    const AtributoSelector = (props) => { 
        
        return(
            <Center>
                <Box maxW="300">
                    <Select selectedValue={productoSelect} minWidth="200" accessibilityLabel={productoSelect} placeholder={productoSelect} _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />
                    }} mt={1} onValueChange={ (itemValue) => {{setProductoSelect(itemValue); getDetalleProducto(itemValue); }}
                      
                        
                       }>
                    { atributos.length>0 ?
                                    atributos.map( (atributo, index)=>{
                                        return(
                                            <Select.Item key={index}
                                            label={atributo.atributos} 
                                            value={atributo.idS} />
                                        )
                                    } )
                    :  <Select.Item label="Revisa tu coneccion a internet" value={null} />}
                    

                    
                    
                    </Select>
                    
            </Box>
            {/* <Text>{ "id atributo: " +productoSelect}</Text> */}
        </Center>
        )
    }

    /*INVENTARIO SWITCH*/ 
    const InventarioRender = ()=>{
        switch (true) {
            case inventario === null:
              return (
                <Text>Selecciona una opcion para ver el inventario</Text>
              )
            case Array.isArray(inventario) && inventario.length > 0:
                return (
                    
                        inventario.map( (sucursal, index)=>{
                            return(
                                <Stack direction={"row"} justifyContent="space-between" key={index}>
                                    <Text>{sucursal.nombreSuc}</Text>
                                    <Text>{sucursal.inventario}</Text>
                                </Stack>
                            )
                        } )
        
                  )
            case Array.isArray(inventario) && inventario.length === 0:
                return (
                    <Text>Por el momento no contamos con el producto</Text>
                  )
            default:
                return (
                    <Text>Error, intentalo nuevamente</Text>
                  )
          }
        
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
                uri: `http://sdiqro.store/static/imgServicios/${ producto!== null ? producto.image_url : image}`
                }} alt="Alternate Text" size="xl" />
            </Center>
            {/** ATRIBUTOS SELECT */}
            

                        <AtributoSelector 
                        />
               
            

                {/** color, talla y precio */}
          {producto !== null ? 
          (
            <VStack px={8} py={3}>
                    <Text>Precio menudeo: {producto !==null ? ("$" + producto.precioS) : ""} </Text>
                    <Text>Precio medio mayoreo: {producto !==null ? ("$" + producto.precioMedioMayoreo) : ""} </Text>
                    <Text>Precio mayoreo: {producto !==null ? ("$" + producto.precioMayoreo) : ""} </Text>
                </VStack>
          )  :
            <Text textAlign={"center"} my={3}>Selecciona tipo de producto para ver su precio </Text> 
            }
                
                
                


            <Divider w="90%" mx="5%" bg={colors.azul} h={0.5}/>
            {/** STOCK */}
            <Text bold ml={5} mt={1}> Stock:</Text>
            <Stack direction={"column"}  flex={1} mx="5%" mt={1} p={2} px={4} bg={colors.grisclaro} borderRadius={10} mb={2}> 
                
                <InventarioRender />
                {/* { inventario.length>0 ?
                                    inventario.map( (sucursal, index)=>{
                                        return(
                                            <Stack direction={"row"} justifyContent="space-between" key={index}>
                                                <Text>{sucursal.nombreSuc}</Text>
                                                <Text>{sucursal.inventario}</Text>
                                            </Stack>
                                        )
                                    } )
                    :  <Text>Selecciona tipo de producto para ver su inventario </Text>} */}

            </Stack>
            <Divider w="90%" mx="5%" bg={colors.azul} h={0.5}/>
            {/** DESCRIPCION */}
            <Box mx={"5%"} mt={2} mb={4} flex={1}>
                <Text bold>Descripción</Text>
                <Text mx={2}>{ producto !== null ? producto.desS :  desS}</Text>
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