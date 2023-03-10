import { NativeBaseProvider, Text, View, Center, Box, Container, Image, Pressable } from "native-base"
import { useEffect, useState } from "react";
//import { TouchableOpacity } from "react-native";
import colors from "../colors";
import LoginAbdiel from "../components/LoginAbdiel";
import RegistroAbdiel from "../components/RegistroAbdiel";

const Welcome = ()=>{

const [ show, setShow ] = useState(true);

useEffect( ()=>{
    console.log(show)
 },[show]);

    return(
        <NativeBaseProvider>
            <View bg={colors.blanco} flex={1}>
                {/**LOGO */}
                <Center >
                    <Box mt={4} bg="white">
                        <Container>
                            <Image source={{uri: `https://sdiqro.com/wp-content/uploads/2022/05/sdi-logo.png`}} 
                            alt="" w={300} h={200} resizeMode="contain" />
                        </Container>
                    </Box>
                </Center>

                {/** Elegir login o registro */}
                <View flexDirection={"row"} justifyContent={"space-evenly"}>
                    <Box >
                        <Pressable  Opacity onPress={() => setShow(true)}>
                            <Center  h={"41px"} w={"80px"}  borderBottomColor={show===true? colors.rosa : colors.gris} borderBottomWidth={"3px"}> 
                                <Text color={show===true? colors.rosa : colors.gris} bold>Registro</Text></Center>
                        </Pressable>
                    </Box>
                    <Box>
                        <Pressable  Opacity onPress={() => setShow(false)}>
                                <Center  h={"41px"} w={"80px"}  borderBottomColor={show!==true? colors.rosa : colors.gris} borderBottomWidth={"3px"}> 
                                    <Text color={show!==true? colors.rosa : colors.gris} bold>Login</Text></Center>
                        </Pressable>
                    </Box>
                </View>

                { show===true ? 
                <RegistroAbdiel/>
                :
                <LoginAbdiel/>
                }




            </View>
        </NativeBaseProvider>
    )
}
export default Welcome;