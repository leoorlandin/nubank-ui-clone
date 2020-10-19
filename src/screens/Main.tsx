import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import Header from '../components/Header';
import CardInvoice from '../components/CardInvoice';
import Account from '../components/Account';
import Rewards from '../components/Rewards';
import Footer from '../components/Footer';

export default function Main() {
  return (
    <View style={styles.background} >

      <Header />

      <ScrollView style={styles.container} bounces={true} alwaysBounceVertical={true}>
        <CardInvoice />
        <Account />
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
  container: {
    paddingHorizontal: 20,
  },
});