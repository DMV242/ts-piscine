interface Vehicule{
    marque:string;
    annee:number
}

function isVehicule(obj:any): boolean {
    if( ("marque" in  obj && typeof obj["marque"] === "string")
        &&("annee" in obj && typeof obj["annee"] === "number")
    ){
            return true
    }
    return false
}

const vehicule: Vehicule = {
    annee:2024,
    marque:"Merco"
}
const vehicule2 = {
    annee:"2024",
    marque:"Merco"
}

console.log(isVehicule(vehicule))
console.log(isVehicule(vehicule2))