import React, { useState, useEffect } from 'react';
import { NativeBaseProvider, ScrollView, Text, View, Pressable , Icon} from "native-base";
import colors from '../colors';
import { FontAwesome } from '@expo/vector-icons'; 
import PedidoComponent from '../components/PedidoComponent';
import URL from '../helper/URL';
import fetchPost from '../helper/fetchPost';
import Loader from "../components/Loader";
const Pedidos = (props) => {
// status de pedido
// 0.Por recoger
// 1. entregado
// 2. cancelado
    const [ load, setLoad] = useState(true);
    const [ status, setStatus ] = useState(0);
    const BASE_URL = URL.BASE_URL;
    const [ pedidos, setPedidos ] = useState([])
    const getPedidos = async()=>{
        const dataPedido= new FormData();
        dataPedido.append("idU", 57);
        const url = `${BASE_URL}abdiel/pedidos/ver_pedidos`
        const options = {
          method:'POST',
          body: dataPedido
        };
        const res = await fetchPost(url, options);
        if (res !== null){
          // console.log("pedidos GET: ", res)
           setPedidos(res)
           setLoad(false);
          }else{
            null
          }
        //console.log("res", res.data);
        
      }

      useEffect(() => {
       
        getPedidos()
        console.log("pedidos:", pedidos)
      }, [])
      

    

    return(
        <NativeBaseProvider>
            <View flex={1} bg={colors.blanco}>
                {/* <Text m={2}  bold fontSize={"xl"}>Mis Pedidos</Text> */}
                { load ? <Loader/> : 
                  <ScrollView  >
                      {pedidos.map( (pedido, index)=>{
                            return(
                              <PedidoComponent
                              key={index}
                              fecha={pedido.FechaVentaG}
                              sucursal={pedido.nombreSuc}
                              total={pedido.TotalVenta}
                              orden={pedido.idVenta}
                              estatus={pedido.estatus} 
                              color={pedido.color}
                              token={pedido.tokenVenta}
                              navigation={props.navigation}
                              idVenta={pedido.idVenta}
                              />
                            ) 
                          }

                          )
                      }
                  </ScrollView>
                }
            </View>
        </NativeBaseProvider>
    );
};

export default Pedidos;