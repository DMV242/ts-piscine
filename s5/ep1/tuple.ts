function creerScore(label:string,score:number):[string, number]{
    return [label,score]
}

function afficherScore(score:[string, number]){
    console.log(`${score[0]} a le score ${score[1]}`)
}

const score =  creerScore("Joueur1",10);

afficherScore(score);