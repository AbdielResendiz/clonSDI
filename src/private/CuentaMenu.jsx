import { Box, Divider, Icon, NativeBaseProvider, Pressable, Text, View, Stack } from 'native-base';

import colors from '../colors';
import { FontAwesome5, Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Loader';
import { useState, useEffect } from 'react';





const CuentaMenu=(props)=> {
  const navegacion= (item) => {
    props.navigation.navigate(item);
  }; 

  const [ load, setLoad ] = useState(true)
  const [ idU, setIdU ] = useState(null)

      const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('@id_user')
          if(value !== null) {
            //console.log("idU async: ", value);
            setIdU(value);
            setLoad(false)
          }else{
            registroAviso()
          }
        } catch(e) {
          console.log("error async home", e);
          registroAviso();
        }
      }

      useEffect(() => {
        getData();
       console.log("id user perfil", idU)
      
      }, [idU])
      

      const PerfilButton = ( props)=>{
        const {as, name, text, nav } = props;
        return(
            <Pressable w="90%" mx="5%" flexDirection={"row"} my={3} onPress={()=>navegacion(nav)}>
                <Icon as={as} name={name} mx={2} mt={1} size="lg"  color="black"  />
                
                <Text bold color={colors.gris}  ml={2} fontSize="xl">{text}</Text>
                
            </Pressable>
            
        )



      }
      const registroAviso = () =>{
        Alert.alert(
          'Debes estar registrado e iniciar sesión para ver tu perfil',
          "",
          
          [
            {
              text: 'Iniciar sesion / Registrarse',
          onPress: () => {props.navigation.navigate('Welcome')},
            },
  
            { text: 'Volver',  onPress: () => {props.navigation.navigate("Home")}  },
          ],
          { cancelable: false },
        );
      }


    const salirAviso = () =>{
      Alert.alert(
        '¿Seguro que deseas cerrar sesión?',
        "",
        
        [
          {
            text: 'Volver',
        onPress: () => console.log('Cancel Pressed'),
          },

          { text: 'Salir',  onPress: () => {logOut()
        }  },
        ],
        { cancelable: false },
      );
    }
    
    const logOut = async() =>{
      
      try{
        await AsyncStorage.clear();
        props.navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
      });

      }catch(error){
        console.log(error);
      }
    }



  return (
    <NativeBaseProvider >
      

        {
          idU === null ? <Loader/> :

          <View bg={colors.blanco} flex={1}  >
            <Stack shadow={6} m={8} borderRadius={10} bg={colors.blanco} space={1} mt={10} p={3} borderColor={"#dddddd"} borderWidth={2}>
            
           <PerfilButton as={FontAwesome5} name="user-alt" text="Mi Perfil" nav="Perfil"/>
           <Divider h={0.5} bg={colors.gris} w="90%" mx="5%"/>

            {/* <PerfilButton as={FontAwesome5} name="copy" text="Facturación" nav="Factura"/>
            <Divider h={0.5} bg={colors.gris} w="90%" mx="5%"/> */}

            {/* <PerfilButton as={Ionicons} name="card" text="Mis tarjetas" nav="Tarjetas"/>
            <Divider h={0.5} bg={colors.gris} w="90%" mx="5%"/> */}

            {/* <PerfilButton as={Ionicons} name="notifications-outline" text="Mis compras" nav="Notificaciones"/>
            <Divider h={0.5} bg={colors.gris} w="90%" mx="5%"/> */}

            <PerfilButton as={FontAwesome5} name="question-circle" text="Preguntas frecuentes" nav="FAQ"/>
            <Divider h={0.5} bg={colors.gris} w="90%" mx="5%"/>

            <PerfilButton as={MaterialCommunityIcons} name="printer-check" text="Tutorial para recepción de pedidos" nav="RecepcionPedidos"/>
            <Divider h={0.5} bg={colors.gris} w="90%" mx="5%"/>

            <Pressable w="90%" mx="5%" flexDirection={"row"} my={3} onPress={()=> salirAviso()}>
                    <Icon as={Entypo} name="log-out" mx={2} mt={1} size="lg"  color="black"  />
                    
                    <Text bold color={colors.gris}  ml={2} fontSize="xl">Cerrar Sesión</Text>
                    
                </Pressable>
          
            </Stack>
          </View>

        }
        
    </NativeBaseProvider>
  );
}
export default CuentaMenu;