"use strict";
function getProperty(obj, key) {
    return obj[key];
}
const maVoiture = {
    marque: "Merco",
    modele: "X6",
    annee: 2026
};
const annee = getProperty(maVoiture, "annee");
console.log(annee);
