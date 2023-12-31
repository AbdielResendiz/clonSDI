
import { NativeBaseProvider, Box, Text, Stack, Pressable, Center, ScrollView } from 'native-base';
import colors from '../colors';
import fetchPost from '../helper/fetchPost';
import SwiperList from '../components/SwiperList';
import ProductoComponent from '../components/ProductoComponent';
import URL from '../helper/URL';
import { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home(props) {
  const BASE_URL =URL.BASE_URL;
  console.log(BASE_URL)

 const [ idU, setIdU ] = useState(null);


 const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@id_user')
    if(value !== null) {
      console.log("idU async: ", value);
      setIdU(value);
    }
  } catch(e) {
    console.log("error async home", e);
  }
}

  const navegacion= (item) => {
    props.navigation.navigate(item);
  }; 

const [loader, setLoader ]= useState(true);

  const detalleCategorias= (item, link, user) => {
    props.navigation.navigate("DetalleCategoria", {
      estado: item,
      url: link,
      user: user
    });
  };

  const [ impresos, setImpresos ] = useState([]);
  const getImpresos = async()=>{
    const url = `${BASE_URL}abdiel/Productos/ver_impresos10`
    const options = {
      method:'POST',
    };
    const res = await fetchPost(url, options);
    setImpresos(res.data);
    console.log("res", res.data);
    
  }
  useEffect(() => {
    getData();
    getImpresos();
    getNoImpresos();
    console.log("idU: ", idU)
  },[])

  const [ noImpresos, setNoImpresos ] = useState([]);
  const getNoImpresos = async()=>{
    const url = `${BASE_URL}abdiel/Productos/ver_noimpresos10`
    const options = {
      method:'POST',
    };
    const res = await fetchPost(url, options);
    setNoImpresos(res.data);
   //console.log("res", res.data);
    setLoader(false);
    
  }


  
 
  return (
    <NativeBaseProvider >
      {loader===true ? <Loader/> : 
      <Box h={"100%"} bg={colors.blanco}>
        <Box h={"20%"}>
        <SwiperList/>
        </Box>
        
        <Box ml={3}>
        <Text bold fontSize={'md'} my={2}> Categorías</Text>
        </Box>
        <Center w={"95%"} ml={3}>
        <Stack direction={"row"}>
          <Pressable h={10} w={"40%"} bg={colors.azul} shadow={6} 
          borderRadius={10} m={3} onPress={()=>detalleCategorias(true, "http://sdiqro.store/respaldo/abdiel/Productos/ver_impresos", idU)}>
            <Center h={"100%"} w={"100%"}>
              <Text bold color={"white"} letterSpacing={1} fontSize={'md'}>Hardware</Text>
            </Center>
          </Pressable>

          <Pressable h={10} w={"40%"} bg={colors.azul} shadow={6} 
          borderRadius={10} m={3} onPress={()=>detalleCategorias(false, "http://sdiqro.store/respaldo/abdiel/Productos/ver_noimpresos", idU)}>
            <Center h={"100%"} w={"100%"}>
              <Text bold color="white" letterSpacing={1} fontSize={'md'}>Software</Text>
            </Center>
          </Pressable>
      </Stack>

        </Center>  
        <ScrollView>
      <Box> 
        <Stack direction={"row"} justifyContent={"space-between"} mx={9} my={1}>
          <Text bold >Más vendidos impresos</Text>
          <Pressable onPress={()=>detalleCategorias(false, "http://sdiqro.store/respaldo/abdiel/Productos/ver_impresos", idU)}>
            <Text color={"#ff0000"}> Ver más</Text>
          </Pressable>

        </Stack>
        {impresos.length > 0 ? 

        <ScrollView horizontal={true}>
          { impresos.map( (impreso, index)=>{
            return(
              <ProductoComponent 
              key={index} nombre={impreso.nombreAgrupaS} id={impreso.idS}
              precio = {impreso.precioS}
              image={impreso.image_url}
              idAS={impreso.idAS}
              impreso={1}
              idU={idU}
              desS={impreso.desS}/>
            ) 
          } )

          }
        </ScrollView>
         : <Text alignSelf={"center"} my={8}>No hay productos por el momento</Text>}
      </Box>


      <Box my={3}>
        <Stack direction={"row"} justifyContent={"space-between"} mx={9} my={1}>
          <Text bold >Más vendidos no impresos</Text>
          <Pressable onPress={()=>detalleCategorias(false, "http://sdiqro.store/respaldo/abdiel/Productos/ver_noimpresos", idU)}>
            <Text color={"#ff0000"}> Ver más</Text>
          </Pressable>

        </Stack>

        {noImpresos.length > 0 ? 
        <ScrollView horizontal={true}>
        { noImpresos.map( (noImpreso, index)=>{
            return(
              <ProductoComponent 
              key={index} nombre={noImpreso.nombreAgrupaS} id={noImpreso.idS}
              precio = {noImpreso.precioS}
              image={noImpreso.image_url}
              impreso={0}
              idAS={noImpreso.idAS}
              idU={idU}
              desS={noImpreso.desS}/>
            ) 
          } )

          }
        
        </ScrollView>
        : <Text alignSelf={"center"} my={8}>No hay productos por el momento</Text>}
      </Box>
      </ScrollView>
        
        
      </Box>
      }
    </NativeBaseProvider>
  );
}
