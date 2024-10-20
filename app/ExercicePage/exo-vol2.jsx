import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderPage from '../../components/Header';
import CardExo from '../../components/CardExo';
import { Link, useGlobalSearchParams } from 'expo-router';
import * as SQLite from 'expo-sqlite';

function ChoiceExo() {
  // Declaration des variables et recuperation des parametres
  const db = SQLite.openDatabaseSync('app.db'); 
  const [exos, setExos] = useState([]);
  const { exo1 } = useGlobalSearchParams();
  const { exo2 } = useGlobalSearchParams();
  const { exo3 } = useGlobalSearchParams();


  // Fonction de recuperation des Exercice en fonction des muscles demandé
  useEffect(() => {
    function fetchExos() {
      try {
        const result = db.getAllSync('SELECT * FROM Exercice WHERE muscleCible In (?,?,?) ORDER BY Random() LIMIT 6', [exo1,exo2,exo3]);
        setExos(result); 
      } catch (error) {
        console.error('Erreur lors de la récupération des exercices:', error);
      }
    }

    fetchExos();
  }, [exo1]);

  return (
    <GestureHandlerRootView>
              <HeaderPage page={"Exercices"} />
      <SafeAreaView>
        <ScrollView>
          {/* Affichage des Exercices sellectionné */}
          <View style={styles.container}>
            {exos.map((exo, index) => (
              <Link href={`./exo-vol3?id=${encodeURIComponent(exo.idExercice)}`} style={styles.gridItem} key={index}>
                <CardExo nomExo={exo.nom} urlImg={exo.urlImg} />
              </Link>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default ChoiceExo;

// Style CSS de la fonction
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  gridItem: {
    width: '48%',
    marginBottom: 30,
    alignItems: 'center',
  },
});