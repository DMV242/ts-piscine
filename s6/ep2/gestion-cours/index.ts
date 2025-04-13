import { logger,alerter } from "../../ep1/mon-module";

interface Etudiant {
    id: number;
    nom: string;
    niveau: string;
}

interface Cours {
    code: string;
    titre: string;
    niveau: NiveauCours;
}

interface Professeur {
    id: number;
    nom: string;
    matiere: string;
}
enum NiveauCours {
    Debutant,
    Intermediaire,
    Avance,
}

class CourSNotFoundError extends Error{
    constructor(message:string){
        super(message)
        this.name = "Cours non trouvé"
    }
}

class StudentNotValidError extends Error{
    constructor(message:string){
        super(message)
        this.name = "Le format de l'étudiant n'est pas valide"
    }
}

function trouverElement<T>(elements:T[],predicate:(element: T)=>boolean):T | false{
    const element = elements.find(predicate);
    return (!element) ? false : element
}

function isValidEtudiant(obj:any): obj is Etudiant{
    if(obj !== null && typeof obj !== "object" ) return false;
    const isIdValid = "id" in obj && typeof obj.id === "number";
    const istitleValid = "nom" in obj && typeof obj.nom === "string";
    const isLevelProperty = "niveau" in obj && typeof obj.niveau === "string";
    return ( isIdValid && isLevelProperty && istitleValid)
}

class GestionCours{
    private etudiants : Etudiant[];
    private cours : Cours[];
    private static inscriptions: [Cours,Etudiant][] = [];

    constructor(etudiants: Etudiant[] ,cours:Cours[]){
        this.cours = cours;
        this.etudiants = etudiants;

    }

    inscrireEtudiant(codeCours:string,etudiant :Etudiant): void {
        try{
            const cours = trouverElement(this.cours,(cours)=>cours.code === codeCours);
            if (!cours){
                throw new CourSNotFoundError("Le code de cours entrée n'est pas valide ");
            }
            if(!isValidEtudiant(etudiant)){
                throw new StudentNotValidError("L'objet étudiant n'est pas valide")
            }
            GestionCours.inscriptions.push([cours,etudiant]);
            logger("Inscription terminé")

        }catch(err ){
            if(err instanceof Error){
                alerter(err.message)
            }else{
                alerter("Une erreur inconnue s'est produite")
            }

        }

    }

    afficherInscriptions(){
        for(const inscription of GestionCours.inscriptions){
            console.log(`Cours: ${inscription[0].titre}, Étudiant: ${inscription[1].nom}`);
        }
    }
}

export {GestionCours,NiveauCours,Etudiant,isValidEtudiant,Cours}
