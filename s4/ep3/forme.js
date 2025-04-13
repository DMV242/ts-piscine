"use strict";
class Forme {
}
class Rectangle extends Forme {
    constructor(largeur, longueur) {
        super();
        this.largeur = largeur;
        this.longueur = longueur;
    }
    calculerSurface() {
        return this.largeur * this.longueur;
    }
}
class Cercle extends Forme {
    constructor(rayon) {
        super();
        this.rayon = rayon;
    }
    calculerSurface() {
        return Math.PI * this.rayon * this.rayon;
    }
}
const cercle = new Cercle(20);
const rectangle = new Rectangle(10, 20);
console.log(cercle.calculerSurface());
console.log(rectangle.calculerSurface());
