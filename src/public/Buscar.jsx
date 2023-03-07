import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { NativeBaseProvider, Input, Box, Text, FlatList , HStack, Image, Center, Divider, Icon} from 'native-base';

import { FontAwesome } from '@expo/vector-icons'; 

const Buscar = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://sdiqro.store/abdiel/Productos/buscar?q=${searchTerm}`);
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error(error);
    }
  };

  const detalleServicio= (item) => {
    props.navigation.navigate("DetalleServicio", {
      idServicio: item,
    });
  };

  return (
    <NativeBaseProvider>
        <Box  bg="white" w="100%" h="100%">
        <Input variant="rounded" placeholder="Buscar" my={4} mx={7}
        bg="#fff"
         value={searchTerm}
         onChangeText={setSearchTerm}
         onSubmitEditing={handleSearch} 
         InputLeftElement={<Icon as={<FontAwesome name="search" />} size={5} ml="2" color="muted.400" />}/>
           
      
        <FlatList
            data={results}
            keyExtractor={(item) => item.idS}
      
            renderItem={({ item }) => (
            
                <Box bg={"white"} rounded="lg" marginLeft={5} marginRight={5} marginTop={2}>
                <TouchableOpacity
                  onPress={() => detalleServicio(item.idS)}>
                    <HStack>
                    <Image 
                                source={{
                                uri: `http://sdiqro.store/static/imgServicios/${item.image_url}`
                                }}alt="Alternate Text" size="lg" resizeMode='contain' />
                            <Box w="60%" mt={5} ml={4}>
                                <Text  fontSize={20} color="#236DB7" >{item.nombreS}</Text>
                                <Text><Text bold>Precio: </Text>${item.precioS}</Text>
                        </Box>
                        <Center >
                        <FontAwesome name="angle-right" size={24} color="black" />
                        </Center>
                    </HStack>
                </TouchableOpacity>
                <Center>
                  <Divider mt={1} w="20%" mx="10%" thickness={2} bg="black"/>

                </Center>
            </Box>
            )}
        />
        </Box>
       



    
    </NativeBaseProvider>
  );
};

export default Buscar;