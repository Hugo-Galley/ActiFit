import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

function Choice ({titre}){
    const [style, setStyle] = useState(styles.container);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{titre}</Text>
    </View>
  )
}

export default Choice

const styles = StyleSheet.create(
    {
        container:{
            backgroundColor:'#329df3',
            width:350,
            height:90,
            alignItems:'center',
            margin:'auto',

            borderRadius:15,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 6.65,

        },
        text:{
            margin:'auto',
            fontSize:30,
            color:'white'
        },
        container3:{
          backgroundColor:'#329df3',
            width:350,
            height:90,
            alignItems:'center',
            margin:'auto',

            borderRadius:15,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 6.65,
        }
    }
)