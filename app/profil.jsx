import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

function Profil({ urlImg, name, size, weight, regime, frequency }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/640px-Donald_Trump_official_portrait.jpg" }} style={styles.image} />
       <View style={styles.text}>
            <Text>name</Text>
            <Text>size cm</Text>
       </View>
      </View>
      <View style={styles.containerMain}>
        <View style={styles.items}>
          <Text>Poids actuel :</Text>
          <Text>weight Kg</Text>
        </View>
        <View style={styles.items}>
          <Text>Objectif :</Text>
          <Text>regime</Text>
        </View>
        <View style={styles.items}>
          <Text>Fréquence :</Text>
          <Text>frequency fois/semaine</Text>
        </View>
      </View>
    </View>
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