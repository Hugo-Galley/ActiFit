import { View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState,useEffect} from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HeaderPage from '../components/Header';
import initializeDatabase from '../components/DbSetup';
import { Link, useRouter } from 'expo-router';
import * as SQLite from 'expo-sqlite';
import { useUser } from './UserContext';
initializeDatabase()
function SignIn (){
    // Decllaration des variables 
    const [email,onChangeEmail] = useState('');
    const [mdp,onChangeMdp] = useState('');
    const [user, setUser] = useState([]);
    const { setUserId } = useUser();
    const router = useRouter(); 
    const db = SQLite.openDatabaseSync('app.db'); 
  
    // Fonction pour recuperer les informations sur un utilisateurs  
    useEffect(() => {
      function fetchUser() {
        try {
          const result = db.getAllSync('SELECT * FROM User');
          setUser(result); 
        } catch (error) {
          console.error('Erreur lors de la récupération des exercices:', error);
        }
      }
  
      fetchUser();
    }, []);

    // Fonction pour verifier qu'un utilisaqteur existe ou non
    function verifyConnection() {
        let isFound = false;
        
        // On verifie si l'email et le mot de passe son correct puis on relance vers Home
        user.forEach((users) => {
            if (users.email === email && users.mdp === mdp) {
                setUserId(users.idUser)
                // Delay pour que la BDD est le temps de s'actualiser
                setTimeout(() => {
                    router.push('main/home');
                }, 1000); 
                isFound = true;
            }
        });
        if (!isFound) {
            alert('Email ou mot de passe incorrect');
        }
    }
    

  return (
    <GestureHandlerRootView>
        <HeaderPage page={"Connexion"}/>
    <SafeAreaView style={styles.container}>
        <Text style={styles.titre}>Actifit</Text>
        {/* Bloc de Connexion */}
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
        <TouchableOpacity onPress={verifyConnection}>
        <View style={styles.buttonCon}>
                <Text style={styles.btnText}>Se Connecter</Text>
            </View>
            </TouchableOpacity>
        {/* Bloc d'Inscription */}
        <Text style={styles.subtitle}>Pas de compte ?</Text>
        <Link href={'/inscription/SignUp'}>
            <View style={styles.button}>
                <Text style={styles.btnText}>S'incrire</Text>
            </View>
        </Link>


    </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default SignIn

// Style CSS de la fonction
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