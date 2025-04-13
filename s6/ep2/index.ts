import { GestionCours, NiveauCours } from "./gestion-cours/index";

// Création des étudiants
const etudiants = [
    {
        id: 1,
        nom: "Jean Dupont",
        niveau: "Licence"
    },
    {
        id: 2,
        nom: "Marie Martin",
        niveau: "Master"
    },
    {
        id: 3,
        nom: "Pierre Durant",
        niveau: "Licence"
    }
];

// Création des cours
const cours = [
    {
        code: "INFO101",
        titre: "Introduction à la programmation",
        niveau: NiveauCours.Debutant
    },
    {
        code: "INFO201",
        titre: "Algorithmes avancés",
        niveau: NiveauCours.Intermediaire
    },
    {
        code: "INFO301",
        titre: "Architecture des systèmes",
        niveau: NiveauCours.Avance
    }
];

// Création d'une instance de GestionCours
const gestionCours = new GestionCours(etudiants, cours);

// Test des inscriptions
gestionCours.inscrireEtudiant("INFO101", etudiants[0]); // Devrait réussir
gestionCours.inscrireEtudiant("INFO201", etudiants[1]); // Devrait réussir
gestionCours.inscrireEtudiant("INFO999", etudiants[2]); // Devrait échouer (cours inexistant)

// Test avec un étudiant invalide
gestionCours.inscrireEtudiant("INFO101", {
    id: "4", // Type invalide (string au lieu de number)
    nom: "Test Invalide",
    niveau: "Licence"
} as any);

// Affichage des inscriptions
gestionCours.afficherInscriptions();
