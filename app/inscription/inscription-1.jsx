import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Choice from '../../components/Choice'
import HeaderPage from '../../components/Header'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Link, useGlobalSearchParams, useRouter } from 'expo-router'

function inscription1(){
  const { taille } = useGlobalSearchParams();
  const { poids } = useGlobalSearchParams();
  const { email } = useGlobalSearchParams();
  const router = useRouter();

  function SendStat(choice){
    router.push({
      pathname: './inscription-2',
      params: { taille: taille,
                poids: poids,
                objectif: choice,
                email: email
              }, 
  });
  }

  return (
    <GestureHandlerRootView>
      <HeaderPage page={"Inscription"}/>
        <SafeAreaView style={styles.contenu}>
          <Text style={styles.text}>Quelle est votre Objectif ?</Text>
          <View style={styles.container}>
          <TouchableOpacity onPress={() => SendStat("Perdre du poids")} style={styles.lien}>
            <Choice titre={"Perdre du poids"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => SendStat("Stabiliser son poids")} style={styles.lien}>
            <Choice titre={"Stabiliser mon poids"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => SendStat("Prendre du poids")} style={styles.lien}>
            <Choice titre={"Prendre du poids"} />
          </TouchableOpacity>

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
