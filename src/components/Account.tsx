import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';


export default function Account() {
  return (
    <View style={styles.cardInvoice}>
          <View style={styles.account}>

            <Feather name="dollar-sign" color="rgba(0,0,0, 0.6)" size={22} />
            <Text style={styles.accountText}>Conta</Text>

          </View>

          <View style={styles.currentBill}>
            <Text style={styles.billText}>Saldo disponível</Text>
            <Text style={styles.balance}>R$ 0,00</Text>
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
  account: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountText: {
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
  balance: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 30,
  },
});