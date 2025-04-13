declare module "gestion-cours" {
    export class GestionCours {

        constructor(etudiants:Etudiant[],cours:Cours[]);
        inscrireEtudiant(codeCours:string,etudiant:Etudiant):void;
        afficherInscriptions():void;
    }

    export enum NiveauCours {
            Debutant,
            Intermediaire,
            Avance,
        }

    export interface Etudiant {
        id: number;
        nom: string;
        niveau: string;
    }

    export interface Cours {
        code: string;
        titre:string
        niveau: NiveauCours;
    }
}