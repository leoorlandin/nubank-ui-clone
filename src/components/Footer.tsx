import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import FooterCard from '../components/FooterCard';

export default function Footer() {
  return (
    <View style={styles.footerContainer}>
      <ScrollView style={styles.footer} horizontal={true} alwaysBounceHorizontal={true}>
        <FooterCard textContent="Pix" iconName="command"/>
        <FooterCard textContent="Pagar" iconName="dollar-sign"/>
        <FooterCard textContent="Transferir" iconName="corner-down-right"/>
        <FooterCard textContent="Depositar" iconName="plus-circle"/>
        <FooterCard textContent="Indicar amigos" iconName="user-plus"/>
        <FooterCard textContent="Recarga de celular" iconName="smartphone"/>
      </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 15,
    flexDirection: 'row',
    marginTop: 10,
  },
  footerContainer: {
    paddingHorizontal: 20,
    marginRight: -20,
  },
})
