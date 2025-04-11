"use strict";
class Rectangle {
    constructor(largeur, hauteur) {
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
    calculerSurface() {
        return this.largeur * this.hauteur;
    }
}
class Cercle {
    constructor(rayon) {
        this.rayon = rayon;
    }
    calculerSurface() {
        return Math.PI * this.rayon * this.rayon;
    }
}
function afficherSurface(forme) {
    if (forme instanceof Rectangle) {
        forme.calculerSurface();
    }
    else {
        forme.calculerSurface();
    }
}
const cercle = new Cercle(20);
const rectangle = new Rectangle(10, 20);
console.log(cercle.calculerSurface());
console.log(rectangle.calculerSurface());
