import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';


import CardInvoice from '../components/CardInvoice';
import Account from '../components/Account';
import Rewards from '../components/Rewards';


export default function Main() {
  return (
    <View style={styles.background}>

      <View style={styles.header}>
        <Text style={styles.headerText}>Olá, Leonardo</Text>
        <View style={styles.headerIcons}>
          <Feather name="eye-off" color="#fff" size={24} style={styles.eyeIcon} />
          <Feather name="settings" color="#fff" size={24} style={styles.gearIcon} />
        </View>
      </View>

      <ScrollView style={styles.container}>



        <CardInvoice />
        <Account />
        <Rewards />
        <Rewards />



      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#8A05BE',
    position: "relative"
  },
  container: {
    position: "relative",
    paddingHorizontal: 20,
  },
  header: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",

    flexDirection: 'row',

    marginTop: 40,

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
});