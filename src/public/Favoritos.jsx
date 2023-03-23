import React, { useState, useEffect } from 'react';
import { NativeBaseProvider, ScrollView, Text, View } from "native-base";
import colors from '../colors';
import Favoritocomponent from '../components/FavoritoComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import URL from '../helper/URL';
import fetchPost from '../helper/fetchPost';
import Loader from '../components/Loader';
import FavoritoComponent2 from '../components/FavoritoComponen2';


const Favoritos = () => {
    const BASE_URL = URL.BASE_URL;
    const [loader, setLoader ]= useState(true);

    const [ favoritos, setFavoritos] = useState([]);
    const [ idU, setIdU ] = useState(null);

    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('@id_user')
          if(value !== null) {
            //console.log("idU async: ", value);
            setIdU(value);
            getFav(value);
          }
        } catch(e) {
          console.log("error async home", e);
        }
      }

      const getFav = async(value)=>{
        
        const dataFav = new FormData();
        dataFav.append("idU", value);
        const url = `${BASE_URL}abdiel/favoritos/get_items`
        const options = {
          method:'POST',
          body: dataFav
        };
        const responseFav = await fetchPost(url, options);
        if (responseFav !== null){
          setFavoritos(responseFav.data);
        }else{
          setFavoritos([]);
        }
       
        //console.log("res", responseFav.data);
        setLoader(false);
        
      }

      useEffect(() => {
        getData();
        
        //console.log("favoritos: " ,favoritos)
      }, [favoritos])



    return(
        <NativeBaseProvider>
          { loader===true ? <Loader/> :
            <View flex={1} bg={colors.blanco} >
            <Text bold fontSize={20} ml={5} mt={3}>Favoritos</Text>
           { favoritos.length > 0 ? 
            <ScrollView>    
            { favoritos.map( (impreso, index)=>{
            return(
              <Favoritocomponent
              key={index} nombre={impreso.nombreAgrupaS} id={impreso.idAS}
              precio = {impreso.precioS}
              image={impreso.image_url}
              idAS={impreso.idAS}
              impreso={true}
              idU={idU}/>
            ) 
          } )

          }
         
                

            </ScrollView>
            : <Text alignSelf={"center"} mt={10} fontSize={24}>No tienes favoritos por ahora</Text>}
            </View>
             }

        </NativeBaseProvider>
    );
};

export default Favoritos;