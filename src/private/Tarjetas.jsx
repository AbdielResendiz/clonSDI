
import { NativeBaseProvider, Text, View, Box } from "native-base";
import colors from '../colors';


const Tarjetas = () => {


    return(
        <NativeBaseProvider>
            <View flex={1} bg={colors.blanco}>
                <Text bold fontSize={"xl"} ml={5} my={3}>Mi perfil</Text>

                <Box bg={colors.blanco} w="90%" mx="5%" h={"470px"} borderRadius={20} shadow={6}>

                    
                </Box>

            </View>
        </NativeBaseProvider>
    );
};

export default Tarjetas;