import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import HeaderPage from '../../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context';
import { LineChart } from 'react-native-chart-kit';
import * as SQLite from 'expo-sqlite/next';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useUser } from '../UserContext';

function Profil() {
    const { userId } = useUser();
    const db = SQLite.openDatabaseSync('app.db'); 
    const [stat, setStat] = useState([]);
    const [user, setUser] = useState([]);
    // const id = 2;

    useEffect(() => {
        function fetchExos() {
            try {
                const result = db.getAllSync('SELECT * FROM Statistique WHERE idUser = ?',userId);
                const resultUser = db.getAllSync('SELECT * FROM User WHERE idUser = ?',userId);
                setStat(result); 
                setUser(resultUser);
            } catch (error) {
                console.error('Erreur lors de la récupération des Informations:', error);
            }
        }

        fetchExos();
    }, []);

    // Récupération des données à partir des résultats de SQL
    const listStat = stat.length > 0 ? [stat[0].poids, stat[0].objectif, stat[0].taille, stat[0].frequence] : [];
    const listUser = user.length > 0 && user[0].urlImgProfil ? [user[0].nom, user[0].urlImgProfil] : ["Utilisateur", null];


    let data = [];
    if (listStat[0] && !isNaN(listStat[0])) {
        if (listStat[1] === "Perdre du poids") {
            data = [listStat[0], listStat[0] - 2, listStat[0] - 4, listStat[0] - 6, listStat[0] - 9, listStat[0] - 12, listStat[0] - 13, listStat[0] - 15];
        } else if (listStat[1] === "Prendre du poids") {
            data = [listStat[0], listStat[0] + 2, listStat[0] + 4, listStat[0] + 6, listStat[0] + 9, listStat[0] + 12, listStat[0] + 13, listStat[0] + 15];
        } else {
            data = [listStat[0], listStat[0] - 1, listStat[0] + 2, listStat[0] - 1, listStat[0] + 2, listStat[0] - 1, listStat[0] + 1, listStat[0] - 2];
        }
    } else {
        data = [0, 0, 0, 0, 0, 0, 0, 0]; // Valeurs par défaut pour éviter le crash
    }
    

    return (
        <GestureHandlerRootView>
            <HeaderPage page={"Profil"} />

            <SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Image source={{ uri: listUser[1] }} style={styles.image} />
                        <View style={styles.text}>
                            <Text style={styles.nom}>{listUser[0]}</Text>
                            <Text>{listStat[2]} cm</Text>
                        </View>
                    </View>

                    <View style={styles.containerMain}>
                        <View style={styles.items}>
                            <Text>Poids actuel :</Text>
                            <Text>{listStat[0]} Kg</Text>
                        </View>
                        <View style={styles.items}>
                            <Text>Objectif :</Text>
                            <Text>{listStat[1]}</Text>
                        </View>
                        <View style={styles.items}>
                            <Text>Fréquence :</Text>
                            <Text>{listStat[3]} fois/semaine</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.graphique}>
                    <Text style={styles.titre}>Prévisions de votre évolution</Text>
                    <LineChart
                        data={{
                            labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin"],
                            datasets: [
                                {
                                    data: data
                                }
                            ]
                        }}
                        width={Dimensions.get("window").width - 30}
                        height={300}
                        yAxisSuffix="Kg"
                        yAxisInterval={1}
                        chartConfig={{
                            backgroundGradientFrom: "#5730DC",
                            backgroundGradientTo: "#E0A5EA",
                            decimalPlaces: 1,
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 20
                            },
                            propsForDots: {
                                r: "5",
                                strokeWidth: "2",
                                stroke: "#6ec7e4"
                            }
                        }}
                        bezier
                        style={styles.chart}
                    />
                </View>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
}

export default Profil;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginTop: -30,
        backgroundColor: "#E3E7E8",
        padding: 16,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6.65,
        elevation: 8,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 28,
    },
    titre: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 22,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 8,
        alignItems: 'center',
    },
    containerMain: {
        marginTop: 16,
    },
    items: {
        display: 'flex',
        justifyContent: "space-between",
        flexDirection: 'row',
        marginBottom: 12,
    },
    nom: {
        fontWeight: 'bold',
        marginBottom: 5,
        fontSize: 20,
    },
    graphique: {
        margin: 'auto',
    },
    chart: {
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6.65,
    }
});
