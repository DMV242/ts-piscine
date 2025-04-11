"use strict";
function afficherInfoProfessionnelle(person) {
    if ("poste" in person) {
        console.log(`Employé: ${person.nom} travaille comme ${person.poste}.`);
    }
    else {
        console.log(`Client: ${person.nom} est associé à l'entreprise ${person.entreprise}.`);
    }
}
const employe1 = {
    nom: "Sarah",
    poste: "DRH"
};
const client1 = {
    nom: "David",
    entreprise: "DePlano"
};
afficherInfoProfessionnelle(employe1);
afficherInfoProfessionnelle(client1);
