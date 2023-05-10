import 'react-native-gesture-handler';
import * as Notifications from 'expo-notifications';
//import * as React from 'react';
import messaging from '@react-native-firebase/messaging';
import * as Font from 'expo-font';

import {NavigationContainer, useNavigationContainerRef} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Perfil from './src/private/Perfil';
import Home from './src/public/Home';
import {Image, NativeBaseProvider, Box, HStack, Center, Pressable, Icon, Text} from 'native-base';
import { View, TouchableOpacity, Alert} from 'react-native';
import { FontAwesome,  AntDesign , MaterialCommunityIcons, Ionicons, Entypo} from '@expo/vector-icons'; 
import Pedidos from './src/private/Pedidos';

import baseColor from './src/private/api/baseColor';
import styles from './src/styles/styles';
import React, { useState, useEffect } from 'react';
import Carrito from './src/private/Carrito';
import Sign from './src/public/Sign';
import colors from './src/colors';
import Buscar from "./src/public/Buscar";
import Favoritos from './src/public/Favoritos';
import DetalleCategoria from "./src/public/DetalleCategoria";
import DetalleSubCategoria from './src/public/DetalleSubCategoria';
import ScrollSubCategorias from './src/components/ScrollSubCategorias';
import DetalleProducto from './src/public/DetalleProducto';
import TestingLogin from './src/public/TestingLogin';
import CuentaMenu from './src/private/CuentaMenu';
import Factura from './src/private/Factura';
import Tarjetas from './src/private/Tarjetas';
import FAQ from './src/private/FAQ';
import Notificaciones from './src/private/Notificaciones';
import DetalleTarjeta from './src/private/DetalleTarjeta';
import Recoleccion from './src/private/Recoleccion';
import SeleccionarTarjeta from './src/private/SeleccionarTarjeta';
import CheckOut from './src/private/CheckOut';
import ConfirmaPago from './src/private/ConfirmaPago';
import DetalleCompra from './src/private/DetalleCompra'
import ListaFactura from './src/private/ListaFactura';
import Welcome from './src/public/Welcome';
import Password from './src/private/Password';
import DetallePedido from './src/private/DetallePedido';
import PagoStripe from './src/private/PagoStripe';
import RecepcionPedidos from './src/private/RecepcionPedidos';

//instrucciones de impresion
import Lonas from './src/private/instrucciones/Lonas';
import Botones from './src/private/instrucciones/Botones';
import Canvas from './src/private/instrucciones/Canvas';
import Credenciales from './src/private/instrucciones/Credenciales';
import Dft from './src/private/instrucciones/Dft';
import Offset from './src/private/instrucciones/Offset';
import Stand from './src/private/instrucciones/Stand';
import Viniles from './src/private/instrucciones/Viniles';
import VinilCorte from './src/private/instrucciones/viniles/VinilCorte';
import VinilImpreso from './src/private/instrucciones/viniles/VinilImpreso';
import VinilRegistro from './src/private/instrucciones/viniles/VinilRegistro';
import VinilTextil from './src/private/instrucciones/viniles/VinilTextil';
//import messaging from '@react-native-firebase/messaging';
 import PasarelaStripe from './src/private/Stripe/PasarelaStripe';

import NotificacionesTesting from './src/private/NotificacionesTest';

const Stack = createStackNavigator();
//notificaciones
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});


export default function App(props) {


  //notificaciones
  // const requestUserPermission = async ()=>{
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //   if (enabled) {
  //     console.log('Authorization status:', authStatus);
  //   }
  // }

  // useEffect(() => {
  //   if(requestUserPermission() ){
  //     //return token fcm
  //     messaging().getToken().then(token=> {
  //       console.log("token fcm", token);
  //     })
  //   }else{
  //     console.log("ERROR FCM", authStatus);
  //   }

  //   // Check whether an initial notification is available
  //   messaging()
  //     .getInitialNotification()
  //     .then( async(remoteMessage) => {
  //       if (remoteMessage) {
  //         console.log(
  //           'Notification caused app to open from quit state:',
  //           remoteMessage.notification,
  //         );
  //       }
  //   });

  //     // Assume a message-notification contains a "type" property in the data payload of the screen to open
  //     messaging().onNotificationOpenedApp( async(remoteMessage) => {
  //       console.log(
  //         'Notification caused app to open from background state:',
  //         remoteMessage.notification,
  //       );
  //     });

  //     // Register background handler
  //     messaging().setBackgroundMessageHandler(async remoteMessage => {
  //       console.log('Message handled in the background!', remoteMessage);
  //     });

  //     const unsubscribe = messaging().onMessage(async remoteMessage => {
  //       Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //     });
  
  //     return unsubscribe;



  // }, []);
  



  //Fin notificaciones



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
    navigationRef.reset({
      index: 0,
      routes: [{ name: 'Home' }],
  });
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
    navigationRef.navigate('CuentaMenu');
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
             <Image source={require("./assets/iconT.png")}
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
        <Stack.Screen name="Pedidos" component={Pedidos}   
          options={{title: 'Pedidos',
          headerTintColor:colors.blanco,
          headerStyle: {
            backgroundColor: colors.azul,
          },
          headerShadowVisible: true,
          headerRight: () => (
            <HeaderRightCustom/>
          ),
        }}/>
        <Stack.Screen name="Carrito" component={Carrito}   
            options={{title: 'Carrito',
            headerTintColor:colors.blanco,
            headerStyle: {
              backgroundColor: colors.azul,
            },
            headerShadowVisible: true,
            headerRight: () => (
              <HeaderRightCustom/>
            ),
          }}/>
        <Stack.Screen name="Sign" component={Sign} />
        <Stack.Screen name="Perfil" component={Perfil}   
          options={{title: 'Mi Perfil',
          headerTintColor:colors.blanco,
          headerStyle: {
            backgroundColor: colors.azul,
          },
          headerShadowVisible: true,
          headerRight: () => (
            <HeaderRightCustom/>
          ),
        }} />
        <Stack.Screen name="CuentaMenu" component={CuentaMenu}   
          options={{title: 'Mi cuenta',
          headerTintColor:colors.blanco,
          headerStyle: {
            backgroundColor: colors.azul,
          },
          headerShadowVisible: true,
          headerRight: () => (
            <HeaderRightCustom/>
          ),
        }} />
        <Stack.Screen name="Factura" component={Factura}   
          options={{title: 'Facturación',
          headerTintColor:colors.blanco,
          headerStyle: {
            backgroundColor: colors.azul,
          },
          headerShadowVisible: true,
          headerRight: () => (
            <HeaderRightCustom/>
          ),
        }} />
        <Stack.Screen name="Tarjetas" component={Tarjetas}   
          options={{title: 'Tarjetas',
          headerTintColor:colors.blanco,
          headerStyle: {
            backgroundColor: colors.azul,
          },
          headerShadowVisible: true,
          headerRight: () => (
            <HeaderRightCustom/>
          ),
        }} />
        <Stack.Screen name="Notificaciones" component={Notificaciones}   
          options={{title: 'Notificaciones',
          headerTintColor:colors.blanco,
          headerStyle: {
            backgroundColor: colors.azul,
          },
          headerShadowVisible: true,
          headerRight: () => (
            <HeaderRightCustom/>
          ),
        }} />

          <Stack.Screen name="Welcome" component={Welcome}   
          options={{title: 'Bienvenido',
          headerTintColor:colors.blanco,
          headerStyle: {
            backgroundColor: colors.azul,
          },
          headerShadowVisible: true,
          headerRight: () => (
            <HeaderRightCustom/>
          ),
        }} />

          <Stack.Screen name="FAQ" component={FAQ}   
          options={{title: 'Preguntas frecuentes',
          headerTintColor:colors.blanco,
          headerStyle: {
            backgroundColor: colors.azul,
          },
          headerShadowVisible: true,
          headerRight: () => (
            <HeaderRightCustom/>
          ),
        }} />


        <Stack.Screen name="Buscar" component={Buscar} 
          options={{title: 'Buscar',
          headerTintColor:colors.blanco,
          headerStyle: {
            backgroundColor: colors.azul,
          },
          headerShadowVisible: true,
          headerRight: () => (
            <HeaderRightCustom/>
          ),
        }}
        />
        <Stack.Screen name="ScrollSubCategorias" component={ScrollSubCategorias} />
        <Stack.Screen name="Favoritos" component={Favoritos}   
        options={{title: 'Favoritos',
         headerTintColor:colors.blanco,
         headerStyle: {
           backgroundColor: colors.azul,
         },
         headerShadowVisible: true,
         headerLeft: () =>(null),
         headerRight: () => (
          <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={()=>navigationRef.navigate("Buscar")} style={{marginRight:20}}>
            <FontAwesome name="search" size={24} color={baseColor.colorFont2} />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>navigationRef.navigate("Favoritos")} style={{marginRight:12}}>
            <FontAwesome name="heart" size={24} color={colors.rosa} />
          </TouchableOpacity>
        </View>
         ),
        
       }} />
        <Stack.Screen name="DetalleProducto" component={DetalleProducto} 
          options={{title: 'Detalle del producto',
          headerTintColor:colors.blanco,
          headerStyle: {
            backgroundColor: colors.azul,
          },
          headerShadowVisible: true,
          headerRight: () => (
            <HeaderRightCustom/>
          ),
        }}/>
        <Stack.Screen name="DetalleCategoria" component={DetalleCategoria}  options={{title: '',
         headerTintColor:colors.blanco,
         headerStyle: {
           backgroundColor: colors.azul,
         },
         headerShadowVisible: true,
         headerRight: () => (
           <HeaderRightCustom/>
         ),
       }}/>
           <Stack.Screen name="DetalleSubCategoria" component={DetalleSubCategoria}  options={{title: '',
         headerTintColor:colors.blanco,
         headerStyle: {
           backgroundColor: colors.azul,
         },
         headerShadowVisible: true,
         headerRight: () => (
           <HeaderRightCustom/>
         ),
       }}/>
        <Stack.Screen name="DetalleTarjeta" component={DetalleTarjeta}  options={{title: 'Detalle de la tarjeta',
         headerTintColor:colors.blanco,
         headerStyle: {
           backgroundColor: colors.azul,
         },
         headerShadowVisible: true,
         headerRight: () => (
           <HeaderRightCustom/>
         ),
       }}/>

        <Stack.Screen name="Recoleccion" component={Recoleccion}  options={{title: 'Recolección',
         headerTintColor:colors.blanco,
         headerStyle: {
           backgroundColor: colors.azul,
         },
         headerShadowVisible: true,
         headerRight: () => (
           <HeaderRightCustom/>
         ),
        }}/>

        <Stack.Screen name="SeleccionarTarjeta" component={SeleccionarTarjeta}  options={{title: 'Pago',
         headerTintColor:colors.blanco,
         headerStyle: {
           backgroundColor: colors.azul,
         },
         headerShadowVisible: true,
         headerRight: () => (
           <HeaderRightCustom/>
         ),
        }}/>
         <Stack.Screen name="CheckOut" component={CheckOut}  options={{title: 'Check out',
         headerTintColor:colors.blanco,
         headerStyle: {
           backgroundColor: colors.azul,
         },
         headerShadowVisible: true,
         headerRight: () => (
           <HeaderRightCustom/>
         ),
        }}/>

        <Stack.Screen name="ConfirmaPago" component={ConfirmaPago}  options={{title: '',
         headerTintColor:colors.blanco,
         headerStyle: {
           backgroundColor: colors.azul,
         },
         headerShadowVisible: true,
         headerRight: () => (
           <HeaderRightCustom/>
         ),
        }}/>
         <Stack.Screen name="DetalleCompra" component={DetalleCompra}  options={{title: 'Detalle de pedido',
         headerTintColor:colors.blanco,
         headerStyle: {
           backgroundColor: colors.azul,
         },
         headerShadowVisible: true,
         headerRight: () => (
           <HeaderRightCustom/>
         ),
        }}/>

        <Stack.Screen name="DetallePedido" component={DetallePedido}  options={{title: 'Detalle de pedido',
         headerTintColor:colors.blanco,
         headerStyle: {
           backgroundColor: colors.azul,
         },
         headerShadowVisible: true,
         headerRight: () => (
           <HeaderRightCustom/>
         ),
        }}/>

        <Stack.Screen name="ListaFactura" component={ListaFactura}  options={{title: 'Facturación',
         headerTintColor:colors.blanco,
         headerStyle: {
           backgroundColor: colors.azul,
         },
         headerShadowVisible: true,
         headerRight: () => (
           <HeaderRightCustom/>
         ),
        }}/>
        <Stack.Screen name="Password" component={Password}  options={{title: 'Cambiar contraseña',
         headerTintColor:colors.blanco,
         headerStyle: {
           backgroundColor: colors.azul,
         },
         headerShadowVisible: true,
         headerRight: () => (
           <HeaderRightCustom/>
         ),
        }}/>

      <Stack.Screen name="PagoStripe" component={PagoStripe}  options={{title: 'Pago stripe',
         headerTintColor:colors.blanco,
         headerStyle: {
           backgroundColor: colors.azul,
         },
         headerShadowVisible: true,
         headerRight: () => (
           <HeaderRightCustom/>
         ),
        }}/>  

        <Stack.Screen name="RecepcionPedidos" component={RecepcionPedidos}  options={{title: 'Recepcion de pedidos',
         headerTintColor:colors.blanco,
         headerStyle: {
           backgroundColor: colors.azul,
         },
         headerShadowVisible: true,
         headerRight: () => (
           <HeaderRightCustom/>
         ),
        }}/>

        {/** INSTRUCCIONES IMPRESION */}

        <Stack.Screen name="Lonas" component={Lonas}  options={{title: 'Lonas',
         headerTintColor:colors.blanco,
         headerStyle: {
           backgroundColor: colors.azul,
         },
         headerShadowVisible: true,
         headerRight: () => (
           <HeaderRightCustom/>
         ),
        }}/>
         <Stack.Screen name="Botones" component={Botones}  options={{title: 'Botones',
         headerTintColor:colors.blanco,
         headerStyle: {
           backgroundColor: colors.azul,
         },
         headerShadowVisible: true,
         headerRight: () => (
           <HeaderRightCustom/>
         ),
        }}/>
         <Stack.Screen name="Canvas" component={Canvas}  options={{title: 'Canvas',
         headerTintColor:colors.blanco,
         headerStyle: {
           backgroundColor: colors.azul,
         },
         headerShadowVisible: true,
         headerRight: () => (
           <HeaderRightCustom/>
         ),
        }}/>
         <Stack.Screen name="Credenciales" component={Credenciales}  options={{title: 'Credenciales',
         headerTintColor:colors.blanco,
         headerStyle: {
           backgroundColor: colors.azul,
         },
         headerShadowVisible: true,
         headerRight: () => (
           <HeaderRightCustom/>
         ),
        }}/>
         <Stack.Screen name="Dft" component={Dft}  options={{title: 'DFT',
         headerTintColor:colors.blanco,
         headerStyle: {
           backgroundColor: colors.azul,
         },
         headerShadowVisible: true,
         headerRight: () => (
           <HeaderRightCustom/>
         ),
        }}/>
         <Stack.Screen name="Offset" component={Offset}  options={{title: 'OFFSET',
         headerTintColor:colors.blanco,
         headerStyle: {
           backgroundColor: colors.azul,
         },
         headerShadowVisible: true,
         headerRight: () => (
           <HeaderRightCustom/>
         ),
        }}/>
         <Stack.Screen name="Stand" component={Stand}  options={{title: 'Stand',
         headerTintColor:colors.blanco,
         headerStyle: {
           backgroundColor: colors.azul,
         },
         headerShadowVisible: true,
         headerRight: () => (
           <HeaderRightCustom/>
         ),
        }}/>
         <Stack.Screen name="Viniles" component={Viniles}  options={{title: 'Viniles',
         headerTintColor:colors.blanco,
         headerStyle: {
           backgroundColor: colors.azul,
         },
         headerShadowVisible: true,
         headerRight: () => (
           <HeaderRightCustom/>
         ),
        }}/>
         <Stack.Screen name="PasarelaStripe" component={PasarelaStripe}  options={{title: 'Paga con Stripe',
         headerTintColor:colors.blanco,
         headerStyle: {
           backgroundColor: colors.azul,
         },
         headerShadowVisible: true,
         headerRight: () => (
           <HeaderRightCustom/>
         ),
        }}/>

        <Stack.Screen name="VinilImpreso" component={VinilImpreso}  options={{title: 'Vinil impreso',
         headerTintColor:colors.blanco,
         headerStyle: {
           backgroundColor: colors.azul,
         },
         headerShadowVisible: true,
         headerRight: () => (
           <HeaderRightCustom/>
         ),
        }}/>
        <Stack.Screen name="VinilTextil" component={VinilTextil}  options={{title: 'Vinil textil impreso',
         headerTintColor:colors.blanco,
         headerStyle: {
           backgroundColor: colors.azul,
         },
         headerShadowVisible: true,
         headerRight: () => (
           <HeaderRightCustom/>
         ),
        }}/>
        <Stack.Screen name="VinilRegistro" component={VinilRegistro}  options={{title: 'Vinil corte a registro',
         headerTintColor:colors.blanco,
         headerStyle: {
           backgroundColor: colors.azul,
         },
         headerShadowVisible: true,
         headerRight: () => (
           <HeaderRightCustom/>
         ),
        }}/>
        <Stack.Screen name="VinilCorte" component={VinilCorte}  options={{title: 'Viniles corte textil',
         headerTintColor:colors.blanco,
         headerStyle: {
           backgroundColor: colors.azul,
         },
         headerShadowVisible: true,
         headerRight: () => (
           <HeaderRightCustom/>
         ),
        }}/>

       

        <Stack.Screen name="TestingLogin" component={TestingLogin} ></Stack.Screen>
      </Stack.Navigator>

      

      {showFooter ? (
        <View style={{height:55, marginBottom:12}} >
           <NativeBaseProvider>
            <Box flex={1} safeAreaY={2}  safeAreaX={5} width="100%"  alignSelf="center"  bg={colors.blanco}  >
              
              <HStack bg={colors.blanco}  alignItems="center" shadow={6} borderRadius={25} >
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
