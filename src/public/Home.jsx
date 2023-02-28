import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, TouchableOpacity, View } from 'react-native';
import { NativeBaseProvider, Box, Text, Stack, Pressable, Center, ScrollView } from 'native-base';
import colors from '../colors';

import SwiperList from '../components/SwiperList';
import ProductoComponent from '../components/ProductoComponent';

export default function Home(props) {

  const navegacion= (item) => {
    props.navigation.navigate(item);
  };

  const detalleCategorias= (item) => {
    props.navigation.navigate("DetalleCategoria", {
      categoria: item,
    });
  };

  return (
    <NativeBaseProvider >
      <Box h={"100%"} bg={colors.grisbg}>
        <Box h={"20%"}>
        <SwiperList/>
        </Box>
        
        <Box ml={3}>
        <Text bold> Categorías</Text>
        </Box>
        <Center w={"95%"} ml={3}>
        <Stack direction={"row"}>
          <Pressable h={10} w={"40%"} bg={colors.blanco} shadow={6} borderRadius={10} m={3} onPress={()=>detalleCategorias("Impresos")}>
            <Center h={"100%"} w={"100%"}>
              <Text bold>Impresos</Text>
            </Center>
          </Pressable>

          <Pressable h={10} w={"40%"} bg={colors.blanco} shadow={6} borderRadius={10} m={3} onPress={()=>detalleCategorias("No impresos")}>
            <Center h={"100%"} w={"100%"}>
              <Text bold>No Impresos</Text>
            </Center>
          </Pressable>
      </Stack>

        </Center>
        <ScrollView>
      <Box>
        <Stack direction={"row"} justifyContent={"space-between"} mx={9} my={1}>
          <Text bold >Más vendidos impresos</Text>
          <Pressable>
            <Text color={"#ff0000"}> Ver más</Text>
          </Pressable>

        </Stack>

        <ScrollView horizontal={true}>
          <ProductoComponent/>
          <ProductoComponent/>
          <ProductoComponent/>
          <ProductoComponent/>
          <ProductoComponent/>
        </ScrollView>
      </Box>


      <Box my={3}>
        <Stack direction={"row"} justifyContent={"space-between"} mx={9} my={1}>
          <Text bold >Más vendidos impresos</Text>
          <Pressable>
            <Text color={"#ff0000"}> Ver más</Text>
          </Pressable>

        </Stack>

        <ScrollView horizontal={true}>
          <ProductoComponent/>
          <ProductoComponent/>
          <ProductoComponent/>
          <ProductoComponent/>
          <ProductoComponent/>
        </ScrollView>
      </Box>
      </ScrollView>
        
        
      </Box>
    </NativeBaseProvider>
  );
}
