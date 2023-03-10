import React, { useState,useEffect } from "react";
import { View, Center, FormControl, Input, Pressable, Icon, Text } from "native-base";
import { MaterialIcons} from '@expo/vector-icons'; 

const LoginAbdiel = ()=>{
    const [loading , setLoading] = useState(false)
    const [correo, setCorreo] = useState('');
    const [inputCorreo, setInputCorreo]  = useState(true);
    const [formCorreo, setFormCorreo] = useState(false);
    const [inputPassword, setInputPassword] = useState(true);
    const [formPassword, setFormPassword] = useState(false);
    const [password, setPassword] = useState('');
    const validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const Validarform = ()  => {
        if(correo == '' || !correo.match(validRegex)){
                 
          setFormCorreo(true)
          setInputCorreo(true)
        }else{
          setFormCorreo(false)
          setInputCorreo(false)
        }
        if(!password == null || password == ''){
            setInputPassword(true)  
            setFormPassword(true)
            console.log("entro aqui true")
        }else{
            setFormPassword(false)
            setInputPassword(false)
            console.log("entro aqui false")
        }
  
        if((inputCorreo == false && inputPassword == false ))
        {
          setLoading(true)
  
            console.log("inputPassword", password)
            
  
         var Form = new FormData();
               Form.append("correo",       correo)
               Form.append("contrasenia",  password)
  
               function miFuncion() {
           
                  fetch("http://sdiqro.store/api/Login/inicio_sesion",
                  {method: 'POST',
                    body: Form
                  })
                  .then(response => response.json())
                  .then((resultado)=> {
                      console.log("resultado",resultado)
                      if(resultado.status == true){
  
                        setLoading(false)
                        alert("Sesion iniciada");
                            
                      }else{
                        setLoading(false)
                        alert("Claves incorrectas");
                      }
                  })
                  .catch((error) => {
                    setLoading(false)
                      console.log("Error login",error)
                  })
              }
              setTimeout(miFuncion, 4000);
        }
        else{
           
          setLoading(false)
          
  
        }
    
  
      }
  
      return(
      
        
        <View mt={5}>
              <Center>
  
             {/*Email */}
                  <FormControl isInvalid={inputCorreo} w="75%" maxW="300px">
                  <FormControl.Label>Email</FormControl.Label >
                  <Input
  
                      placeholder="Correo"
                      keyboardType='email-address'
                      onChangeText={(val) => {setCorreo(val)}}
                      autoCapitalize='none'
                      value={correo} 
                      InputLeftElement={<Icon as={MaterialIcons} name="email" size={5} color="#FE308E" m={3}/>} size={5} color="muted.400" />
             
                  {formCorreo != false ? (<FormControl.ErrorMessage leftIcon={<MaterialIcons name="error-outline" size={24} color="red" />}>
                      El campo correo es obligatorio 
                  </FormControl.ErrorMessage>):(null)}  
   
              </FormControl>
               {/*termina form Email*/}
  
                {/*Contaseña */}
              <FormControl isInvalid={inputPassword} w="75%" maxW="300px">
                  <FormControl.Label>Contraseña</FormControl.Label>
                  <Input 
                       placeholder="Contraseña"
                       keyboardType='default'
                       onChangeText={(val) => {setPassword(val)}}
                       autoCapitalize='none'
                       value={password} 
  
  
                      InputLeftElement={<Icon as={MaterialIcons} name="lock" size={5} color="#FE308E" m={3}/>} size={5} color="muted.400" />
                   {formPassword == true ? (  <FormControl.ErrorMessage leftIcon={<MaterialIcons name="error-outline" size={24} color="red" />}>
                      El campo contraseña es obligatorio
                   </FormControl.ErrorMessage>):(null)}  
  
              </FormControl>
                {/*termina form Contaseña*/}
  
              <Pressable onPress={() => {Validarform()}} >
              <Center bg="white" h={"41px"} w={"274px"} mt={10} borderRadius={20} borderWidth={"1px"} borderColor={"#00BAEA"}> 
                 {loading == true ? (  <Text Text color={"#00BAEA"}>Validando crendeciales...</Text>) :(  <Text Text color={"#00BAEA"}>Iniciar sesión</Text>)}</Center>
              </Pressable>
              
              </Center>
  
  
              {loading == true ? (<ProcesandoLoginL/>) :(null)}
        </View>
      
    )
} 
export default LoginAbdiel;