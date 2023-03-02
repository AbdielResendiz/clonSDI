import { NativeBaseProvider, View, Text, Box, Stack, Icon, Input, Pressable } from "native-base";
import colors from "../colors";
import { useState } from "react";
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons'; 

export default function Perfil() {
  const [show, setShow] = useState(false);


  const [nombre, setNombre] = useState(false);
  const handleNombre = (value) => {
    setNombre(value);
  };
  
  const [apellidos, setApellidos] = useState(false);
  const handleApellidos = (value) => {
    setApellidos(value);
  };
  
  const [celular, setCelular] = useState(false);
  const handleCelular = (value) => {
    setCelular(value);
  };
  
  const [sucursal, setSucursal] = useState(false);
  const handleSucursal = (value) => {
    setSucursal(value);
  };
  
  const [pass, setPass] = useState(false);
  const handlePass = (value) => {
    setPass(value);
  };
  
  const [confirmPass, setConfirmPass] = useState(false);
  const handleConfirmPass = (value) => {
    setConfirmPass(value);
  };
  
  const Email = "cabdiel@gmail.com";
  



  return (
    <NativeBaseProvider>
      <View flex={1} bg={colors.blanco}>
        <Text bold fontSize={"xl"} ml={5} my={3}>Mi perfil</Text>
        <Box bg={colors.blanco} w="90%" mx="5%" h={"470px"} shadow={6}>
        <Stack space={4} w="100%" alignItems="center">
          {/**NOMBRE */}
          <Input w={"90%"} mt={2} placeholder="Nombre" variant="underlined"
          InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={9} ml="2" mr={2} color={colors.azul} />}  />

          {/**Apellidos */}
          <Input w={"90%"} mt={2} placeholder="Apellidos" variant="underlined"
          InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={9} ml="2" mr={2} color={"warning.400"} />}  />

           {/**Celular */}
           <Input w={"90%"} mt={2} placeholder="Teléfono" variant="underlined"
          InputLeftElement={<Icon as={<FontAwesome name="mobile-phone" />} size={9} ml={4}  color={colors.rosa} />}  />

          {/**FALTA LA SUCURSAL */}

          {/**EMAIL */}
          <Input w={"90%"} mt={2} placeholder="Correo electrónico" variant="underlined" 
          InputLeftElement={<Icon as={<Ionicons name="mail" />} size={8} ml={2} mr={3} color={colors.amarillo} />}  />
          
            {/** PASSWORD */}
          <Input w={"90%"} type={show ? "text" : "password"} variant="underlined"
          InputRightElement={<Pressable onPress={() => setShow(!show)}>
            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
            </Pressable>} placeholder="Contraseña" />

              {/** PASSWORD 2 */}
          <Input w={"90%"} type={show ? "text" : "password"}  variant="underlined"
          InputRightElement={<Pressable onPress={() => setShow(!show)}>
            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
            </Pressable>} placeholder="Confirma contraseña" />

        </Stack>

        </Box>

      </View>
    </NativeBaseProvider>
    
  );
}