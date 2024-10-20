import { openDatabaseAsync } from 'expo-sqlite/next';

// Initialisations de la Base de données
async function initializeDatabase() {
    try {
        const db = await openDatabaseAsync('app.db');

        await db.runAsync(`
            CREATE TABLE IF NOT EXISTS User (
                idUser INTEGER PRIMARY KEY AUTOINCREMENT,
                nom VARCHAR(100) NOT NULL,
                urlImgProfil TEXT NOT NULL,
                email TEXT NOT NULL,
                mdp TEXT NOT NULL
            );
        `);
        await db.runAsync(`
            CREATE TABLE IF NOT EXISTS Statistique (
                idStatistique INTEGER PRIMARY KEY AUTOINCREMENT,
                taille INT,
                poids INT,
                frequence INT,
                objectif TEXT CHECK(objectif IN ('Prendre du poids', 'Stabiliser son poids', 'Perdre du poids')),
                idUser INTEGER,
                FOREIGN KEY (idUser) REFERENCES User(idUser)
            );
        `);
        await db.runAsync(`
            CREATE TABLE IF NOT EXISTS Exercice (
                idExercice INTEGER PRIMARY KEY AUTOINCREMENT,
                nom VARCHAR(100),
                muscleCible VARCHAR(50),
                urlImg TEXT,
                idSeance INT,
                description TEXT,
                FOREIGN KEY (idSeance) REFERENCES Seance(idSeance)
            );
        `);
        
        // Verification si des Inserts existes deja pour la table exercice
        const result = await db.getFirstAsync('SELECT COUNT(*) as count FROM Exercice');
        const count = result.count;

        if (count === 0) {
            await db.execAsync(`
                INSERT INTO Exercice (nom, muscleCible, urlImg, description) VALUES
('Développé couché', 'Pectoraux', 'https://i0.wp.com/muscu-street-et-crossfit.fr/wp-content/uploads/2021/09/Muscles-DC.001.jpeg?resize=1024%2C576&ssl=1', 'Allongez-vous sur un banc, saisissez la barre avec une prise légèrement plus large que les épaules. Abaissez la barre vers la poitrine, puis poussez pour remonter en extension complète des bras.'),
('Pompes', 'Pectoraux', 'https://www.docteur-fitness.com/wp-content/uploads/2020/10/pompe-musculation.gif', 'En position de planche, mains un peu plus écartées que les épaules, abaissez votre corps en fléchissant les coudes, puis poussez pour remonter. Gardez le corps droit tout au long du mouvement.'),
('Écarté couché', 'Pectoraux', 'https://pouruneviesaine.com/wp-content/uploads/2016/09/ecartécouché.jpg', 'Allongé sur un banc, tenez un haltère dans chaque main au-dessus de la poitrine. Abaissez les bras sur les côtés en gardant un léger pli aux coudes, puis remontez en serrant la poitrine.'),
('Développé incliné', 'Pectoraux', 'https://www.docteur-fitness.com/wp-content/uploads/2000/06/developpe-incline-halteres-exercice-musculation.gif', 'Sur un banc incliné à 30-45°, tenez les haltères au niveau des épaules. Poussez vers le haut jusqu à l extension des bras, puis redescendez lentement.'),
('Dips', 'Pectoraux', 'https://i0.wp.com/muscu-street-et-crossfit.fr/wp-content/uploads/2021/10/Muscles-Dips.001.jpeg?resize=1024%2C576&ssl=1', 'Sur des barres parallèles, corps suspendu, bras tendus. Fléchissez les coudes pour descendre le corps, en penchant légèrement le torse vers l avant, puis poussez pour remonter.'),
('Pec deck', 'Pectoraux', 'https://www.body-burn.com/wp-content/uploads/2023/12/pec-deck-butterfly-exercice.webp', 'Assis sur la machine, placez vos avant-bras sur les coussinets. Rapprochez les bras devant vous en contractant les pectoraux, puis revenez lentement à la position de départ.'),
('Curl barre', 'Biceps', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdcsgmicPKj5tnry10qAWXAESq7GPkGVvbmg&s', 'Debout, tenez une barre avec une prise en supination paumes vers le haut. Fléchissez les coudes pour lever la barre vers vos épaules, puis redescendez lentement en contrôlant le mouvement.'),
('Curl haltères', 'Biceps', 'https://www.espacecorps-espritforme.fr/wp-content/uploads/2010/12/curl-barre.png', 'Pour effectuer le curl haltères, tenez un haltère dans chaque main, bras le long du corps. Fléchissez les coudes pour amener les haltères vers vos épaules, puis redescendez lentement.'),
('Curl marteau', 'Biceps', 'https://cdn.shopify.com/s/files/1/0680/7843/6626/files/hammer_curl_480x480.png?v=1697695468', 'Tenez les haltères avec une prise neutre paumes face à face. Fléchissez les coudes pour lever les haltères vers vos épaules, gardant les poignets droits, puis redescendez.'),
('Concentration curl', 'Biceps', 'https://www.docteur-fitness.com/wp-content/uploads/2021/09/curl-concentre.gif', 'Assis sur un banc, tenez un haltère entre vos jambes. Appuyez votre coude sur votre cuisse intérieure et fléchissez pour lever lhaltère vers votre épaule.'),
('Curl pupitre', 'Biceps', 'https://musculation-nutrition.fr/wp-content/uploads/2021/11/curl-pupitre.jpeg', 'Utilisez un banc incliné. Allongez-vous sur le ventre, bras pendants avec les haltères. Fléchissez les coudes pour lever les poids, en gardant les bras collés au banc.'),
('Tractions supination', 'Biceps', 'https://www.docteur-fitness.com/wp-content/uploads/2021/08/chin-up-traction-supination.gif', 'Accrochez-vous à une barre avec les paumes vers vous. Tirez-vous vers le haut jusquà ce que votre menton dépasse la barre, puis redescendez lentement.'),
('Barre au front', 'Triceps', 'https://www.docteur-fitness.com/wp-content/uploads/2000/09/barre-front.gif', 'Allongé sur un banc, tenez une barre au-dessus de votre front, bras tendus. Fléchissez les coudes pour abaisser la barre vers votre front, puis remontez.'),
('Extension corde', 'Triceps', 'https://muscu-street-et-crossfit.fr/wp-content/uploads/2022/08/Muscles-extension-triceps-poulie.001.jpeg', 'Debout face à une poulie haute, saisissez la corde. Gardez les coudes près du corps et étendez les bras vers le bas, puis revenez lentement.'),
('Dips triceps', 'Triceps', 'https://www.docteur-fitness.com/wp-content/uploads/2021/09/dips-sur-banc.gif', 'Sur des barres parallèles, abaissez votre corps en fléchissant les coudes, puis poussez pour remonter. Gardez le torse légèrement incliné vers l avant.'),
('Kickback haltère', 'Triceps', 'https://julienquaglierini.com/wp-content/uploads/2021/01/kick-back-halteres.jpg', 'Penchez-vous en avant, un genou et une main sur un banc. Tenez un haltère, coude à 90°. Étendez le bras vers l arrière, puis revenez.'),
('Développé couché prise serrée', 'Triceps', 'https://www.docteur-fitness.com/wp-content/uploads/2022/11/developpe-couche-prise-serree-smith-machine.gif', 'Allongé sur un banc, saisissez la barre avec une prise plus étroite que la largeur des épaules. Abaissez la barre vers la poitrine, puis poussez vers le haut.'),
('Extension nuque', 'Triceps', 'https://julienquaglierini.com/wp-content/uploads/2018/06/extension-1-haltere-nuque.jpg', 'Assis ou debout, tenez un haltère à deux mains derrière la tête. Étendez les bras au-dessus de la tête, puis fléchissez pour revenir.'),
('Curl inversé', 'Avants-bras', 'https://www.docteur-fitness.com/wp-content/uploads/2022/04/curl-inverse-barre.gif', 'Tenez une barre avec les paumes vers le bas. Fléchissez les poignets pour lever la barre, puis abaissez lentement.'),
('Curl poignets', 'Avants-bras', 'https://static.strengthlevel.com/images/exercises/dumbbell-wrist-curl/dumbbell-wrist-curl-800.jpg', 'Assis, avant-bras sur les cuisses, tenez une barre légère. Fléchissez les poignets pour lever la barre, puis abaissez.'),
('Rotation haltère', 'Avants-bras', 'https://julienquaglierini.com/wp-content/uploads/2017/10/curl-rotation.jpg', 'Tenez un haltère vertical dans une main, coude fléchi à 90°. Tournez l haltère de l intérieur vers l extérieur, puis inversez.'),
('Farmers walk', 'Avants-bras', 'https://cdn.shopify.com/s/files/1/1497/9682/files/2_7ea8df98-f67a-44f6-88be-64a3cc9a6daf.jpg?v=1653565544', 'Tenez un haltère lourd dans chaque main. Marchez en gardant le dos droit et les épaules en arrière sur une distance déterminée.'),
('Tirage corde', 'Avants-bras', 'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Rope-Pulldown_24c7b22e-bf99-4ade-ba6c-c7b2f20ffa9a_600x600.png?v=1612138283', 'Enroulez une corde autour d une barre avec un poids attaché. Étendez les bras et tournez les poignets pour lever le poids.'),
('Flexion extension poignet', 'Avants-bras', 'https://www.body-new-look.fr/images/musculation-biceps/musculation-biceps-flexion-poignets.jpg', 'Assis, avant-bras sur les genoux, paumes vers le haut. Fléchissez les poignets pour lever les haltères, puis étendez.'),
('Développé militaire', 'Épaules', 'https://i0.wp.com/muscu-street-et-crossfit.fr/wp-content/uploads/2022/03/Muscles-DM-Halteres.001.jpeg?resize=1024%2C576&ssl=1', 'Debout ou assis, poussez une barre ou des haltères au-dessus de la tête, partant des épaules jusqu à l extension complète des bras.'),
('Élévation latérale', 'Épaules', 'https://muscu-street-et-crossfit.fr/wp-content/uploads/2022/04/Muscles-elevations-laterales.001.jpeg', 'Debout, haltères le long du corps, levez les bras sur les côtés jusqu à l horizontale, puis redescendez lentement.'),
('Élévation frontale', 'Épaules', 'https://max-powerlifting.fr/wp-content/uploads/2023/09/Muscles-elevations-frontales.001-980x551-1.jpeg', 'Debout, haltères devant les cuisses, levez les bras droit devant vous jusqu à l horizontale, puis redescendez.'),
('Arnold press', 'Épaules', 'https://training.fit/wp-content/uploads/2020/03/arnold-press-2.png', 'Commencez en position de curl, paumes vers vous. En poussant vers le haut, tournez les paumes vers l avant pour finir en développé militaire.'),
('Face pull', 'Épaules', 'https://muscu-street-et-crossfit.fr/wp-content/uploads/2023/11/Muscles-Face-Pull.001.jpeg', 'Avec une corde à la poulie haute, tirez vers votre visage en écartant les coudes, puis revenez lentement.'),
('Tirage menton', 'Épaules', 'https://muscu-street-et-crossfit.fr/wp-content/uploads/2022/05/Muscles-Rowing-Menton.001.jpeg', 'Debout, tirez une barre droite vers votre menton, en gardant les coudes hauts. Redescendez lentement.'),
('Crunch', 'Abdos', 'https://i0.wp.com/muscu-street-et-crossfit.fr/wp-content/uploads/2021/10/Muscles-Crunch.001.jpeg?resize=1024%2C576&ssl=1', 'Allongé sur le dos, genoux fléchis, soulevez les épaules du sol en contractant les abdominaux. Redescendez lentement.'),
('Gainage', 'Abdos', 'https://i0.wp.com/muscu-street-et-crossfit.fr/wp-content/uploads/2022/07/Muscles-Planche.001-1.jpeg?resize=1024%2C576&ssl=1', 'En appui sur les avant-bras et les orteils, maintenez votre corps droit comme une planche pendant la durée souhaitée.'),
('Relevé de jambes', 'Abdos', 'https://www.body-burn.com/wp-content/uploads/2023/09/releve-jambes-chaise-romaine-abdominaux-exercice.webp', 'Allongé sur le dos, mains le long du corps, levez les jambes tendues jusqu à la verticale, puis redescendez lentement.'),
('Russian twists', 'Abdos', 'https://liftmanual.com/wp-content/uploads/2023/04/russian-twist.jpg', 'Assis, pieds légèrement soulevés, penchez-vous en arrière et tournez le torse d un côté à l autre, en touchant le sol de chaque côté.'),
('Mountain climbers', 'Abdos', 'https://i0.wp.com/muscu-street-et-crossfit.fr/wp-content/uploads/2022/06/Muscles-Mountain-Climber.002.jpeg?resize=1024%2C576&ssl=1', 'En position de planche, ramenez alternativement chaque genou vers la poitrine dans un mouvement rapide et continu.'),
('Planche latérale', 'Abdos', 'https://www.docteur-fitness.com/wp-content/uploads/2022/01/planche-laterale-exercice-abdos-obliques.jpg', 'En appui sur un avant-bras, corps aligné, soulevez vos hanches du sol et maintenez la position.'),
('Squat', 'Jambes', 'https://julienquaglierini.com/wp-content/uploads/2018/06/squat.jpg', 'Debout, pieds écartés, descendez comme pour vous asseoir en poussant les fesses en arrière. Remontez en poussant sur vos talons.'),
('Fentes', 'Jambes', 'https://muscu-street-et-crossfit.fr/wp-content/uploads/2023/05/Muscles-Squats-Bulgares.001.jpeg', 'Faites un grand pas en avant, fléchissez les deux genoux jusqu à ce que la jambe arrière soit proche du sol. Alternez les jambes.'),
('Presse à cuisses', 'Jambes', 'https://www.docteur-fitness.com/wp-content/uploads/2022/08/presse-a-cuisses-inclinee.gif', 'Assis sur la machine, poussez la plateforme avec vos pieds jusqu à l extension presque complète des jambes, puis revenez.'),
('Leg curl', 'Jambes', 'https://www.body-burn.com/wp-content/uploads/2023/08/leg-curl-allonge-cuisses-ischios-exercice.webp', 'Allongé sur la machine, fléchissez les jambes pour amener vos talons vers vos fesses, puis étendez lentement.'),
('Soulevé de terre', 'Jambes', 'https://www.dravelnutrition.fr/img/cms/BLOG/exercice-souleve-de-terre.jpg', 'Debout devant une barre, fléchissez les genoux et les hanches pour saisir la barre. Redressez-vous en gardant le dos droit.'),
('Mollets debout', 'Jambes', 'https://www.docteur-fitness.com/wp-content/uploads/2021/10/extension-mollets-debout-machine.gif', 'Debout sur le bord d une marche, talons dans le vide, montez sur la pointe des pieds puis redescendez en contrôlant le mouvement.');
            `);
        }
    } catch (error) {
        console.error("Erreur lors de l'initialisation de la base de données :", error.message);
    }
}
export default initializeDatabase;
