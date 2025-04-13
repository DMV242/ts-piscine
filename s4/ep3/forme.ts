abstract class Forme{
    abstract calculerSurface():number;
}

class Rectangle extends Forme{

    private largeur:number;
    private longueur:number;

    constructor(largeur:number,longueur:number) {
        super();
        this.largeur = largeur;
        this.longueur = longueur;
    }


    calculerSurface(): number {
        return this.largeur * this.longueur;
    }
}
class Cercle extends Forme{

    private rayon : number;
    constructor(rayon:number){
        super();
        this.rayon = rayon
    }

    public calculerSurface() : number{
        return Math.PI * this.rayon * this.rayon;
    }
}


const cercle = new Cercle(20);
const rectangle = new Rectangle(10,20);

console.log(cercle.calculerSurface());
console.log(rectangle.calculerSurface());
