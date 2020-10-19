import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';


interface CardTypes {
  iconName: string
  textContent: string,
}

export default function FooterCard(CardContent: CardTypes) {
  return (
    <TouchableOpacity>
      <View style={styles.footerCard}>
        <Feather name={CardContent.iconName} color="#fff" size={24} />
        <Text style={styles.footerCardText}>{CardContent.textContent}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  footerCard: {
    backgroundColor: "rgba(255,255,255, 0.1)",
    padding: 10,
    height: 100,
    width: 90,
    borderRadius: 6,
    justifyContent: "space-between",
    marginRight: 8,
    // marginLeft: -3,
  },
  footerCardText: {
    color: "#fff",
    fontSize: 15,
  },
})