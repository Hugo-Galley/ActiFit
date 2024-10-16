import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Choice from '../../components/Choice'
import HeaderPage from '../../components/Header'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Link } from 'expo-router'

function inscription1(){
  return (
    <GestureHandlerRootView>
      <HeaderPage page={"Inscription"}/>
        <SafeAreaView style={styles.contenu}>
          <Text style={styles.text}>Quelle est votre Objectif ?</Text>
          <View style={styles.container}>
            <Link href={'inscription/inscription-2'} style={styles.lien}>
              <Choice titre={"Perdre du poids"}/>
            </Link>
            <Link href={'inscription/inscription-2'} style={styles.lien}>
              <Choice titre={"Stabiliser mon poids"}/>
            </Link>
            <Link href={'inscription/inscription-2'} style={styles.lien}>
              <Choice titre={"Prendre du poids"}/>
            </Link>

          </View>
        
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default inscription1

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
      fontSize:35,
      width:300
    },
    lien:{
      margin:20
    }
  }
)
