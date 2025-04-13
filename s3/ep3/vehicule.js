"use strict";
function isVehicule(obj) {
    return ("marque" in obj &&
        typeof obj.marque === "string" &&
        "annee" in obj &&
        typeof obj.annee === "number");
}
function afficherVehicule(obj) {
    if (isVehicule(obj)) {
        console.log(`Le véhicule ${obj.marque} de l'année ${obj.annee} est valide.`);
    }
    else {
        console.log("Objet invalide pour un véhicule.");
    }
}
// Tests
const vehiculeValide = {
    annee: 2024,
    marque: "Merco"
};
const vehiculeInvalide = {
    annee: "2024", // string au lieu de number
    marque: "Merco"
};
console.log("Test avec un véhicule valide :");
afficherVehicule(vehiculeValide);
console.log("\nTest avec un véhicule invalide :");
afficherVehicule(vehiculeInvalide);
