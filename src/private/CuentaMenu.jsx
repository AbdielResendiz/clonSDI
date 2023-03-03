import { StatusBar } from 'expo-status-bar';
import { Box, Divider, Icon, NativeBaseProvider, Pressable, Text, View } from 'native-base';

import colors from '../colors';
import { FontAwesome5, Ionicons, AntDesign } from '@expo/vector-icons'; 


const CuentaMenu=(props)=> {

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
      </View>
    </NativeBaseProvider>
  );
}
export default CuentaMenu;