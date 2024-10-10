import React, { useEffect } from "react";
import { View, Text } from "react-native";
import * as SQLite from 'expo-sqlite';

async function initializeDatabase () {
    // Ouvre la base de données en mode asynchrone
    const db = await SQLite.openDatabaseAsync('app.db');

    // Exécute les requêtes SQL de création de tables avec execAsync
    await db.execAsync(`
        
        CREATE TABLE IF NOT EXISTS User (
            idUser INTEGER PRIMARY KEY,
            nom VARCHAR(100) NOT NULL,
            urlImgProfil TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS Statistique (
            idStatistique INTEGER PRIMARY KEY,
            taille VARCHAR(255), 
            poids VARCHAR(255),   
            frequence INT,
            objectif TEXT CHECK(objectif IN ('Prendre du poids', 'Stabiliser son poids', 'Perdre du poids')),
            idUser INTEGER,
            FOREIGN KEY (idUser) REFERENCES User(idUser)
        );

        CREATE TABLE IF NOT EXISTS Seance (
            idSeance INTEGER PRIMARY KEY,
            urlImgBanniere TEXT,
            nbrExo INT,
            description TEXT,
            nom VARCHAR(200)
        );

        CREATE TABLE IF NOT EXISTS Exercice (
            idExercice INTEGER PRIMARY KEY,
            nom VARCHAR(100),
            muscleCible VARCHAR(50),
            urlImg TEXT,
            idSeance INT,
            description TEXT,
            FOREIGN KEY (idSeance) REFERENCES Seance(idSeance)
        );
    `);

    const results = await db.execAsync('SELECT COUNT(*) as count FROM Exercice');
const count = 1;


    if (count === 0) {
    await db.execAsync(`
        INSERT INTO Exercice (nom, muscleCible, urlImg, description) VALUES
('Développé couché', 'Pectoraux', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Exercice de base pour le développement des pectoraux.'),
('Pompes', 'Pectoraux', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Exercice au poids du corps pour renforcer les pectoraux.'),
('Écarté couché', 'Pectoraux', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Exercice d’isolation pour les pectoraux.'),
('Développé incliné', 'Pectoraux', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Variante du développé couché pour travailler la partie supérieure des pectoraux.'),
('Dips', 'Pectoraux', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Exercice sollicitant les pectoraux et les triceps.'),
('Pec deck', 'Pectoraux', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Exercice guidé pour isoler les pectoraux.'),
('Curl barre', 'Biceps', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Exercice de base pour les biceps avec une barre.'),
('Curl haltères', 'Biceps', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Exercice classique pour développer les biceps.'),
('Curl marteau', 'Biceps', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Variante du curl qui cible également les avant-bras.'),
('Concentration curl', 'Biceps', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Exercice pour une contraction maximale du biceps.'),
('Curl pupitre', 'Biceps', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Isolation des biceps avec un appui sur le pupitre.'),
('Tractions supination', 'Biceps', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Exercice au poids du corps sollicitant les biceps.'),
('Barre au front', 'Triceps', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Exercice pour travailler les triceps avec une barre.'),
('Extension corde', 'Triceps', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Extensions à la poulie pour isoler les triceps.'),
('Dips triceps', 'Triceps', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Exercice au poids du corps pour les triceps.'),
('Kickback haltère', 'Triceps', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Extension des triceps avec une haltère en position inclinée.'),
('Développé couché prise serrée', 'Triceps', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Variante du développé couché pour cibler les triceps.'),
('Extension nuque', 'Triceps', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Exercice d’isolation pour étirer et travailler les triceps.'),
('Curl inversé', 'Avants-bras', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Curl avec une prise en pronation pour les avant-bras.'),
('Curl poignets', 'Avants-bras', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Exercice pour renforcer les avant-bras et les poignets.'),
('Rotation haltère', 'Avants-bras', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Exercice pour travailler la rotation du poignet et les avant-bras.'),
('Farmers walk', 'Avants-bras', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Marche avec des poids pour développer la force des avant-bras.'),
('Tirage corde', 'Avants-bras', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Exercice à la corde pour renforcer les avant-bras.'),
('Flexion extension poignet', 'Avants-bras', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Exercice pour isoler et renforcer les avant-bras.'),
('Développé militaire', 'Épaules', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Exercice de base pour développer les épaules.'),
('Élévation latérale', 'Épaules', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Élévations pour travailler les deltoïdes latéraux.'),
('Élévation frontale', 'Épaules', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Variante pour travailler la partie frontale des épaules.'),
('Arnold press', 'Épaules', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Variante du développé militaire avec rotation des bras.'),
('Face pull', 'Épaules', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Exercice pour renforcer les épaules et les trapèzes.'),
('Tirage menton', 'Épaules', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Tirage vertical pour renforcer les épaules.'),
('Crunch', 'Abdos', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Exercice classique pour renforcer les abdominaux.'),
('Gainage', 'Abdos', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Exercice isométrique pour renforcer la sangle abdominale.'),
('Relevé de jambes', 'Abdos', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Exercice pour travailler les abdominaux inférieurs.'),
('Russian twists', 'Abdos', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Exercice pour travailler les obliques et les abdominaux.'),
('Mountain climbers', 'Abdos', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Exercice dynamique pour renforcer les abdos et le cardio.'),
('Planche latérale', 'Abdos', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Exercice de gainage latéral pour travailler les obliques.'),
('Squat', 'Jambes', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Exercice fondamental pour développer les quadriceps et les fessiers.'),
('Fentes', 'Jambes', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Exercice pour cibler les jambes et les fessiers.'),
('Presse à cuisses', 'Jambes', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Exercice guidé pour les quadriceps et les fessiers.'),
('Leg curl', 'Jambes', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Exercice pour isoler les ischio-jambiers.'),
('Soulevé de terre', 'Jambes', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Exercice complet pour les jambes et le bas du dos.'),
('Mollets debout', 'Jambes', 'https://www.gladiatorfit.ch/wp-content/uploads/2022/12/Exercice-ecarte-incline-halteres-1000x1000.jpg', 'Exercice pour isoler et renforcer les mollets.');
    `);
    }

    console.log("Tables créées avec succès.");
};

export default initializeDatabase;