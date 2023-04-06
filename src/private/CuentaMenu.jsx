import { Box, Divider, Icon, NativeBaseProvider, Pressable, Text, View } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import colors from '../colors';
import { FontAwesome5, Ionicons, Entypo } from '@expo/vector-icons'; 
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const CuentaMenu=(props)=> {
  const navigation =useNavigation();
    const navegacion= (item) => {
        props.navigation.navigate(item);
      };

      const PerfilButton = ( props)=>{
        const {as, name, text, nav } = props;
        return(
            <Pressable w="90%" mx="5%" flexDirection={"row"} my={3} onPress={()=>navegacion(nav)}>
                <Icon as={as} name={name} mx={2} mt={1} size="lg"  color="black"  />
                
                <Text bold color={colors.gris}  ml={2} fontSize="xl">{text}</Text>
                
            </Pressable>
            
        )



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
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
      });

      }catch(error){
        console.log(error);
      }
    }



  return (
    <NativeBaseProvider >
      <View bg={colors.blanco} flex={1}>
        <Box mt={6}/>
        <PerfilButton as={FontAwesome5} name="user-alt" text="Mi Perfil" nav="Perfil"/>
        <Divider h={0.5} bg={colors.gris} w="90%" mx="5%"/>

        <PerfilButton as={FontAwesome5} name="copy" text="Facturación" nav="Factura"/>
        <Divider h={0.5} bg={colors.gris} w="90%" mx="5%"/>

        <PerfilButton as={Ionicons} name="card" text="Mis tarjetas" nav="Tarjetas"/>
        <Divider h={0.5} bg={colors.gris} w="90%" mx="5%"/>

        <PerfilButton as={Ionicons} name="notifications-outline" text="Notificaciones" nav="Notificaciones"/>
        <Divider h={0.5} bg={colors.gris} w="90%" mx="5%"/>

        <PerfilButton as={FontAwesome5} name="question-circle" text="Preguntas frecuentes" nav="FAQ"/>
        <Divider h={0.5} bg={colors.gris} w="90%" mx="5%"/>

        <Pressable w="90%" mx="5%" flexDirection={"row"} my={3} onPress={()=> salirAviso()}>
                <Icon as={Entypo} name="log-out" mx={2} mt={1} size="lg"  color="black"  />
                
                <Text bold color={colors.gris}  ml={2} fontSize="xl">Cerrar Sesión</Text>
                
            </Pressable>
        <Divider h={0.5} bg={colors.gris} w="90%" mx="5%"/>
      </View>
    </NativeBaseProvider>
  );
}
export default CuentaMenu;