"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NiveauCours = exports.GestionCours = void 0;
exports.isValidEtudiant = isValidEtudiant;
const mon_module_1 = require("../../ep1/mon-module");
var NiveauCours;
(function (NiveauCours) {
    NiveauCours[NiveauCours["Debutant"] = 0] = "Debutant";
    NiveauCours[NiveauCours["Intermediaire"] = 1] = "Intermediaire";
    NiveauCours[NiveauCours["Avance"] = 2] = "Avance";
})(NiveauCours || (exports.NiveauCours = NiveauCours = {}));
class CourSNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = "Cours non trouvé";
    }
}
class StudentNotValidError extends Error {
    constructor(message) {
        super(message);
        this.name = "Le format de l'étudiant n'est pas valide";
    }
}
function trouverElement(elements, predicate) {
    const element = elements.find(predicate);
    return (!element) ? false : element;
}
function isValidEtudiant(obj) {
    if (obj !== null && typeof obj !== "object")
        return false;
    const isIdValid = "id" in obj && typeof obj.id === "number";
    const istitleValid = "nom" in obj && typeof obj.nom === "string";
    const isLevelProperty = "niveau" in obj && typeof obj.niveau === "string";
    return (isIdValid && isLevelProperty && istitleValid);
}
class GestionCours {
    constructor(etudiants, cours) {
        this.cours = cours;
        this.etudiants = etudiants;
    }
    inscrireEtudiant(codeCours, etudiant) {
        try {
            const cours = trouverElement(this.cours, (cours) => cours.code === codeCours);
            if (!cours) {
                throw new CourSNotFoundError("Le code de cours entrée n'est pas valide ");
            }
            if (!isValidEtudiant(etudiant)) {
                throw new StudentNotValidError("L'objet étudiant n'est pas valide");
            }
            GestionCours.inscriptions.push([cours, etudiant]);
            (0, mon_module_1.logger)("Inscription terminé");
        }
        catch (err) {
            if (err instanceof Error) {
                (0, mon_module_1.alerter)(err.message);
            }
            else {
                (0, mon_module_1.alerter)("Une erreur inconnue s'est produite");
            }
        }
    }
    afficherInscriptions() {
        for (const inscription of GestionCours.inscriptions) {
            console.log(`Cours: ${inscription[0].titre}, Étudiant: ${inscription[1].nom}`);
        }
    }
}
exports.GestionCours = GestionCours;
GestionCours.inscriptions = [];
