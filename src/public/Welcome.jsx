import { NativeBaseProvider, Text, View, Center, Box, Container, Image, Pressable, ScrollView } from "native-base"
import { useEffect, useState } from "react";
//import { TouchableOpacity } from "react-native";
import colors from "../colors";
import LoginAbdiel from "../components/LoginAbdiel";
import RegistroAbdiel from "../components/RegistroAbdiel";
import FormRegistro from "../components/FormRegistro";

const Welcome = (props)=>{

const [ show, setShow ] = useState(true);

useEffect( ()=>{
    console.log(show)
 },[show]);

    return(
        <NativeBaseProvider>
            <View bg={colors.blanco} flex={1}>
                <ScrollView>
                {/**LOGO */}
                <Center >
                    <Box  >
                        <Container>
                            <Image source={{uri: `https://sdiqro.com/wp-content/uploads/2022/05/sdi-logo.png`}} 
                            alt="" size="2xl" resizeMode="contain"  my={-10} />
                        </Container>
                    </Box>
                </Center>

                {/** Elegir login o registro */}
                <View flexDirection={"row"} justifyContent={"space-evenly"}>
                    <Box >
                        <Pressable  Opacity onPress={() => setShow(false)}>
                            <Center  h={"41px"} w={"80px"}  borderBottomColor={show!==true? colors.rosa : colors.gris} borderBottomWidth={"3px"}> 
                                <Text color={show!==true? colors.rosa : colors.gris} bold>Registro</Text></Center>
                        </Pressable>
                    </Box>
                    <Box>
                        <Pressable  Opacity onPress={() => setShow(true)}>
                                <Center  h={"41px"} w={"80px"}  borderBottomColor={show===true? colors.rosa : colors.gris} borderBottomWidth={"3px"}> 
                                    <Text color={show===true? colors.rosa : colors.gris} bold>Login</Text></Center>
                        </Pressable>
                    </Box>
                </View>

                { show===true ? 
                  <LoginAbdiel/>
              
                :
                  <FormRegistro/>
                }



                </ScrollView>
            </View>
        </NativeBaseProvider>
    )
}
export default Welcome;