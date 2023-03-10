import React, { useState, useEffect } from 'react';
import { Button, NativeBaseProvider, Text } from "native-base";


const TestingLogin = (props) => {
    const navegacion= (item) => {
        props.navigation.navigate(item);
      };

    return(
        <NativeBaseProvider>
            <Text bold fontSize={"lg"} mx={12} my={10}>Vista Para Testing de perfil y login, se removerá mas adelante</Text>
            <Button m={5} onPress={()=>navegacion("Welcome")}>LOGIN</Button>
            <Button m={5} onPress={()=>navegacion("CuentaMenu")}>Perfil</Button>
        </NativeBaseProvider>
    );
};

export default TestingLogin;