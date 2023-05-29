import { NativeBaseProvider, Text, View, Center, Box, Container, Image, Pressable, ScrollView } from "native-base"
import { useEffect, useState } from "react";
//import { TouchableOpacity } from "react-native";
import colors from "../colors";
import LoginAbdiel from "../components/LoginAbdiel";
//import RegistroAbdiel from "../components/RegistroAbdiel";
import FormRegistro from "../components/FormRegistro";

const Welcome = (props)=>{
    const  state  =props.route.params.status;
   // console.log("status de prueba: +++", state);
    

const [ show, setShow ] = useState(state);

useEffect( ()=>{
    console.log(show)
 },[show]);

    return(
        <NativeBaseProvider>
            <ScrollView bg={colors.blanco} flex={1}>
                
                {/**LOGO */}
                <Center >
                    <Box  >
                        <Container>
                            <Image source={require("../../assets/icon.png")}
                            alt="" size="2xl" resizeMode="contain"  my={-10} />
                        </Container>
                    </Box>
                </Center>

                {/** Elegir login o registro */}
                <View flexDirection={"row"} justifyContent={"space-evenly"} mx={10}>
                    <Box >
                        <Pressable  Opacity onPress={() => setShow(false)}>
                            <Center  h={"41px"} w={"80px"}  borderBottomColor={show!==true? colors.rosa : colors.gris} borderBottomWidth={"3px"}> 
                                <Text color={show!==true? colors.rosa : colors.gris} bold>Registro</Text></Center>
                        </Pressable>
                    </Box>
                    <Box>
                        <Pressable  Opacity onPress={() => setShow(true)}>
                                <Center  h={"41px"} w={"100px"}  borderBottomColor={show===true? colors.rosa : colors.gris} borderBottomWidth={"3px"}> 
                                    <Text color={show===true? colors.rosa : colors.gris} bold>Iniciar sesión</Text></Center>
                        </Pressable>
                    </Box>
                </View>

                { show===true ? 
                  <LoginAbdiel/>
              
                :
                  <FormRegistro/>
                }



                
            </ScrollView>
        </NativeBaseProvider>
    )
}
export default Welcome;