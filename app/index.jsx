import { View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HeaderPage from '../components/Header';
import { Link } from 'expo-router';

function SignIn (){
    const [email,onChangeEmail] = useState('');
    const [mdp,onChangeMdp] = useState('');

  return (
    <GestureHandlerRootView>
        <HeaderPage page={"Connexion"}/>
    <SafeAreaView style={styles.container}>
        <Text style={styles.titre}>Actifit</Text>
        <View>
        <TextInput  
      placeholder='Votre email'
      value={email}
      onChangeText={onChangeEmail}
      style={styles.input}
      />

      <TextInput  
      placeholder='Votre mot de passe'
      value={mdp}
      onChangeText={onChangeMdp}
      style={styles.input}
      />
      
        </View>
        <View style={styles.buttonCon}>
                <Text style={styles.btnText}>Se Connecter</Text>
            </View>
        <Text style={styles.subtitle}>Pas de compte ?</Text>
        <Link href={'./inscription/SignUp'}>
            <View style={styles.button}>
                <Text style={styles.btnText}>S'incrire</Text>
            </View>
        </Link>


    </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default SignIn

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        margin:'auto'
    },
    input: {
      height: 40,
      width:350,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius:8

    },
    titre:{
        fontSize:100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6.65,
    },
    subtitle:{
        color:'grey',
        marginBottom:20
    },
    button:{
        backgroundColor:"#329df3",
        width:150,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6.65,
        
    },
    buttonCon:{
        backgroundColor:"#329df3",
        width:350,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        marginBottom:20,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6.65,
        
    },
    btnText:{
        color:'white'
    }
  });