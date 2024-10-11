import { View, SafeAreaView, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import Exo from '../../components/Exo';
import HeaderPage from '../../components/Header';
import { useGlobalSearchParams } from 'expo-router';
import * as SQLite from 'expo-sqlite';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function DescriptionExo() {
  const db = SQLite.openDatabaseSync('app.db');
  const [exo, setExo] = useState(null);
  const { id } = useGlobalSearchParams();

  useEffect(() => {
    function fetchExo() {
      try {
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
    <GestureHandlerRootView>
            <HeaderPage page={"Exercices"} />
    <SafeAreaView>
      <View>
        {exo ? (
          <Exo
            nom={exo.nom}
            urlImg={exo.urlImg}
            type={exo.muscleCible}
            description={exo.description}
          />
        ) : (
          <Text>Chargement de l'exercice...</Text>
        )}
      </View>
    </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default DescriptionExo;