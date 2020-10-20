import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import CardInvoice from '../components/CardInvoice';
import CardInvoiceBlur from '../components/CardInvoiceBlur';
import Account from '../components/Account';
import AccountBlur from '../components/AccountBlur';
import Rewards from '../components/Rewards';
import Footer from '../components/Footer';


export default function Main() {


  const [visibility, setVisibility] = useState("eye-off");

  const handleVisibilityButton = () => {
    setVisibility(visibility === "eye-off" ? "eye" : "eye-off")
  }


  return (
    <View style={styles.background} >

      <View style={styles.header}>
        <Text style={styles.headerText}>Olá, Leonardo</Text>
        <View style={styles.headerIcons}>
          <Feather
            name={visibility}
            color="#fff" size={24}
            style={styles.eyeIcon}
            onPress={handleVisibilityButton}
          />
          <Feather name="settings" color="#fff" size={24} style={styles.gearIcon} />
        </View>
      </View>

      <ScrollView style={styles.container} >
        {visibility === "eye-off" ? <CardInvoice /> : <CardInvoiceBlur />}
        {visibility === "eye-off" ? <Account /> : <AccountBlur />}
        <Rewards />
      </ScrollView>

      <Footer />
    </View>
  )
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#8A05BE',
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
  container: {
    paddingHorizontal: 20,
    position: "relative",
  }
});