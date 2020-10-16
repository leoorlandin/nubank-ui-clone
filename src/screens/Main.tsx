import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';


export default function Main() {
  return (
    <View style={styles.background}>

      <View style={styles.container}>



        <View style={styles.header}>
          <Text style={styles.headerText}>Olá, Leonardo</Text>
          <View style={styles.headerIcons}>
            <Feather name="eye-off" color="#fff" size={24} style={styles.eyeIcon} />
            <Feather name="settings" color="#fff" size={24} style={styles.gearIcon} />
          </View>
        </View>

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

      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#8A05BE',
  },
  container: {
    position: "relative",
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: "center",
    justifyContent: "space-between",

    flexDirection: 'row',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff"
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  eyeIcon: {
    padding: 10,
    marginRight: 10,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 50,
  },
  gearIcon: {
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 50,
  },
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