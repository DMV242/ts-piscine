// interface Voiture {
//     marque: string;
//     modele: string;
//     annee: number;
//   }


// function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
//     return obj[key];
// }

// const maVoiture : Voiture = {
//     marque:"Merco",
//     modele:"X6",
//     annee: 2026
// }



// const annee = getProperty<Voiture, keyof Voiture>(maVoiture,"annee")

// console.log(annee)