import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import HeaderPage from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import initializeDatabase from '../components/DbSetup'

function Home(){
  initializeDatabase()
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView>
            <HeaderPage page={"Accueil"} />
            <ScrollView>
              <View style={styles.container}>
                <Text style={styles.text}>Découvrer vos Séances de la Semaine</Text>
                <Card 
                  urlImg={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqWCLZanWy09kTejVtnqM_Yumv9Do8KHYrg&s"} 
                  nbrExo={12} 
                  text={"Séance PUSH : Pec, Epaule Tritri"} 
                />
                <Card 
                  urlImg={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqWCLZanWy09kTejVtnqM_Yumv9Do8KHYrg&s"} 
                  nbrExo={12} 
                  text={"Séance PUSH : Pec, Epaule Tritri"} 
                />
                <Card 
                  urlImg={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqWCLZanWy09kTejVtnqM_Yumv9Do8KHYrg&s"} 
                  nbrExo={12} 
                  text={"Séance PUSH : Pec, Epaule Tritri"} 
                />
              </View>
              </ScrollView>
            </SafeAreaView>
        </GestureHandlerRootView>
      );
    };
    

export default Home

const styles = StyleSheet.create(
    {
        container:{
            display:"flex",
            marginTop:50

        },
        text:{
            fontSize:25,
            margin: 'auto',
            fontWeight:'bold',
            textAlign:'center',
            marginBottom:20
            
        }
        }
    
)