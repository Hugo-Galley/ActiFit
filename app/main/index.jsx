import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Card from '../../components/Card'
import HeaderPage from '../../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import initializeDatabase from '../../components/DbSetup'
import { Link } from 'expo-router'

function Home(){
  initializeDatabase()
    return (
        <GestureHandlerRootView >
            <HeaderPage page={"Accueil"} />
            <SafeAreaView>
            <ScrollView>
              <View style={styles.container}>
                <Text style={styles.text}>Découvrer vos Séances de la Semaine</Text>
                <Link href={'./seance'} style={styles.card}>
                <Card 
                  urlImg={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqWCLZanWy09kTejVtnqM_Yumv9Do8KHYrg&s"} 
                  nbrExo={12} 
                  text={"Séance PUSH : Pec, Epaule Tritri"} 
                />
                </Link>
                <Link href={'./seance'} style={styles.card}>
                <Card 
                  urlImg={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqWCLZanWy09kTejVtnqM_Yumv9Do8KHYrg&s"} 
                  nbrExo={12} 
                  text={"Séance PUSH : Pec, Epaule Tritri"} 
                />
                </Link>
                <Link href={'./seance'} style={styles.card}>
                <Card 
                  urlImg={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqWCLZanWy09kTejVtnqM_Yumv9Do8KHYrg&s"} 
                  nbrExo={12} 
                  text={"Séance PUSH : Pec, Epaule Tritri"} 
                />
                </Link>
              </View>
              </ScrollView>
            </SafeAreaView>
        </GestureHandlerRootView>
      );
    };
    

export default Home

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center', // Centre horizontalement
    justifyContent: 'center', // Centre verticalement si nécessaire
    paddingVertical: 20, // Pour ajouter de l'espace autour des cartes
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {

    width: '95%', 
    marginVertical: 10, 
  }
});