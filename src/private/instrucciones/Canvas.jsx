import React from 'react';
import { Divider, NativeBaseProvider, Stack, Text, View } from 'native-base';
import colors from '../../colors';
import InstruccionesComponente from './InstruccionesComponente';
import GuardarComponente from './GuardarComponente';
import NotaComponent from './NotaComponent';
import { AntDesign } from '@expo/vector-icons'; 

const Canvas = () => {
  return (
    <NativeBaseProvider>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text fontSize={42} bold color={colors.azul}>  LONA </Text>
            <InstruccionesComponente numero="01" 
            titulo="Archivo en JPG o PDF"
            parentesis="Cualquier otro formato podría causar modificaciones y sería bajo responsabilidad del cliete el dejarlo" 
            />           
            <Divider/>
            <InstruccionesComponente numero="" 
            titulo=""
            parentesis="" 
            />
            <Text color={colors.azul} bold fontSize={20} alignSelf={"flex-end"} mr={5}>¿Cómo guardar el archivo?</Text>
            <GuardarComponente as={AntDesign} name="caretright" text="Siempre guardar al tamaño final de impresión"
             />
             <NotaComponent
             nota="El ancho del material es de 320cm, si la lona rebasa los 315cm en X y Y, se debe partir en las partes que sean necesarias."
             />
        </View>
    </NativeBaseProvider>
  );
};

export default Canvas;
