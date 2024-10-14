import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function MuscleChoice({ urlImg, text }) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: urlImg }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.nom}>{text}</Text>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      textAlign: 'center',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#404041',
      borderRadius: 15,
      margin: 11,
      marginBottom:20,
      width: 350
    },
    image: {
    marginLeft: 20,
      width: 75,
      height: 65,
      borderRadius: 8,
    },
    textContainer: {
      paddingLeft: 10,
      alignItems: 'center',
      marginRight: 20,
    },
    nom: {
      fontSize: 25,
      fontWeight: 'bold',
      alignItems: 'center',
      marginTop: 5,
      color:"#fff"
    },
  });
