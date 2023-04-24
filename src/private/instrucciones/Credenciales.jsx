import React from 'react';
import {  NativeBaseProvider, ScrollView, Text, View } from 'native-base';
import colors from '../../colors';
import InstruccionesComponente from './InstruccionesComponente';
import GuardarComponente from './GuardarComponente';
import NotaComponent from './NotaComponent';

const Credenciales = () => {
  return (
<NativeBaseProvider>
        <View style={{ flex: 1 }}>
        <Text fontSize={42} bold color={colors.azul} alignSelf={"flex-end"} mr={10}>  LONA </Text>
            <ScrollView>
                <InstruccionesComponente numero="01" 
                titulo=""
                parentesis="" 
                />           
                


                <Text color={colors.azul} bold fontSize={20} alignSelf={"flex-end"} mr={5}>¿Cómo guardar el archivo?</Text>
                <GuardarComponente text="" />
               

                <NotaComponent
                nota=""
                />

            </ScrollView>
            
           
        </View>
    </NativeBaseProvider>
  );
};

export default Credenciales;
