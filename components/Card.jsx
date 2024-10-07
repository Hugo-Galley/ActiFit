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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#5B9DEA',
    borderRadius: 8,
    margin: 10,
    marginBottom:20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  description: {
    fontSize: 14,
    color: '#fff',
  },
  exercises: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    color:"#fff"
  },
});