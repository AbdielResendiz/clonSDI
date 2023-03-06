import React, { useState,useEffect } from "react";
import { NativeBaseProvider, Text, Box, Center,Container, Heading, Image, View, Icon,Button, useSafeArea, Input,FormControl,} from "native-base";
import {StyleSheet, TouchableOpacity, onPress,SafeAreaView} from 'react-native';
import {  Ionicons,MaterialCommunityIcons,FontAwesome5,MaterialIcons} from '@expo/vector-icons'; 
import colors from "../../../src/colors"
import { FormRegistro } from "./Registro";

const Login= ()=> {


    
    const start = {vista: 0, status:true}  // registrano
    const login = {vista: 2, status:true}  // Login
    const [isLoad , setisLoad] = useState(true)
    const [isLoadV , setisLoadV] = useState({vista: 1, status:true}) 
    const [isShow, setShow]    = useState()


    useEffect(() => {
      
    }, [isShow]);


    useEffect(() => {
      if(JSON.stringify(isLoadV) == JSON.stringify(start)){  
         
         let vista = {vista: 0, status:true}
         setShow(vista)
      }
      else if(JSON.stringify(isLoadV) == JSON.stringify(login)){  
         let vista = {vista: 2, status:true}
         setShow(vista)
      }
      else{
       console.log("Default")
      }
    }, [isLoadV]);

    

    return (
        <View flex={3} bg="white">
         <Center flex={1}>
                <Box mt={4} bg="white">
                <Container>
                <Image source={{uri: `https://sdiqro.com/wp-content/uploads/2022/05/sdi-logo.png`}} 
                    alt="" w={300} h={200} resizeMode="contain" />
                </Container>
                </Box>
         </Center>
            <View flex={2} bg="white" pb={20}>
            {/*cargamos el select de Login o registro */}
            {isLoad == true ? (<Log/>):(<SelectBanner/>)}  
            { JSON.stringify(isShow) === JSON.stringify(start) ? (<FormularioRegistro/>):(null)}  
            { JSON.stringify(isShow) === JSON.stringify(login) ? (<FormularioLogin/>):(null)}  
            </View>
      </View>
  )



  function SelectBanner(){
    return(
<>
    { JSON.stringify(isShow) === JSON.stringify(start) ? 
    ( <View flexDirection={"row"} justifyContent={"space-evenly"}>
      <Box >
        <TouchableOpacity  Opacity onPress={() => setShow({vista: 0, status:true} )}>
              <Center bg="#white" h={"41px"} w={"80px"}  borderBottomColor={"#FE308E"} borderBottomWidth={"3px"}> 
                  <Text color={"#FE308E"}>Registro</Text></Center>
        </TouchableOpacity>
      </Box>
      <Box>
          <TouchableOpacity  Opacity onPress={() => setShow({vista: 2, status:true} )}>
                <Center bg="#white" h={"41px"} w={"80px"}  borderBottomColor={"#6C6C6C"} borderBottomWidth={"3px"}> 
                    <Text color={"#6C6C6C"}>Login</Text></Center>
          </TouchableOpacity>
      </Box>
    </View>) 
    :( <View flexDirection={"row"} justifyContent={"space-evenly"}>
      <Box >
        <TouchableOpacity  Opacity onPress={() => setShow({vista: 0, status:true} )}>
              <Center bg="#white" h={"41px"} w={"80px"}  borderBottomColor={"#6C6C6C"} borderBottomWidth={"3px"}> 
                  <Text color={"#6C6C6C"}>Registro</Text></Center>
        </TouchableOpacity>
      </Box>
      <Box>
          <TouchableOpacity  Opacity onPress={() => setShow({vista: 2, status:true} )}>
                <Center bg="#white" h={"41px"} w={"80px"}  borderBottomColor={"#FE308E"} borderBottomWidth={"3px"}> 
                    <Text color={ "#FE308E"}>Login</Text></Center>
          </TouchableOpacity>
      </Box>
    </View>)
    }
</>


);

  }



  function Log(){

    return(
    <View justifyContent={"space-evenly"}>
        <Center>
            <TouchableOpacity onPress={() => { setisLoad(false),setisLoadV({vista: 0, status:true})}}>
            <Center bg="#00BAEA" h={"41px"} w={"274px"} mt={20} borderRadius={20}> 
                <Text color={"white"}>Registrate</Text></Center>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => { setisLoad(false),setisLoadV({vista: 2, status:true})}} >
            <Center bg="white" h={"41px"} w={"274px"} mt={10} borderRadius={20} borderWidth={"1px"} borderColor={"#00BAEA"}> 
                <Text color={"#00BAEA"}>Iniciar sesión</Text></Center>
            </TouchableOpacity>
            
        </Center>
    </View>
    )
  }


  function FormularioRegistro(){

    return(
    <>
    { JSON.stringify(isShow) === JSON.stringify(start) ? 
      (
        <View mt={5}>
              <FormRegistro/>
        </View>
      )
      :
      (null)}  
    </>);
    }


  function FormularioLogin(){

    return(
    <>
      
      <View mt={5}>
            <Center>

              <FormControl isInvalid w="75%" maxW="300px" >
                  <FormControl.Label>Email</FormControl.Label >
                  <Input
                      placeholder="Email" 
                      InputLeftElement={<Icon as={MaterialIcons} name="email" size={5} color="#FE308E" m={3}/>} size={5} color="muted.400" />
              </FormControl>

              <FormControl isInvalid w="75%" maxW="300px">
                <FormControl.Label>Contraseña</FormControl.Label>
                <Input
                      placeholder="Contraseña"  
                      InputLeftElement={<Icon as={MaterialIcons} name="lock" size={5} color="#FE308E" m={3}/>} size={5} color="muted.400" />
            </FormControl>

            <TouchableOpacity onPress={() => {setisLoad(false),setisLoadV({vista: 2, status:true})}} >
            <Center bg="white" h={"41px"} w={"274px"} mt={10} borderRadius={20} borderWidth={"1px"} borderColor={"#00BAEA"}> 
                <Text color={"#00BAEA"}>Iniciar sesión</Text></Center>
            </TouchableOpacity>
            
            </Center>
      </View>
    </>);
    }
}
  export default Login;


