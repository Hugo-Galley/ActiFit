import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import HeaderPage from '../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

function Profil({ urlImg, name, size, weight, regime, frequency }) {
  return (
    <SafeAreaView>
            <HeaderPage page={"Profil"}/>
    <View style={styles.container}>
      <View style={styles.header}>
      <Image source={require('../assets/SCR-20241007-olgt.jpeg')} style={styles.image} />
       <View style={styles.text}>
            <Text>Mabrouk</Text>
            <Text>122 cm</Text>
       </View>
      </View>
      <View style={styles.containerMain}>
        <View style={styles.items}>
          <Text>Poids actuel :</Text>
          <Text>79 Kg</Text>
        </View>
        <View style={styles.items}>
          <Text>Objectif :</Text>
          <Text>Prendre du poids</Text>
        </View>
        <View style={styles.items}>
          <Text>Fréquence :</Text>
          <Text>1 fois/semaine</Text>
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
}

export default Profil;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    
  },
  image: {
    width: 100, 
    height: 100,
    borderRadius: 50, 
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  text:{
    display: 'flex',
    flexDirection: 'column',
    marginLeft:28,
  },
  header: {
    display: 'flex',
    flexDirection:'row',
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: ''

  },
  containerMain: {
    marginTop: 16,
  },
  items: {
    display: 'flex',
    justifyContent: "space-between",
    flexDirection: 'row',
    marginBottom: 12,
    color: '#fff', // Couleur du texte pour les éléments
  },
});