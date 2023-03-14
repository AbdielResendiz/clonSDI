import { NativeBaseProvider, View, Text, Box, Stack, Icon, Input, FormControl, WarningOutlineIcon, ScrollView, Button} from "native-base";
import colors from "../colors";
import { useState, useEffect } from "react";
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons'; 
import Loader from "../components/Loader";
import AsyncStorage from '@react-native-async-storage/async-storage';
import fetchPost from "../helper/fetchPost";

export default function Perfil() {
  const [show, setShow] = useState(false);
  const [ loading, setLoading ] = useState(true);

  const [nombre, setNombre] = useState("hola");
  const handleNombre = (value) => {
    setNombre(value);
  };
  console.log("nombre", nombre)
  
  const [apellidos, setApellidos] = useState("");
  const handleApellidos = (value) => {
    setApellidos(value);
  };
  
  const [celular, setCelular] = useState("");
  const handleCelular = (value) => {
    setCelular(value);
  };
  const[correo, setCorreo] = useState("")
  

  //Conseguir el ID  de usuario almacenado en login Asyncstorage.
  const [ idUser, setIdUser ] = useState(null);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@id_user')
      if(value !== null) {
        console.log("valor id getData", value)
        setIdUser(value);
        setLoading(false);
      }
    } catch(e) {
      console.log("error", e);
    }
  }
  useEffect(() => {
    getData()
  }, []);
  // Fin ID USER

  //get datos
  const getDatos = async() => {
    const dataUser = new FormData();
    dataUser.append("idU",idUser)
    const url = `http://sdiqro.store/abdiel/Perfil/get_info`
    const options = {
      method:'POST',
      body: dataUser
    };
    const res = await fetchPost(url, options);
    console.log("res:", res)
    setApellidos(res.data.apellidos);
    setNombre(res.data.nombreU);
    setCorreo(res.data.correo);
    setCelular(res.data.telefono);
   // setSelected( res.data.sexo);
    //console.log("res", res.data.sexo);
    setLoading(false);
}

useEffect(() => {
    getDatos();
  }, []);



  



  return (
    <NativeBaseProvider>

      {loading === true ? <Loader/> : 
      <View flex={1} bg={colors.blanco}>
        <Text bold fontSize={"xl"} ml={5} my={3}>Mi perfil :{idUser}</Text>
        <ScrollView bg={colors.blanco} w="90%" mx="5%" mb={5}  shadow={6} borderRadius={10}>
        <Stack space={4} w="100%" alignItems="center">
          {/**NOMBRE */}
         
          <Input w={"90%"} mt={2} placeholder="Nombre" variant="underlined" 
          value={nombre} onChangeText={handleNombre} size="lg"
          InputLeftElement={<Icon as={<MaterialIcons name="person" />} 
          size={9} ml="2" mr={2} color={colors.azul} />}  />

          {/**Apellidos */}
          <Input w={"90%"} mt={2} placeholder="Apellidos" variant="underlined" 
          value={apellidos} onChangeText={handleApellidos} size="lg"
          InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={9} ml="2" mr={2} color={"warning.400"} />}  />

           {/**Celular */}
           <Input w={"90%"} mt={2} placeholder="Teléfono" variant="underlined"
           value={celular} onChangeText={handleCelular} size="lg" maxLength={10}
           keyboardType="numeric"
          InputLeftElement={<Icon as={<FontAwesome name="mobile-phone" />} size={9} ml={4}  color={colors.rosa} />}  />

          {/**FALTA LA SUCURSAL */}

          {/**EMAIL */}
          <Input w={"90%"} mt={2} placeholder="Correo electrónico" variant="underlined"
          value={correo} isreadOnly={true} size="lg"
          InputLeftElement={<Icon as={<Ionicons name="mail" />} size={8} ml={2} mr={3} color={colors.amarillo} />}  />

          <Button size="lg" colorScheme="secondary" > Guardar</Button>

          
          
    

        </Stack>

        </ScrollView>

      </View>
      } 
    </NativeBaseProvider>
    
  );
}