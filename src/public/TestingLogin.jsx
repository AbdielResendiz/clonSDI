import React, { useState, useEffect } from 'react';
import { NativeBaseProvider } from 'native-base';
import Loader from '../components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Welcome from './Welcome';
import CuentaMenu from '../private/CuentaMenu';


const TestingLogin = (props) => {
    const navegacion= (item) => {
        props.navigation.navigate(item);
      };
      const [ idU, setIdU ] = useState();
      const [ load, setLoad ] = useState(true);


      const getData = async () => {
       try {
         const value = await AsyncStorage.getItem('@id_user')
         if(value !== null) {
           console.log("idU async: ", value);
           setIdU(value);
          // navegacion("CuentaMenu")
           setLoad(false);
         }
       } catch(e) {
         console.log("error async home", e);
         //navegacion("Welcome")
         setLoad(false);
       }
       
     }

     useEffect(() => {
       getData();
     },[])
     
    


    return(
        <NativeBaseProvider>
        {
            load===true ? <Loader/> : null
        }

        {idU ===null ?
        <Welcome/> :
        <CuentaMenu/> 
         
    }
        </NativeBaseProvider>
        // <NativeBaseProvider>
        //     <Text bold fontSize={"lg"} mx={12} my={10}>Vista Para Testing de perfil y login, se removerá mas adelante</Text>
        //     {/* <Button m={5} onPress={()=>navegacion("Sign")}>LOGIN Aldair</Button> */}
        //     <Button m={5} size="lg" onPress={()=>navegacion("Welcome")}>REGISTRO E INICIO DE SESIÓN </Button>
        //     <Button m={5} size="lg" colorScheme="secondary" onPress={()=>navegacion("CuentaMenu")}>Perfil</Button>
        // </NativeBaseProvider>
    );
};

export default TestingLogin;