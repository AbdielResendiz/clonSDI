import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NativeBaseProvider, Box } from 'native-base';

import SwiperList from '../components/SwiperList';

export default function Home(props) {

  const navegacion= (item) => {
    props.navigation.navigate(item);
  };

  return (
    <NativeBaseProvider style={styles.container}>
      <Box h={"100%"}>
        <SwiperList/>

      </Box>


    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
