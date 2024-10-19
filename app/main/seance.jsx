import { View, Text, ScrollView, SafeAreaView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import HeaderPage from '../../components/Header'
import { Ionicons } from '@expo/vector-icons'
import { Link, useGlobalSearchParams } from 'expo-router'

function seance(){
    const {nom} = useGlobalSearchParams();
    const {url} = useGlobalSearchParams();


    return (
        <GestureHandlerRootView>
          <HeaderPage page={"Exercice"} />
          <View>
            <Image source={{ uri: url }} style={styles.image} />
            <View style={styles.container}>
              <View style={styles.pictoContainer}>
                <View style={styles.infoItems}>
                  <Ionicons name='timer-outline' size={30} color={"#594CE4"} />
                  <Text>30 Min</Text>
                  <Text style={styles.subsubtitle}>Durée</Text>
                </View>
                <View style={styles.infoItems}>
                  <Ionicons name='bar-chart-outline' size={30} color={"#594CE4"} />
                  <Text>Intermédiaire</Text>
                  <Text style={styles.subsubtitle}>Niveau</Text>
                </View>
                <View style={styles.infoItems}>
                  <Ionicons name='flame' size={30} color={"#594CE4"} />
                  <Text>348</Text>
                  <Text style={styles.subsubtitle}>Kcal</Text>
                </View>
              </View>
              <View style={styles.bodySeance}>
                <Text style={styles.titre}>Séance {nom}</Text>
                <Text style={styles.subtitle}>
                Rejoignez-nous pour une séance de sport revigorante et énergisante ! Ensemble, nous allons repousser nos limites, renforcer notre corps et booster notre énergie. Ne laissez pas le doute vous freiner, venez vous surpasser !
                </Text>
              </View>
              <Link
                href={
                  nom === "Push"
                    ? `../ExercicePage/exo-vol2?exo1=${encodeURIComponent("Pectoraux")}&exo2=${encodeURIComponent("Triceps")}&exo3=${encodeURIComponent("Épaules")}`
                    : nom === "Pull"
                    ? `../ExercicePage/exo-vol2?exo1=${encodeURIComponent("Dos")}&exo2=${encodeURIComponent("Biceps")}&exo3=${encodeURIComponent("Avants-bras")}`
                    : `../ExercicePage/exo-vol2?exo1=${encodeURIComponent("Jambes")}&exo2=${encodeURIComponent("Abdos")}&exo3=${encodeURIComponent("Jambes")}`
                }
                style={styles.button}
              >
                <Text>Démarrer l'entraînement</Text>
              </Link>
            </View>
          </View>
        </GestureHandlerRootView>
      );
}

export default seance

const styles = StyleSheet.create(
    {
        container:{
            backgroundColor:'#E3E7E8',
            borderRadius:20,
            marginTop:-20
        },
        pictoContainer:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-around',
            marginTop:10,

        },
        infoItems:{
            display:'flex',
            flexDirection:'column',
            textAlign:'center',
            alignItems:'center'
        },
        bodySeance:{
            display:'flex',
            flexDirection:'column',
            marginTop:20,
            marginLeft:15
        },
        button: {
            margin: 'auto',
            marginTop: 20,
            backgroundColor: '#594CE4',
            padding: 15,
            borderRadius: 15,
            width: '90%',
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
            overflow:'hidden',
        },
        image:{
            width: '100%',
            height:'53%'
        },
        titre:{
            fontWeight:'bold',
            fontSize:30,

        },
        subtitle:{
            marginTop:10,
            fontSize:15
        },
        subsubtitle:{
            fontSize:12
        }

    }
)