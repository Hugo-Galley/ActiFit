import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
export default function CardExo({ nomExo, urlImg }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{nomExo}</Text>
            <Image source={{ uri: urlImg }} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#5DADE2",
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        width: 170,
        height: 150,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    title: {
        fontSize: 18, 
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 8, 
    },
    image: {
        width: "100%", 
        height: 80,
        borderRadius: 8, 
        resizeMode: "cover",
    },
});