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




    const [ atributos, setAtributos] = useState([]);
    const [myArray, setMyArray] = useState(Array(0).fill(null));


    const getAtributos = async()=>{

            
        const dataAtributo = new FormData();
        dataAtributo.append("idAS", idAS);
        const url = `${BASE_URL}abdiel/atributos/get_atributos`
        const options = {
        method:'POST',
        body: dataAtributo
        };
        const responseAtributo = await fetchPost(url, options);
        if (responseAtributo !== null){
          // console.log(responseAtributo.atributos);
            setAtributos(responseAtributo.atributos);
            console.log("atributos COUNT =====",atributos.length);
            //cuenta numero de atributos y hace un array con dicho numero , con valor null
          
            setMyArray(Array(atributos.length).fill(null))
           // console.log("atributoooos", atributos)
        }else{
            setAtributos([]);
        }
        
    }

    useEffect(() => {
        getAtributos();
    }, []);
        



    useEffect(() => {
      console.log("my array", myArray);
      //  console.log("my array lenght", myArray.length);
    }, [myArray])
    

    const AtributoSelector = (props) => { 
        const { idAtr, nombreAtr, index} =props;

   
            const [ detalles, setDetalles] = useState([]);
        

            const getOpciones = async(idAtr)=>{
                const dataOpciones = new FormData();
                dataOpciones.append("idAtr", idAtr);
                const url = `${BASE_URL}abdiel/atributos/get_detalle`
                const options = {
                  method:'POST',
                  body: dataOpciones
                };
                const responseOpciones = await fetchPost(url, options);
                if (responseOpciones !== null){
                  //  console.log("responseOpciones.atributos",responseOpciones.atributos);
                  setDetalles(responseOpciones.atributos)
                //  console.log("detalle", detalles);
                  
                    
                }else{
                    setDetalles([])
                }
               
                
            }

            useEffect(() => {
              getOpciones(idAtr);
            }, [idAtr]);
            const [ valor, setValor ] = useState(null);

            const atributoHandle = (atr)=>{
                 
                   
                    const newArray =  [...myArray];
                    newArray[index] = atr;
                    setMyArray(newArray);
                    setValor(atr)
                    
                 
                    //console.log("CategoriaAtriburto HANDLE", categoriaAtributo)
            }


            /**ACTUALIZA PRODUCTO SEGUN ATRIBUTOS */

            function tieneNull(arr) {
                for (let i = 0; i < arr.length; i++) {
                  if (arr[i] === null) {
                    return true;
                  }
                }
                return false;
              }
              if (tieneNull(myArray)) {
                console.log("El arreglo contiene elementos con valor null");
              } else {
                console.log("El arreglo no contiene elementos con valor null");
              }

    const actualizaProducto = async()=>{

            
        const dataAtributo = new FormData();
        for (let i = 0; i < arreglo.length; i++) {
            dataAtributo.append(i, myArray[i]);
          }
        const url = `${BASE_URL}abdiel/atributos/get_producto`
        const options = {
        method:'POST',
        body: dataAtributo
        };
        const responseAtributo = await fetchPost(url, options);
        if (responseAtributo !== null){
          // console.log(responseAtributo.atributos);
            setAtributos(responseAtributo.atributos);
            console.log("atributos COUNT =====",atributos.length);
            //cuenta numero de atributos y hace un array con dicho numero , con valor null
          
            setMyArray(Array(atributos.length).fill(null))
           // console.log("atributoooos", atributos)
        }else{
            setAtributos([]);
        }
        
    }

            

            

        return(
            <Center>
                <Box maxW="300">
                    <Select selectedValue={myArray[index]} minWidth="200" accessibilityLabel={String(idAtr)} placeholder={nombreAtr + ":" + idAtr} _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />
                    }} mt={1} onValueChange={ (itemValue) =>{
                        //setValor(itemValue)
                        atributoHandle(itemValue)
                    }
                      
                        
                       }>
                    { detalles.length>0 ?
                                    detalles.map( (detalle, index)=>{
                                        return(
                                            <Select.Item key={index}
                                            label={detalle.nombreDAtr} 
                                            value={detalle.idDAtr} />
                                        )
                                    } )
                    :  <Select.Item label="Revisa tu coneccion a internet" value={null} />}
                    

                    
                    
                    </Select>
                    
            </Box>
            <Text>{ "id atributo: " +myArray[index]}</Text>
        </Center>
        )
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
            {/** ATRIBUTOS SELECT */}
            

            { atributos.length>0 ?
                atributos.map( (atributo, index)=>{
                    return(
                        <AtributoSelector key={index} 
                        idAtr={atributo.idAtr}  nombreAtr={atributo.nombreAtr}
                        index={index}
                        />
                    )
                } )
             : <Text> TEST</Text>}
            

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