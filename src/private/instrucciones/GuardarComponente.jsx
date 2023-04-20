import React from 'react';
import {  Stack, Text, Icon } from 'native-base';
import colors from '../../colors';
const GuardarComponente = (props) => {
    const {as, name, text} =props;
  return (
  
            <Stack direction={"row"} mx={5} my={3}>
               <Icon as={as} name={name} color={colors.azul} mt={1}/>
                <Text fontSize={"md"}>{text} </Text>
            </Stack>

  );
};

export default GuardarComponente;