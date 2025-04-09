"use strict";
function afficherInfoProfessionnelle(person) {
    if ("poste" in person) {
        console.log(`Employé: ${person.nom} travaille comme ${person.poste}.`);
    }
    else {
        console.log(` Client: ${person.nom} est associé à l'entreprise ${person.entreprise}.`);
    }
}
const person1 = {
    nom: "David",
    entreprise: "DePlano"
};
const person2 = {
    nom: "Sarah",
    poste: "DRH"
};
afficherInfoProfessionnelle(person1);
afficherInfoProfessionnelle(person2);
