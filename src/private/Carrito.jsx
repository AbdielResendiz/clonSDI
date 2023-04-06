import React, { useState, useEffect } from 'react';
import { NativeBaseProvider, ScrollView, Text, View , Box, Center, HStack, Icon, Divider} from "native-base";
import colors from '../colors';
import CarritoComponent from '../components/CarritoComponent';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import URL from '../helper/URL';
import fetchPost from '../helper/fetchPost';
import Loader from '../components/Loader';


const Carrito = (props) => {
    const BASE_URL = URL.BASE_URL;
    const navegacion= (item) => {
        props.navigation.navigate(item);
      }; 
      
      const[ idCarrito, setIdCarrito ] = useState(null);
      const [ carrito, setCarrito ] = useState([]);
      const [ total, setTotal ] = useState(null);
      

     
      const getCarrito = async(value)=>{
        
        const dataFav = new FormData();
        dataFav.append("idC", value);
        const url = `${BASE_URL}abdiel/carrito/contenido_carrito`
        const options = {
          method:'POST',
          body: dataFav
        };
        const responseFav = await fetchPost(url, options);
        if (responseFav !== null){
          setCarrito(responseFav.data);
          //console.log("TOTAL", responseFav.total)
          setTotal(responseFav.total)
        }else{
          setCarrito([]);
        }
       
        //console.log("res", responseFav.data);
        //setLoader(false);
        
      }
      const getData = async () => {
        try {
        const value = await AsyncStorage.getItem('@id_carrito')
        if(value !== null) {
            setIdCarrito(value);
            getCarrito(value);
        }
        } catch(e) {
        console.log("error id carrito", e)
        }
    }

    const getTotal = () => {

    }

    useEffect(() => {
        getData();
      //console.log("id carrito: ", idCarrito)
      
    }, [carrito]) 
    
  
    

    return(
        <NativeBaseProvider>
            <View flex={1} bg={colors.blanco} >
            <Text bold fontSize={20} ml={5} mt={3}>Carrito</Text>
            <Box minH={48} maxH={96}>
            { carrito.length > 0 ? 
                    <ScrollView  >    
                        { carrito.map( (producto, index)=>{
                        return(
                        <CarritoComponent
                        key={index} 
                        nombre={producto.nombreS} 
                        id={producto.id}
                        idS={producto.idS}
                        precio = {producto.PrecioCarrito}
                        cantidad = {producto.cantidad}
                        image={producto.image_url}
                        sucursal={producto.nombreSuc}
                        impreso={producto.impreso}
                        idU={producto.idSuc}
                        subtotal={producto.subtotalCarrito}/>
                        ) 
                      } )

                      }
                    </ScrollView>
                    : <Text alignSelf={"center"} mt={10} fontSize={24}>No tienes favoritos por ahora</Text>
            }
            </Box>
            <Divider bg={colors.azul} borderRadius={100} h={1} w="80%" alignSelf={"center"} my={1}/>
            <Box h="70" w="85%"  mx={7} alignItems={"flex-end"} >  
               
                <Text fontSize={22} bold>
                  { total!==null ? `Total: $${total}` : ""}
                   
                   </Text>
            </Box>

            <Pressable alignItems="center" onPress={()=>navegacion("Recoleccion")}>
                <Center h="35" my={1} w="50%" bg={colors.azul} borderRadius={20} mx={7} >  
                    <HStack>
                        <Icon as={Ionicons} name="wallet"  size={6} color={"white"} />
                        <Text fontSize={16} color={"white"} bold  mx={3}>Pagar</Text>
                    </HStack>
                </Center>
            </Pressable>

            </View>

        </NativeBaseProvider>
    );
};

export default Carrito;