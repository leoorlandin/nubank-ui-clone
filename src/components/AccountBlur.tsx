import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';


export default function AccountBlur() {
  return (
    <View style={styles.accountStatus}>
      <View style={styles.account}>

        <Feather name="dollar-sign" color="rgba(0,0,0, 0.6)" size={22} />
        <Text style={styles.accountText}>Conta</Text>

      </View>

      <View style={styles.currentBill}>
        <Text style={styles.balanceText}>Saldo disponível</Text>
        <View style={styles.accountBlur}></View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  accountStatus: {
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
  accountBlur: {
    width: "100%",
    height: 40,
    backgroundColor: "linear-gradient(90deg, rgba(204,204,204,1) 0%, rgba(255,255,255,1) 100%)",
    opacity: .5,
  },
  currentBill: {
    position: "relative",
  },
  balanceText: {
    color: 'rgba(0,0,0, 0.6)',
    marginVertical: 10,
  },
});