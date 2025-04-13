interface IAnimal{
    nom:string;
    seDeplacer():void;
}

class Animal implements IAnimal{
    nom: string;

    constructor(nom:string){
        this.nom = nom;
    }

    seDeplacer(): void {
      console.log(`L'animal ${this.nom} se déplace`);
    }

}

class Chien extends Animal{
    seDeplacer(): void {
        console.log(`Le chien ${this.nom} court`);
    }
}

class Chat extends Animal{
    seDeplacer(): void {
        console.log(`Le chat ${this.nom} saute`);
    }
}

function faireDeplacer(animaux: IAnimal[]){
    for(const animal of animaux ){
        animal.seDeplacer()
    }
}
const animaux: IAnimal[] = [
    new Chien("Rex"),
    new Chat("Felix"),
    new Chien("Max"),
    new Chat("Minou")
];

faireDeplacer(animaux);

