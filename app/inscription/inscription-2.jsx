import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Choice from '../../components/Choice'
import HeaderPage from '../../components/Header'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Link } from 'expo-router'

function inscription2(){
  return (
    <GestureHandlerRootView>
      <HeaderPage page={"Inscription"}/>
        <SafeAreaView style={styles.contenu}>
          <Text style={styles.text}>Combien de fois par semaine souhaiter vous vous entrainer</Text>
          <View style={styles.container}>
            <Link href={'/main'} style={styles.lien}>
              <Choice titre={"1 fois/semaine"} />
            </Link>
            <Link href={'/main'} style={styles.lien}>
            <Choice titre={"3 fois/semaine"} />
            </Link>
            <Link href={'/main'} style={styles.lien}>
            <Choice titre={"5 fois/semaine"} />
            </Link>

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
