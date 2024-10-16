import { View, Text, ScrollView, SafeAreaView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import HeaderPage from '../../components/Header'
import { Ionicons } from '@expo/vector-icons'

function seance(){
  return (
<GestureHandlerRootView>
    <HeaderPage page={"Exercice"}/>
    <View>
        <Image source={require('../../assets/essan.webp')} style={styles.image}/>
            <View style={styles.container} > 
                <View style={styles.pictoContainer}>
                    <View style={styles.infoItems}>
                    <Ionicons name='timer-outline' size={30} color={"#594CE4"}/>
                        <Text>30 Min</Text>
                        <Text style={styles.subsubtitle}>Durée</Text>
                    </View>
                    <View style={styles.infoItems} >
                        <Ionicons name='bar-chart-outline' size={30} color={"#594CE4"}/>
                        <Text>Intermediaire</Text>
                        <Text style={styles.subsubtitle}>Niveau</Text>
                    </View>
                    <View style={styles.infoItems}>
                        <Ionicons name='flame' size={30} color={"#594CE4"}/>
                        <Text>348</Text>
                        <Text style={styles.subsubtitle}>Kcal</Text>
                    </View>

                </View>
                <View style={styles.bodySeance}>
                    <Text style={styles.titre}>Séance Push</Text>
                    <Text style={styles.subtitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quod quos quibusdam veniam sed. Obcaecati tempore, sint delectus atque ipsum vitae reprehenderit et inventore perferendis autem ad eum, hic consequatur?</Text>
                </View>
                <Text style={styles.button}>Demarer l'entrainement</Text>
            </View>
    </View>
</GestureHandlerRootView>
  )
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