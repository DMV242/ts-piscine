"use strict";
function creerScore(label, score) {
    return [label, score];
}
function afficherScore(score) {
    console.log(`${score[0]} a le score ${score[1]}`);
}
const score = creerScore("Joueur1", 10);
afficherScore(score);
