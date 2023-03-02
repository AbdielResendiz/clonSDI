import React, { useState, useEffect } from 'react';
import { NativeBaseProvider, Text, View, Center} from "native-base";

import Login from "../components/Sign/Login"



const Sign = () => {

    const [logi, setLogin] = useState(true);
    const [registro, setRegistro] = useState(true);

    
    return(
        <>
        <NativeBaseProvider>
                <Login/>
        </NativeBaseProvider>
        </>
    );
};

export default Sign;