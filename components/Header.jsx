import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Fonction Header de l'application
export default function HeaderPage({ page }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{page}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: "#0059D7",
    padding: 16,

  },
  text:{
    fontSize:30,
    textAlign: true,
    color:"#fff"
  }
});