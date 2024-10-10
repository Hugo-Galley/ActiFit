import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'
import HeaderPage from '../components/Header'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import MuscleChoice from '../components/MuscleChoice'
import { Link } from 'expo-router'

const Exercice = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <HeaderPage page={"Nos exercices"} />
        <ScrollView>
        <View style={styles.containerexo}>
  {[
    {
      urlImg: "https://coach-rameur.com/wp-content/uploads/2022/06/pectoraux-illustration-v2.png",
      text: "Pectoraux",
    },
    {
      urlImg: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Biceps_brachii.png",
      text: "Biceps",
    },
    {
      urlImg: "https://upload.wikimedia.org/wikipedia/commons/8/83/Triceps_brachii.png",
      text: "Triceps",
    },
    {
      urlImg: "https://musculation-nutrition.fr/wp-content/uploads/2021/09/Les-biceps-curl.png",
      text: "Avant-Bras",
    },
    {
      urlImg: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Standing-Behind-the-Neck-Barbell-Shoulder-Press_600x600.png?v=1619977648",
      text: "Épaules",
    },
    {
      urlImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGT5iMIQRVrrr_bPhuBF_gUcHDJugbi-k_Ol0PsKLapAA1arzcybi52FSpYWDOcgD20GM&usqp=CAU",
      text: "Abdominaux",
    },
    {
      urlImg: "https://static.wixstatic.com/media/23ac3b_1855a057e8bb49d0907fada55e43778a~mv2.png/v1/fill/w_428,h_413,al_c,lg_1,q_85/23ac3b_1855a057e8bb49d0907fada55e43778a~mv2.png",
      text: "Jambes",
    },
  ].map((muscle, index) => (
        <Link key={index} href={`/exo-vol2?text=${encodeURIComponent(muscle.text)}`}>
          <MuscleChoice urlImg={muscle.urlImg} text={muscle.text} />
        </Link>
  ))}
</View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  containerexo: {
    padding: 5,
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    marginLeft:20
  },

})

export default Exercice
