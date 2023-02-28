import 'react-native-gesture-handler';
import * as React from 'react';
import * as Font from 'expo-font';
import {NavigationContainer, useNavigationContainerRef} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Perfil from './src/private/Perfil';
import Home from './src/public/Home';
import {Image, NativeBaseProvider, Box, HStack, Center, Pressable, Icon, Text} from 'native-base';
import { View, TouchableOpacity, StyleSheet} from 'react-native';
import { FontAwesome,  AntDesign , MaterialCommunityIcons, Ionicons, Entypo} from '@expo/vector-icons'; 
import Pedidos from './src/private/Pedidos';

import baseColor from './src/private/api/baseColor';
import styles from './src/styles/styles';
import { useState, useEffect } from 'react';
import Carrito from './src/private/Carrito';
import Sign from './src/public/Sign';
import colors from './src/colors';
import Buscar from "./src/public/Buscar"
import Favoritos from './src/public/Favoritos';
import DetalleCategoria from "./src/public/DetalleCategoria"


const Stack = createStackNavigator();

export default function App() {
  const [selected, setSelected] = useState(0);
  const [showFooter, setShowFooter] = useState(true);



const navigationRef = useNavigationContainerRef();
//variable para cambiar COLOR
//const color = baseColor.color;
//const color = "#FF0000";

const [fontLoaded, setFontLoaded] = useState(false);
//CARGAR FUENTE, EDITAR SI QUIERE INSTALAR OTRA FUENTE
useEffect(() => {
  async function loadFont() {
    await Font.loadAsync({
      'CircularApp': require('./assets/fonts/Circular/Circular.ttf'),
    });
    setFontLoaded(true);
  }
  loadFont();
}, []);
if (!fontLoaded) {
  return null;
}


const IrInicio = () => {
  setSelected(0)
  navigationRef.navigate('Home');
};

const IrPedidos = () => {
  setSelected(1)
  navigationRef.navigate('Pedidos');
};
const IrCarrito = () => {
  setSelected(2)
  navigationRef.navigate('Carrito');
};


const IrCuenta = () => {
  setSelected(3)
  navigationRef.navigate('Sign');
};

const HeaderRightCustom = ()=>{
  return(
    <View style={{flexDirection: 'row'}}>
           <TouchableOpacity onPress={()=>navigationRef.navigate("Buscar")} style={{marginRight:20}}>
             <FontAwesome name="search" size={24} color={baseColor.colorFont2} />
           </TouchableOpacity>

           <TouchableOpacity onPress={()=>navigationRef.navigate("Favoritos")} style={{marginRight:12}}>
             <FontAwesome name="heart" size={24} color={baseColor.colorFont2} />
           </TouchableOpacity>
         </View>
  )
}

const HeaderLeftCustom = ()=>{
  return(
        <NativeBaseProvider>
             <Image source={{uri: `https://sdiqro.com/wp-content/uploads/2022/05/sdi-logo.png`}} 
             alt="Alternate Text" w={100} h={12} resizeMode="contain" />

             
           </NativeBaseProvider>
  )
}
  
  return (
    <NavigationContainer ref={navigationRef} >
      <Stack.Navigator >
        <Stack.Screen name="Home" component={Home} 
         options={{title: '',
         headerTintColor:colors.blanco,
         headerStyle: {
           backgroundColor: colors.azul,
         },
         headerShadowVisible: true,
         headerRight: () => (
           <HeaderRightCustom/>
         ),
         headerLeft: ()=>(
           <HeaderLeftCustom/>
         )
        
         
       }}/>
        <Stack.Screen name="Pedidos" component={Pedidos} />
        <Stack.Screen name="Carrito" component={Carrito} />
        <Stack.Screen name="Sign" component={Sign} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Buscar" component={Buscar} />
        <Stack.Screen name="Favoritos" component={Favoritos} />
        <Stack.Screen name="DetalleCategoria" component={DetalleCategoria} />
      </Stack.Navigator>

      {showFooter ? (
        <View style={{height:50, marginBottom:12}} >
           <NativeBaseProvider>
            <Box flex={1} safeAreaTop width="94%" mx={"3%"} alignSelf="center"  bg="#fafafa"  >
              
              <HStack bg={baseColor.bg}  alignItems="center" safeAreaBottom shadow={6} borderRadius={25} >
                <Pressable cursor="pointer"  py="3" flex={1} 
                  onPress={() => {IrInicio()}}>
                  <Center >
                      <Icon  as={<Ionicons name={selected === 0 ? 'home' : 'home-outline'} />} color={ selected === 0 ? colors.azul : baseColor.footerIcon} size="md" />
                      <Text   style={styles.texto} color={ selected === 0 ? colors.azul : baseColor.footerIcon} fontSize={12}>Inicio</Text>
                  </Center>
                </Pressable>
                <Pressable cursor="pointer"  py="2" flex={1} onPress={() => {IrPedidos()}}>
                  <Center>
                      <Icon  as={<Entypo name="back-in-time" />} color={ selected === 1 ? colors.azul : baseColor.footerIcon} size="md" />
                      <Text   style={styles.texto} color={ selected === 1 ? colors.azul : baseColor.footerIcon} fontSize={12}>Pedidos</Text>
                  </Center>
                </Pressable>
                
                <Pressable cursor="pointer"  py="2" flex={1} onPress={() => {IrCarrito()} }>
                  <Center>
                      <Icon  as={<AntDesign name="shoppingcart"  />} color={ selected === 2 ? colors.azul : baseColor.footerIcon} size="md" />
                      <Text  style={styles.texto} color={ selected === 2 ? colors.azul : baseColor.footerIcon} fontSize={12}>Carrito</Text>
                  </Center>
                </Pressable>
                <Pressable cursor="pointer"  py="2" flex={1} onPress={() => {IrCuenta()} }>
                  <Center>
                      <Icon  as={<MaterialCommunityIcons name={selected === 3 ? 'account' : 'account-outline'} />} 
                      color={ selected === 3 ? colors.azul : baseColor.footerIcon} size="md" />
                      <Text  style={styles.texto} color={ selected === 3 ? colors.azul : baseColor.footerIcon} fontSize={12}>Cuenta</Text>
                  </Center>
                </Pressable>
              </HStack>
            </Box>
        </NativeBaseProvider>
        </View>
      ) : null}
    </NavigationContainer>
  );
}
