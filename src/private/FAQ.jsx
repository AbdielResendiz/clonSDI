
import { NativeBaseProvider, Text, View, Box } from "native-base";
import colors from '../colors';


const FAQ = () => {


    return(
        <NativeBaseProvider>
            <View flex={1} bg={colors.blanco}>
                <Text bold fontSize={"xl"} ml={5} my={3}>Preguntas frecuentes</Text>

                

            </View>
        </NativeBaseProvider>
    );
};

export default FAQ;