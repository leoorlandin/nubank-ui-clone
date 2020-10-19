import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';


export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Olá, Leonardo</Text>
      <View style={styles.headerIcons}>
        <Feather name="eye-off" color="#fff" size={24} style={styles.eyeIcon} />
        <Feather name="settings" color="#fff" size={24} style={styles.gearIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  }
})
