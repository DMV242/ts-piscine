interface Employe{
    nom:string,
    poste:string
}

interface Client{
    nom:string,
    entreprise:string
}

type PersonnePro = Employe | Client;

function afficherInfoProfessionnelle(person:PersonnePro){
    if("poste" in person){
        console.log(`Employé: ${person.nom} travaille comme ${person.poste}.`)
    }else{
        console.log(`Client: ${person.nom} est associé à l'entreprise ${person.entreprise}.`)
    }
}

const employe1 : Employe = {
    nom:"Sarah",
    poste:"DRH"
}

const client1 : Client = {
    nom:"David",
    entreprise:"DePlano"
}

afficherInfoProfessionnelle(employe1);
afficherInfoProfessionnelle(client1);