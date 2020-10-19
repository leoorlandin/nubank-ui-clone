import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';


export default function CardInvoice() {
  return (
    <View style={styles.cardInvoice}>
          <View style={styles.creditCard}>

            <Feather name="credit-card" color="rgba(0,0,0, 0.6)" size={22} />
            <Text style={styles.creditCardText}>Cartão de Crédito</Text>

          </View>

          <View style={styles.currentBill}>
            <Text style={styles.billText}>Fatura Atual</Text>
            <Text style={styles.billValue}>R$ 146,54</Text>
          </View>

          <View style={styles.availableCredit}>
            <Text style={styles.availableCreditText}>Limite Disponível</Text>
            <Text style={styles.availableCreditValue}>RS 1.844,16</Text>
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
  billValue: {
    color: '#05B8C4',
    fontWeight: 'bold',
    fontSize: 22,
  },
  availableCredit: {
    flexDirection: 'row',
    marginTop: 5,
  },
  availableCreditText: {
    color: 'rgba(0,0,0, 0.6)',
    marginRight: 5,
  },
  availableCreditValue: {
    fontWeight: 'bold',
    color: 'green',
  }
});