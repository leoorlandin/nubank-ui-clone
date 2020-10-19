import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';


export default function Rewards() {
  return (
    <View style={styles.cardRewards}>
      <View style={styles.account}>

        <Feather name="gift" color="#8A05BE" size={32} style={styles.rewardsIcon} />
        <Text style={styles.rewardsText}>Rewards</Text>

      </View>

      <View style={styles.rewardsInfo}>
        <Text style={styles.infoText}>Apague compras com pontos que nunca expiram.</Text>
        <TouchableOpacity style={styles.rewardsButton}>
          <Text style={styles.rewardsButtonText}>Conhecer</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  cardRewards: {
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
  rewardsIcon: {
    backgroundColor: 'rgba(0,0,0, 0.1)',
    padding: 5,
    borderRadius: 50,
  },
  rewardsText: {
    color: '#8A05BE',
    marginLeft: 20,
    fontSize: 22,
  },
  rewardsInfo: {
    marginTop: 25,
  },
  infoText: {
    color: 'rgba(0,0,0, 0.8)',
    fontSize: 16,
  },
  rewardsButton: {
    maxWidth: 110,
    marginTop: 20,
    borderWidth: .4,
    padding: 10,
    borderRadius: 4,

    alignItems: "center",
  },
  rewardsButtonText: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#8A05BE",

  }
});