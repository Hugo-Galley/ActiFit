import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity, Modal, Button, Platform,Image} from 'react-native'
import React, { useState } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import HeaderPage from '../../components/Header'
import { Picker } from '@react-native-picker/picker';
import {useRouter } from 'expo-router';
import * as SQLite from 'expo-sqlite/next';
import * as ImagePicker from 'expo-image-picker';

function SignUp() {
  // Deefiniton des variables
  const [email, onChangeEmail] = useState('');
  const [mdp, onChangeMdp] = useState('');
  const [nom, onChangeNom] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const router = useRouter()
  const poidsOptions = [];
  const tailleOptions = [];
  const [selectedWeight, setSelectedWeight] = useState(30);
  const [selectedHeight, setSelectedHeight] = useState(110);
  const [showWeightPicker, setShowWeightPicker] = useState(false);
  const [showHeightPicker, setShowHeightPicker] = useState(false);

  // Remplissage des Tableau avec les differents choix possible
  for (let i = 30; i <= 120; i++) {
    poidsOptions.push(i);
    }
   for (let i = 110; i <= 220; i++) {
    tailleOptions.push(i);
    }

    // Fonction our enregistrer l'utilisateur 
    function RegisterUser(){
      const db = SQLite.openDatabaseSync('app.db'); 
      if (nom && imageUri && email && mdp)
      {
        db.runSync(`
          INSERT INTO User (nom, urlImgProfil, email, mdp)
                  VALUES (?, ?, ?, ?);
                  );
          );
      `,nom,imageUri,email,mdp);
      // Envoie des parametre de poids et de taille vers /inscription-1
      router.push({
        pathname: './inscription-1',
        params: { taille: selectedHeight,
                  poids: selectedWeight,
                  email:email
                }, 
    });
      }
      else{
        alert("Veuillez remplir tout les champs");
      }

    }

    // Fonction de récuperation de l'image pour la photo de profil
    async function pickImage(){
      // Demande de permission d'accès à la galerie
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Désolé, nous avons besoin de la permission pour accéder à la bibliothèque de photos !');
          return;
        }
      }
  
      // Ouvrir la bibliothèque d'images
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });
  
  
      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
      }
    };
  return (
    <GestureHandlerRootView>
      <HeaderPage page={'Inscription'}/>
      <SafeAreaView style={styles.containerPrincip}>
        <Text style={styles.titre}>Inscription</Text>
        {/* Bloc d'inscription */}
        <View style={styles.container}>
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
            secureTextEntry
          />
          <TextInput
            placeholder='Votre nom'
            value={nom}
            onChangeText={onChangeNom}
            style={styles.input}
          />
          
          <TouchableOpacity onPress={() => setShowWeightPicker(true)} style={styles.pickerButton}>
            <Text>{selectedWeight} kg</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setShowHeightPicker(true)} style={styles.pickerButton}>
            <Text>{selectedHeight} cm</Text>
          </TouchableOpacity>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Choisir une photo de profil" onPress={pickImage} />
      {imageUri && (
        <Image source={{ uri: imageUri }} style={{ width: 50, height: 50}} />
      )}
    </View>

          {/* Mise en place des Modals (petite fenetre pop-in) pour le choix de la taille et du poids */}
          <Modal visible={showWeightPicker} transparent animationType="slide">
            <View style={styles.modalView}>
              <Picker
                selectedValue={selectedWeight}
                onValueChange={(itemValue) => setSelectedWeight(itemValue)}
                style={styles.picker}
              >
                {poidsOptions.map((poids) => (
                  <Picker.Item key={poids} label={`${poids} kg`} value={poids} />
                ))}
              </Picker>
              <TouchableOpacity onPress={() => setShowWeightPicker(false)} style={styles.closeButton}>
                <Text>Fermer</Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <Modal visible={showHeightPicker} transparent animationType="slide">
            <View style={styles.modalView}>
              <Picker
                selectedValue={selectedHeight}
                onValueChange={(itemValue) => setSelectedHeight(itemValue)}
                style={styles.picker}
              >
                {tailleOptions.map((taille) => (
                  <Picker.Item key={taille} label={`${taille} cm`} value={taille} />
                ))}
              </Picker>
              <TouchableOpacity onPress={() => setShowHeightPicker(false)} style={styles.closeButton}>
                <Text>Fermer</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
        <TouchableOpacity onPress={RegisterUser}>
        <View style={styles.button}>
                <Text style={styles.btntext}>Suivant</Text>
        </View>
        </TouchableOpacity>
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}
// Style CSS de la fonction
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 'auto',
  },
  input: {
    height: 40,
    width: 350,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8
  },
  choiceLabel: {
    marginTop: 20,
    fontSize: 16,
    marginBottom: 8,
  },
  pickerButton: {
    height: 40,
    width: 350,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    paddingLeft: 10,
    marginBottom: 12,
    marginTop:20

  },
  modalView: {
    margin: 20,
    marginTop:300,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  picker: {
    width: 300,
    height: 200,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  titre:{
    fontSize:80,
    marginBottom:20,
    marginTop:30,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6.65,
},
containerPrincip:{
    alignItems:"center"
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
btntext:{
    color:'white'
}
});

export default SignUp