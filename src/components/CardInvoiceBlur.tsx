import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';


export default function CardInvoiceBlur() {
  return (
    <View style={styles.cardInvoice}>
      <View style={styles.creditCard}>

        <Feather name="credit-card" color="rgba(0,0,0, 0.6)" size={22} />
        <Text style={styles.creditCardText}>Cartão de Crédito</Text>

      </View>

      <View style={styles.currentBill}>
        <Text style={styles.billText}>Fatura Atual</Text>
        <View style={styles.invoiceBlur}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardInvoice: {
    padding: 20,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 4,
    marginTop: 15,
    position: "relative",
  },
  creditCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  creditCardText: {
    color: 'rgba(0,0,0, 0.6)',
    marginLeft: 20,
    fontSize: 16
  },
  currentBill: {
  },
  billText: {
    color: 'rgba(0,0,0, 0.6)',
    marginVertical: 10,
  },
  invoiceBlur: {
    width: "100%",
    height: 53,
    backgroundColor: "linear-gradient(90deg, rgba(204,204,204,1) 0%, rgba(255,255,255,1) 100%)",
    opacity: .5,
  },
});