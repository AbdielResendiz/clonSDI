
import { NativeBaseProvider, Text, View, Box } from "native-base";
import colors from '../colors';


const Notificaciones = () => {


    return(
        <NativeBaseProvider>
            <View flex={1} bg={colors.blanco}>
                <Text bold fontSize={"xl"} ml={5} my={3}>Mis notificaciones</Text>

             

            </View>
        </NativeBaseProvider>
    );
};

export default Notificaciones;