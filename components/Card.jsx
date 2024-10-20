import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

// Card de presentation avec nom description et photos
export default function Card({ urlImg, nbrExo, text }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: urlImg }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.description}>{text}</Text>
        <Text style={styles.exercises}>Séance composée de {nbrExo} exercices</Text>
      </View>
    </View>
  );
}
// Style CSS de la fonction
const styles = StyleSheet.create({
  container: {
    width: '100%', 
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#329df3',
    borderRadius: 8,
    marginBottom: 20,
    alignSelf: 'center', 
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 15, 
  },
  textContainer: {
    flex: 1, 
  },
  description: {
    fontSize: 14,
    color: '#fff',
    flexWrap: 'wrap', 
  },
  exercises: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#fff',
  },
});