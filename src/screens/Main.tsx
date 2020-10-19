import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';


import Header from '../components/Header';
import CardInvoice from '../components/CardInvoice';
import Account from '../components/Account';
import Rewards from '../components/Rewards';


export default function Main() {
  return (
    <View style={styles.background}>

      <Header />

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
});