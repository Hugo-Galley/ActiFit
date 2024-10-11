import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import LinearGradient from "react-native-linear-gradient";


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
    height:'15%',
    justifyContent:'center',
    backgroundColor: "#0059D7",
    padding: 16,

  },
  text:{
    fontSize:30,
    textAlign: true,
    marginTop:50,
    color:"#fff"
  }
});