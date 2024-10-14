import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Ecran d'affichage des Exercices avec leurs détails
export default function Exo({ nom, urlImg, type, description }) {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{nom}</Text>
            </View>
            <Image 
                source={{ uri: urlImg }} 
                style={styles.image} 
            />
            <View style={styles.textContainer}>
            <Text style={styles.subtitle}>{description}</Text>
            </View>
           
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 25, 
    },
    textContainer: {
        backgroundColor: '#404041',  
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 3,
        marginBottom: 50,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 50,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        color:"#fff"
    }
});