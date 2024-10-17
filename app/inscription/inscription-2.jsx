import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Choice from '../../components/Choice'
import HeaderPage from '../../components/Header'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Link, useRouter, useGlobalSearchParams } from 'expo-router'
import * as SQLite from 'expo-sqlite/next';
import { useUser } from '../UserContext'

function inscription2(){
  const router = useRouter();
  const { setUserId } = useUser();
  const {poids} = useGlobalSearchParams();
  const {taille} = useGlobalSearchParams();
  const {objectif} = useGlobalSearchParams();
  const {email} = useGlobalSearchParams();

   function RegisterStat(choice) {
    const db = SQLite.openDatabaseSync("app.db");
    
    try {
      // Récupérer d'abord l'utilisateur
      const user = db.getFirstSync('SELECT * FROM User WHERE email = ?', email);
      
      if (!user) {
        console.error('Utilisateur non trouvé');
        return;
      }
  
      // Insérer les statistiques avec l'idUser récupéré
       db.runAsync(`
        INSERT INTO Statistique (taille, poids, frequence, objectif, idUser)
        VALUES (?, ?, ?, ?, ?);
      `, taille, poids, choice, objectif, user.idUser);
  
      setUserId(user.idUser);
      router.push('main/home');
      
    } catch (error) {
      console.error('Erreur:', error);
    }
  }
  return (
    <GestureHandlerRootView>
      <HeaderPage page={"Inscription"}/>
        <SafeAreaView style={styles.contenu}>
          <Text style={styles.text}>Combien de fois par semaine souhaiter vous vous entrainer</Text>
          <View style={styles.container}>
          <TouchableOpacity onPress={() => RegisterStat(1)} style={styles.lien}>
              <Choice titre={"1 fois/semaine"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => RegisterStat(3)} style={styles.lien}>
            <Choice titre={"3 fois/semaine"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => RegisterStat(5)} style={styles.lien}>
            <Choice titre={"5 fois/semaine"} />
            </TouchableOpacity>

          </View>
        
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default inscription2

const styles = StyleSheet.create(
  {
    container:{
      height:'70%',
    },
    contenu:{
      marginTop:50,
    },
    text:{
      marginRight:'auto',
      marginLeft:'auto',
      marginTop:10,
      textAlign:'center',
      fontSize:25,
      width:400
    },
    lien:{
      margin:20
    }
  }
)
