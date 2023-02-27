import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home(props) {

  const navegacion= (item) => {
    props.navigation.navigate(item);
  };

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity style={{backgroundColor:"#ff0000"}}>
        <Text style={{color:"#ffffff", padding:10}} onPress={()=>navegacion("Perfil")} >BOTON PRUEBA </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />


    </View>
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
