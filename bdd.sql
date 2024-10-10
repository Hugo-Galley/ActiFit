CREATE TABLE User (
    idUser INTEGER PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    urlImgProfil TEXT NOT NULL
);

CREATE TABLE Statistique (
    idStatistique INTEGER PRIMARY KEY,
    taille VARCHAR(255), 
    poids VARCHAR(255),   
    frequence INT,
    objectif TEXT CHECK(objectif IN ('Prendre du poids', 'Stabiliser son poids', 'Perdre du poids')), -- ENUM n'est pas supporté, on utilise CHECK
    idUser INTEGER,
    FOREIGN KEY (idUser) REFERENCES User(idUser) 
);

CREATE TABLE Seance (
    idSeance INTEGER PRIMARY KEY,
    urlImgBanniere TEXT,
    nbrExo INT,
    description TEXT,
    nom VARCHAR(200)
);

CREATE TABLE Exercice (
    idExercice INTEGER PRIMARY KEY,
    nom VARCHAR(100),
    muscleCible VARCHAR(50),
    urlImg TEXT,
    idSeance INT,
    description TEXT,
    FOREIGN KEY (idSeance) REFERENCES Seance(idSeance)
);