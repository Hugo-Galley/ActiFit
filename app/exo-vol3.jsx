import { View, SafeAreaView, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import Exo from '../components/Exo';
import HeaderPage from '../components/Header';
import { useGlobalSearchParams } from 'expo-router';
import * as SQLite from 'expo-sqlite';

function DescriptionExo() {
  const db = SQLite.openDatabaseSync('app.db'); 
  const [exo, setExo] = useState(null); // Initialiser comme null pour gérer l'absence de données
  const { id } = useGlobalSearchParams();

  useEffect(() => {
    function fetchExo() {
      try {
        // Récupérer l'exercice basé sur l'ID
        const result = db.getAllSync('SELECT * FROM Exercice WHERE idExercice = ?', [id]);
        if (result.length > 0) {
          setExo(result[0]); 
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des exercices:', error);
      }
    }

    fetchExo();
  }, [id]);

  return (
    <SafeAreaView>
      <HeaderPage page={"Exercice"} />
      <View>
          <Exo 
            nom={exo.nom} 
            urlImg={exo.urlImg} 
            type={exo.muscleCible} // Exemple : vous pouvez passer muscleCible comme type
            description={exo.description} 
          />

      </View>
    </SafeAreaView>
  );
}

export default DescriptionExo;