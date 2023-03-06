import React, { useState,useEffect } from "react";
import {TouchableOpacity} from "react-native"
import {  Ionicons,MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons'; 
import { Icon, Text, Center,ScrollView, View, Input,FormControl,} from "native-base";
import CheckBox from "expo-checkbox";
import RNPickerSelect from "react-native-picker-select";

const FormRegistro = () => {
    const [agree, setAgree] = useState(false);
    const [usuario, setUsuario] = useState('');
    const [apellido, setApellido] = useState('');
    const [celular, setCelular] = useState('');
   
    const ChangeTC = () => {
        if(agree == true){
            setAgree(false)
        }else{
            setAgree(true)
        }
    }

    const [formNombre,   setFormNombre]     = useState(false);
    const [formApellido, setFormApellido]   = useState(false);
    const [formCelular, setFormCelular]     = useState(false);

    const Validarform = () => {
        if(usuario == ''){
            setFormNombre(true)
        }else{
           
            setFormNombre(false)
        }

        if(apellido == ''){
            setFormApellido(true)
        }else{
        
            setFormApellido(false)
        }

        if(celular == ''){
            setFormCelular(true)
            
        }else{
        
            setFormCelular(false)
        }
    }

    const [inputNombre, setInputNombre] = useState(true);
    const [inputApellido, setInputApellido] = useState(true);
    const [inputTelefono, setInputTelefono] = useState(true);

      useEffect(() => {

        if(usuario.length <= 0){
            setInputNombre(true)
        }else{
            setInputNombre(false)
        }
        
        if(apellido.length <= 0){
            setInputApellido(true)
        }else{
            setInputApellido(false)
        }
       
        if(celular.length == 10 && celular.length <= 10 ){
            setInputTelefono(false)
        }else{
            setInputTelefono(true)
            
        }
        //true  es error
        //false es correcto
    }, [usuario,apellido,celular]);



 return (
  <>
    <ScrollView>
            <Center>

             {/*Nombre*/}
            <FormControl isInvalid={inputNombre} w="75%" maxW="300px">
                <FormControl.Label>Nombre(s)</FormControl.Label>
                <Input
                    placeholder="Nombre(s)"
                    keyboardType='default'
                    onChangeText={(val) => {setUsuario(val)}}
                    autoCapitalize='none'
                    value={usuario}
                    InputLeftElement={<Icon as={Ionicons} name="person" size={5} color="#FE308E" m={3}/>} size={5} color="muted.400" />
                {formNombre == true ? (  <FormControl.ErrorMessage leftIcon={<MaterialIcons name="error-outline" size={24} color="red" />}>
                    El campo nombre es obligatorio
                </FormControl.ErrorMessage>):(null)}
            </FormControl>
             {/*Termina form nombre */}
            

             {/*Apellido */}
            <FormControl isInvalid={inputApellido}  w="75%" maxW="300px">
                <FormControl.Label>Apellido(s)</FormControl.Label>
                <Input 
                    placeholder="Apellido(s)"
                    keyboardType='default'
                    onChangeText={(val) => {setApellido(val)}}
                    autoCapitalize='none'
                    value={apellido}
                    InputLeftElement={<Icon as={Ionicons} name="person" size={5} color="#FE308E" m={3}/>} size={5} color="muted.400"/>

                {formApellido == true ? (  <FormControl.ErrorMessage leftIcon={<MaterialIcons name="error-outline" size={24} color="red" />}>
                    El campo apellido es obligatorio
                </FormControl.ErrorMessage>):(null)}  
            </FormControl>
             {/*termina form apellido */}
             

            {/*CELULAR */}
            <FormControl isInvalid={inputTelefono} w="75%" maxW="300px">
                <FormControl.Label>Celular</FormControl.Label>

                <Input 
                    placeholder="Celular"
                    keyboardType='number-pad'
                    onChangeText={(val) => {setCelular(val)}}
                    autoCapitalize='none'
                    value={celular}
                    InputLeftElement={<Icon as={MaterialCommunityIcons} name="cellphone" size={5} color="#FE308E" m={3} mr={5}/>} size={5} color="muted.400" />

                {formCelular == true ? (  <FormControl.ErrorMessage leftIcon={<MaterialIcons name="error-outline" size={24} color="red" />}>
                    El campo celular es obligatorio
                </FormControl.ErrorMessage>):(null)}  
            </FormControl>
            {/*termina form celular */}


            {/*Sucural */}
            <FormControl isInvalid w="75%" maxW="300px" pt={1}>
                <FormControl.Label>Sucursal</FormControl.Label>
               <View borderWidth={1} borderColor={"#D2D2D2"} borderRadius={3}>
               
                <RNPickerSelect
                 onValueChange={(value) => console.log(value)}
                 placeholder={{ label: "Selecciona sucursal preferida", value: null }}
                 items={[
                     { label: "JavaScript", value: "JavaScript" },
                     { label: "TypeScript", value: "TypeScript" },
                     { label: "Python", value: "Python" },
                   
                  
                 ]}/>
             </View>
            </FormControl>
            {/*termina form sucursal*/}

            
            <FormControl isInvalid w="75%" maxW="300px">
                <FormControl.Label>Email</FormControl.Label >
                <Input InputLeftElement={<Icon as={MaterialIcons} name="email" size={5} color="#FE308E" m={3}/>} size={5} color="muted.400" />
            </FormControl>
            
            <FormControl isInvalid w="75%" maxW="300px">
                <FormControl.Label>Contraseña</FormControl.Label>
                <Input InputLeftElement={<Icon as={MaterialIcons} name="lock" size={5} color="#FE308E" m={3}/>} size={5} color="muted.400" />
            </FormControl>
            
            <FormControl isInvalid w="75%" maxW="300px">
                <FormControl.Label>Confirmar contraseña</FormControl.Label>
                <Input InputLeftElement={<Icon as={MaterialIcons} name="lock" size={5} color="#FE308E" m={3}/>} size={5} color="muted.400" />
            </FormControl>
             


             <View flexDirection={"row"}>   
                   <Center><CheckBox
                        style={{ marginTop: 20}}
                        value={agree}
                        onValueChange={() => ChangeTC()}
                        color={agree ? "#FE308E" : undefined}
                        />
                        <Text>
                       He leído y acepto los terminos y condiciones
                        </Text>
                        </Center> 
             </View>


            <TouchableOpacity style={{paddingTop: 20}} disabled={!agree}  onPress={() => Validarform()} >
            <Center bg={agree != true ? ("#6C6C6C"):("#FE308E")} h={"41px"} w={"274px"} borderRadius={20} > 
                <Text color={"white"}>Registrate</Text></Center>
            </TouchableOpacity>


            </Center>
    </ScrollView>
    </>
  )
}



export {FormRegistro};