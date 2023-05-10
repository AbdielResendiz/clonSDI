

import React, { useState } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";
 import { StripeProvider } from '@stripe/stripe-react-native';
 import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
 import { NativeBaseProvider,  Text, Stack, Image, Center, Input } from "native-base";
import colors from "../../colors";


const API_URL = "https://us-central1-sdiqro-594ed.cloudfunctions.net/app";


function PasarelaStripe(props) {

  const idU = props.route.params.id;
  const total = props.route.params.tot;
  const idSuc = props.route.params.suc;
  const idCarrito = props.route.params.car;
  
    const [email, setEmail] = useState();
    const [cardDetails, setCardDetails] = useState();
    const { confirmPayment, loading } = useConfirmPayment();

  
    const fetchPaymentIntentClientSecret = async () => {
      const response = await fetch(`${API_URL}/create-payment-intent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
            
            cantidad: 200 // cantidad a pagar
        })

      });
      const { clientSecret, error } = await response.json();
      return { clientSecret, error };
    };
  

    const handlePayPress = async () => {
      
      if (!cardDetails?.complete || !email) {
        Alert.alert("Please enter Complete card details and Email");
        return;
      }
      const billingDetails = {
        email: email,
      };
     
      try {
        const { clientSecret, error } = await fetchPaymentIntentClientSecret();
     
        if (error) {
          console.log("Unable to process payment");
        } else {
            const { paymentIntent, error } = await confirmPayment(clientSecret, {
                paymentMethodType: "Card",
               
                paymentMethodData: {
                  billingDetails,
                },
                
              });

          if (error) {
            alert(`Payment Confirmation Error ${error.message}`);
            console.log("Payment Confirmation Error", error.message);
          } else if (paymentIntent) {
            alert("Payment Successful");
            console.log("Payment successful ", paymentIntent);
          }
        }
      } catch (e) {
        console.log(e);
      }
     
    };
  
    return (
      <NativeBaseProvider>
        
        <View flex={1} m={20} backgroundColor={"#ffffff"}>
          <Center my={5}>
            <Text bold fontSize={18}>Paga tu pedido de forma segura con Stripe </Text>
            <Text>idU:{idU} total: {total}, idSuc:{idSuc}, idCarrito:{idCarrito}</Text>
          </Center>

          <Stack direction={"row"} alignSelf={"center"} space={10}>
          <Image source={require("../../images/logo.png")}
             alt="Alternate Text" size="xl" resizeMode="contain" />
              <Image source={require("../../images/stripe.jpeg")}
             alt="Alternate Text" size="xl" resizeMode="contain" />
          </Stack>
          <StripeProvider publishableKey='pk_test_51LlFbaDzNrCwCazaGr27Olsh8foLuQ6ZNzIH0onZPzJniMf375y3srnBxcXMRI3Nu21JfCdX5c8h4CWlW700nzvD00enMjqF2E'>
            <Text ml={5} bold>Correo electrónico: </Text>
          <Input fontSize={20} shadow={6} bg="#ffffff" mx={10}
            autoCapitalize="none"
            placeholder="E-mail"
            keyboardType="email-address"
            onChange={value => setEmail(value.nativeEvent.text)}
            
          />
          <View style={{ flexDirection: 'column' }}>
          <Text ml={5} mt={3} bold>Datos de la tarjeta: </Text>
          <Text ml={5} bold>(Número tarjeta, Fecha caducidad, CVV, C.P  ) </Text>
            <CardField 
              postalCodeEnabled={true}
              placeholder={{
                number: "4242 4242 4242 4242",
              }}
              cardStyle={styles.card}
              style={styles.cardContainer}
              onCardChange={cardDetails => {
                setCardDetails(cardDetails);
              }}
            />
          </View>
        
          <Button onPress={handlePayPress} title="Pagar" disabled={loading}  color={colors.azul} style={styles.button} />
          </StripeProvider>
        </View>
      </NativeBaseProvider>
    );
  };

  export default PasarelaStripe;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      margin: 20,
    },
    input: {
      backgroundColor: "#efefefef",
  
      borderRadius: 8,
      fontSize: 20,
      height: 50,
      padding: 10,
    },
    card: {
      backgroundColor: "#efefefef",
    },
    cardContainer: {
      height: 50,
      marginVertical: 30,
      backgroundColor: "#000fff",
      borderRadius: 8,
      
      
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
  });