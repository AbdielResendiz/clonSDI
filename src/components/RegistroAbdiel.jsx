import React, { useState,useEffect } from "react";
import {TouchableOpacity} from "react-native"
import {  Ionicons,MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons'; 
import { Icon, Text, Center,ScrollView, View, Input,FormControl, Checkbox, Box, Select, CheckIcon, HStack} from "native-base";
import colors from "../colors";
import { URL } from "./API/useFetch";
import fetchPost from "../helper/fetchPost";
const RegistroAbdiel = (props) => {

    const [sucursales, setSucursales] = useState([]);
    const getSucursales= ()=>{
        const sucursal = `http://sdiqro.store/api/SucursalesGet/getSucursalesQro`
        fetch(sucursal)
        .then(response => response.json())
        .then((resultado)=> {
            //console.log("resultado sucursal", resultado)
            setSucursales(resultado.Registro)
        })
        .catch((error) => {
             console.log("error",error)
        })
    }
    useEffect(() => {
        getSucursales();
               console.log(sucursales)
    },[]);
   
    //values 
    const [agree, setAgree]                           = useState(false);
    const [usuario, setUsuario]                       = useState('');
    const [apellido, setApellido]                     = useState('');
    const [celular, setCelular]                       = useState('');
    const [sucursal, setSucursal]                     = useState(null);
    const [correo, setCorreo]                         = useState('');
    const [password, setPassword]                     = useState('');
    const [passwordConfirmar, setPasswordConfirmar]   = useState('');
    const [confirmPass, setConfirmPass]   = useState(false);

    const validacion = () =>{
        switch (true) {
            case !agree:
                console.log("Acepta los terminos!!")
                break;

                case usuario.length<2:
                    console.log("checa tu nombre!!")
                break;

                case apellido.length<2:
                    console.log("checa tu apellido!!")
                break;
                case celular.length<10:
                    console.log("checa tu celular!!")
                    break;

                case (sucursal===null):
                    console.log("checa tu sucursal!!")
                break;

                case correo.length<5:
                    console.log("checa tu correo!!")
                
                break;

                case password.length<5:
                    console.log("checa tu correo!!")
                break;

                case password==passwordConfirmar:
                    console.log("checa tu correo repetido!!")
                break;
        
            default:
                console.log("checa tu ??? break!!")
                break;
        }
    }
    useEffect(() => {
     console.log("sucursal", sucursal)
    }, [sucursal])
    

    const registro = async()=>{
        var Form = new FormData();
                   Form.append("nombre",       usuario)
                   Form.append("apellidos",    apellido)
                   Form.append("telefono",     celular)
                   Form.append("sucursal",     sucursal)
                   Form.append("correo",       correo)
                   Form.append("contrasenia",  password)
        const url = `http://sdiqro.store/api/Registro/registro_usuario`
        const options = {
        method:'POST',
        body: Form
        };
        const responseRegistro = await fetchPost(url, options);
        if (responseRegistro.resultado == true){
         // console.log(responseAtributo);
         alert("Registro exitoso")
        }else{
            alert("Registro error")
        }
    }

    useEffect(() => {
     console.log("agree?", agree)
    }, [agree])
    

 return (
  
  <>
    <Box>
            <Center>
             {/*Nombre*/}
            <FormControl  w="75%" maxW="300px">
                <FormControl.Label>Nombre(s)</FormControl.Label>
                <Input
                    placeholder="Nombre(s)"
                    keyboardType='default'
                    onChangeText={(val) => {setUsuario(val)}}
                    autoCapitalize='none'
                    value={usuario}
                    InputLeftElement=
                        {<Icon as={Ionicons} name="person" size={5} color="#FE308E" m={3}/>} size={5} color="muted.400" />
            </FormControl>
             {/*Termina form nombre */}

             {/*Apellido */}
            <FormControl   w="75%" maxW="300px">
                <FormControl.Label>Apellido(s)</FormControl.Label>
                <Input 
                    placeholder="Apellido(s)"
                    keyboardType='default'
                    onChangeText={(val) => {setApellido(val)}}
                    autoCapitalize='none'
                    value={apellido}
                    InputLeftElement={<Icon as={Ionicons} name="person" size={5} color="#FE308E" m={3}/>} size={5} color="muted.400"/>

                
            </FormControl>
             {/*termina form apellido */}
             

            {/*CELULAR */}
            <FormControl  w="75%" maxW="300px">
                <FormControl.Label>Celular</FormControl.Label>

                <Input 
                    placeholder="Celular"
                    keyboardType='number-pad'
                    onChangeText={(val) => {setCelular(val)}}
                    autoCapitalize='none'
                    maxLength={10}
                    value={celular}
                    InputLeftElement={<Icon as={MaterialCommunityIcons} name="cellphone" size={5} color="#FE308E" m={3} mr={5}/>} size={5} color="muted.400" />
            </FormControl>
            {/*termina form celular */}


             {/*Sucursal */}
             <HStack>
                <FormControl.Label mt={3} mx={3}>Sucursal: </FormControl.Label>
                <Box maxW="300">
                    <Select selectedValue={sucursal} minWidth="200" accessibilityLabel="Escoge una sucursal" placeholder="Choose Service" _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />
                    }} mt={1} onValueChange={itemValue => setSucursal(itemValue)}>
                      {sucursales.map( (sucursal, index)=>{
                                        return(
                                            <Select.Item key={index}
                                            label={sucursal.nombreSuc} 
                                            value={sucursal.idSuc} />
                                        )
                                    } )}
                        
                    </Select>
                </Box>
            </HStack>
            {/*termina form sucursal*/}

            {/*Email */}
            <FormControl  w="75%" maxW="300px">
                <FormControl.Label>Email</FormControl.Label >
                <Input

                    placeholder="Correo"
                    keyboardType='email-address'
                    onChangeText={(val) => {setCorreo(val)}}
                    autoCapitalize='none'
                    value={correo} 
                    InputLeftElement={<Icon as={MaterialIcons} name="email" size={5} color="#FE308E" m={3}/>} size={5} color="muted.400" />
           
         
                
              
            </FormControl>
             {/*termina form Email*/}
            
            {/*Contaseña */}
            <FormControl w="75%" maxW="300px">
                <FormControl.Label>Contraseña</FormControl.Label>
                <Input 
                     placeholder="Contraseña"
                     keyboardType='default'
                     onChangeText={(val) => {setPassword(val)}}
                     autoCapitalize='none'
                     value={password} 


                    InputLeftElement={<Icon as={MaterialIcons} name="lock" size={5} color="#FE308E" m={3}/>} size={5} color="muted.400" />
            

            </FormControl>
            
            <FormControl w="75%" maxW="300px">
                <FormControl.Label>Confirmar contraseña</FormControl.Label>
                <Input
                    placeholder="Confirmar contraseña"
                    keyboardType='default'
                    onChangeText={(val) => {setPasswordConfirmar(val)}}
                    autoCapitalize='none'
                    value={passwordConfirmar}  
                    InputLeftElement={<Icon as={MaterialIcons} name="lock" size={5} color="#FE308E" m={3}/>} size={5} color="muted.400" /> 
            </FormControl>
            {/*termina form Contaseña*/}

            <FormControl  w="75%" maxW="300px">
                {confirmPass != true ? (  null):(<FormControl.ErrorMessage leftIcon={<MaterialIcons name="error-outline" size={24} color="red" />}>
                    Las contraseñas deben ser iguales
             </FormControl.ErrorMessage>)}  

            </FormControl>
            
            <View flexDirection={"row"}>   
                <Center>
                    <Checkbox
                    style={{ marginTop: 20}}
                    accessibilityLabel="Condiciones"
                    value={agree}
                    onChange={() => setAgree(!agree)}
                    color={agree ? "#FE308E" : colors.rosa}
                    />
                    <Text>
                            He leído y acepto los terminos y condiciones
                    </Text>
                </Center> 
             </View>


            <TouchableOpacity style={{paddingTop: 20}}  onPress={() => validacion()} >
            <Center bg={"#FE308E"} h={"41px"} w={"274px"} borderRadius={20} > 
                <Text color={"white"}>Registrate</Text></Center>
            </TouchableOpacity>

            </Center>
    </Box>
    </>
    
  )
}

export default RegistroAbdiel;