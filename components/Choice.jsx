import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'; // Assure-toi d'importer ces composants
import HeaderPage from '../components/Header';

function Choice() {
<<<<<<< HEAD
=======
  function handlePress(buttonNumber) {
  }
>>>>>>> 94f55281f21f887f248d99d2b08b475452ed9e05

  function creerButton(buttonNumber, label) {
    return (
      <View key={buttonNumber}>
        <button
          style={styles.buttonActive}
          onClick={() => handlePress(buttonNumber)}
        >
          {label}
        </button>
      </View>
    );
  }

  function creerboutonSuivant() {
    return (
      <View key="suivant"
      style={styles.boutonSuivant}
      onClick={() => handlePress('suivant')}
      >
        Suivant
      </View>
    )

  }



  return (
    <SafeAreaView style={styles.container}>
      <HeaderPage page={"Accueil"} />
      {creerButton(1, 'Oui')}
      {creerButton(2, 'Non')}
      {creerButton(3, 'Peut-Être')}
      {creerButton(4, 'Je sais pas')}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonActive: {
    backgroundColor: '#5B9DEA',
    borderRadius: 30,
    padding: 10,
    margin: 10,
    color: '#FFFFFF',
  },
  boutonSuivant: {
    backgroundColor: '#0059D7',
    borderRadius: 30,
    padding: 10,
    margin: 10,
    color: '#FFFFFF',
  }
});

export default Choice;
