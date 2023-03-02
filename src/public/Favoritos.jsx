import React, { useState, useEffect } from 'react';
import { NativeBaseProvider, ScrollView, Text, View } from "native-base";
import colors from '../colors';
import Favoritocomponent from '../components/FavoritoComponent';


const Favoritos = () => {


    return(
        <NativeBaseProvider>
            <View flex={1} bg={colors.blanco} >
            <Text bold fontSize={20} ml={5} mt={3}>Favoritos</Text>
            <ScrollView>    
                <Favoritocomponent/>
                <Favoritocomponent/>
                <Favoritocomponent/>
                

            </ScrollView>
            </View>

        </NativeBaseProvider>
    );
};

export default Favoritos;