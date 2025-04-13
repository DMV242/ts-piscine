"use strict";
class Animal {
    constructor(nom) {
        this.nom = nom;
    }
    seDeplacer() {
        console.log(`L'animal ${this.nom} se déplace`);
    }
}
class Chien extends Animal {
    seDeplacer() {
        console.log(`Le chien ${this.nom} court`);
    }
}
class Chat extends Animal {
    seDeplacer() {
        console.log(`Le chat ${this.nom} saute`);
    }
}
function faireDeplacer(animaux) {
    for (const animal of animaux) {
        animal.seDeplacer();
    }
}
const animaux = [
    new Chien("Rex"),
    new Chat("Felix"),
    new Chien("Max"),
    new Chat("Minou")
];
faireDeplacer(animaux);
