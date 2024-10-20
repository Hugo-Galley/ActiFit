import { View, Text, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'
import Card from '../../components/Card'
import HeaderPage from '../../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { Link } from 'expo-router'
import { useUser } from '../UserContext'
import * as SQLite from 'expo-sqlite'

function Home(){
  // Definition des variables
  const { userId } = useUser();
  const db = SQLite.openDatabaseSync('app.db'); 
  const [stat, setStat] = useState([]);

  // Fonction de recuperation des Statistque lié a l'utilisateur
  useEffect(() => {
      async function fetchStat() {
          try {
              const result = db.getFirstSync('SELECT * FROM Statistique WHERE idUser = ?',userId);
              setStat(result); 
          } catch (error) {
              console.error('Erreur lors de la récupération des Informations:', error);
          }
      }

      fetchStat();
  }, []);
  return (
    <GestureHandlerRootView>
      <HeaderPage page={"Accueil"} />
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.text}>Découvrez vos Séances de la Semaine</Text>
          <View style={styles.container}>
            {/* Verification de la frequence d'abonnement afin d'afficher le bon nombre de séance */}
            {stat.frequence === 1 ? (
              <Link
                href={`./seance?nom=${encodeURIComponent('FullBody')}&url=${encodeURIComponent('https://i.ytimg.com/vi/gOViaSi6y38/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDTHg1SkSDAXr2lcA_ZxoBuIdd-Vw')}`}
                style={styles.card}
              >
                <Card
                  urlImg={"https://i.ytimg.com/vi/gOViaSi6y38/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDTHg1SkSDAXr2lcA_ZxoBuIdd-Vw"}
                  nbrExo={6}
                  text={"Séance FullBody : Pec, Dos, Jambes"}
                />
              </Link>
            ) : stat.frequence === 3 ? (
              <>
                <Link
                  href={`./seance?nom=${encodeURIComponent('Push')}&url=${encodeURIComponent('https://img.passeportsante.net/1200x675/2020-11-26/i97824-.webp')}`}
                  style={styles.card}
                >
                  <Card
                    urlImg={"https://img.passeportsante.net/1200x675/2020-11-26/i97824-.webp"}
                    nbrExo={6}
                    text={"Séance PUSH : Pec, Épaules, Triceps"}
                  />
                </Link>
                <Link
                  href={`./seance?nom=${encodeURIComponent('Pull')}&url=${encodeURIComponent('https://squaregym.fr/app/uploads/2024/06/Aliments-perte-de-poids.jpg')}`}
                  style={styles.card}
                >
                  <Card
                    urlImg={"https://squaregym.fr/app/uploads/2024/06/Aliments-perte-de-poids.jpg"}
                    nbrExo={6}
                    text={"Séance Pull : Dos, Biceps"}
                  />
                </Link>
                <Link
                  href={`./seance?nom=${encodeURIComponent('Legs')}&url=${encodeURIComponent('https://fitness-life.fr/wp-content/uploads/2019/08/Séance-musculation-jambes.jpg')}`}
                  style={styles.card}
                >
                  <Card
                    urlImg={"https://fitness-life.fr/wp-content/uploads/2019/08/Séance-musculation-jambes.jpg"}
                    nbrExo={6}
                    text={"Séance Jambes : Quadriceps, Ischio-jambiers, Mollets"}
                  />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href={`./seance?nom=${encodeURIComponent('Push')}&url=${encodeURIComponent('https://img.passeportsante.net/1200x675/2020-11-26/i97824-.webp')}`}
                  style={styles.card}
                >
                  <Card
                    urlImg={"https://img.passeportsante.net/1200x675/2020-11-26/i97824-.webp"}
                    nbrExo={6}
                    text={"Séance PUSH : Pec, Épaules, Triceps"}
                  />
                </Link>
                <Link
                  href={`./seance?nom=${encodeURIComponent('Pull')}&url=${encodeURIComponent('https://squaregym.fr/app/uploads/2024/06/Aliments-perte-de-poids.jpg')}`}
                  style={styles.card}
                >
                  <Card
                    urlImg={"https://squaregym.fr/app/uploads/2024/06/Aliments-perte-de-poids.jpg"}
                    nbrExo={6}
                    text={"Séance Pull : Dos, Biceps"}
                  />
                </Link>
                <Link
                  href={`./seance?nom=${encodeURIComponent('Legs')}&url=${encodeURIComponent('https://fitness-life.fr/wp-content/uploads/2019/08/Séance-musculation-jambes.jpg')}`}
                  style={styles.card}
                >
                  <Card
                    urlImg={"https://fitness-life.fr/wp-content/uploads/2019/08/Séance-musculation-jambes.jpg"}
                    nbrExo={6}
                    text={"Séance Jambes : Quadriceps, Ischio-jambiers, Mollets"}
                  />
                </Link>
                <Link
                  href={`./seance?nom=${encodeURIComponent('Push')}&url=${encodeURIComponent('https://img.passeportsante.net/1200x675/2020-11-26/i97824-.webp')}`}
                  style={styles.card}
                >
                  <Card
                    urlImg={"https://img.passeportsante.net/1200x675/2020-11-26/i97824-.webp"}
                    nbrExo={6}
                    text={"Séance PUSH : Pec, Épaules, Triceps"}
                  />
                </Link>
                <Link
                  href={`./seance?nom=${encodeURIComponent('Pull')}&url=${encodeURIComponent('https://squaregym.fr/app/uploads/2024/06/Aliments-perte-de-poids.jpg')}`}
                  style={styles.card}
                >
                  <Card
                    urlImg={"https://squaregym.fr/app/uploads/2024/06/Aliments-perte-de-poids.jpg"}
                    nbrExo={6}
                    text={"Séance Pull : Dos, Biceps"}
                  />
                </Link>
              </>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
    };
    

export default Home

// Style CSS de la fonction
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center', // Centre horizontalement
    justifyContent: 'center', // Centre verticalement si nécessaire
    paddingVertical: 20, // Pour ajouter de l'espace autour des cartes
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {

    width: '95%', 
    marginVertical: 10, 
  }
});