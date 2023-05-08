

import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import { StripeProvider } from '@stripe/stripe-react-native';

const API_URL = "https://us-central1-sdiqro-594ed.cloudfunctions.net/app";


function PasarelaStripe() {
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
        
      <View style={styles.container}>
        <StripeProvider publishableKey='pk_test_51LlFbaDzNrCwCazaGr27Olsh8foLuQ6ZNzIH0onZPzJniMf375y3srnBxcXMRI3Nu21JfCdX5c8h4CWlW700nzvD00enMjqF2E'>
        <TextInput
          autoCapitalize="none"
          placeholder="E-mail"
          keyboardType="email-address"
          onChange={value => setEmail(value.nativeEvent.text)}
          style={styles.input}
        />
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
        <Button onPress={handlePayPress} title="Pay" disabled={loading} />
        </StripeProvider>
      </View>
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
    },
  });