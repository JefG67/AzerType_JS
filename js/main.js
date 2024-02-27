let listeMots = ["Cachalot", "Pétunia", "Serviette"]
let listePhrases = ["Pas de panique!", "La vie et l'univers", "Merci pour le poisson"]



function retournerMessageScore(score, nombreQuestion) {
    let message = "votre score est de " + score + " sur " + nombreQuestion
    return message
}


function afficherResultat(score, nombreMotsProposes) {

    console.log("votre score est de " + score + " sur " + nombreMotsProposes)

}

function choisirPhraseOuMots() {
    let choixUtilisateur = prompt(' Voulez vous jouer avec les mots (entrez "mots")ou les phrases (entrez "phrases"?')
    while (choixUtilisateur !== "mots" && choixUtilisateur !== "phrases") {
        choixUtilisateur = prompt(" veuillez choisir  la liste  mots ou phrases")
    }
    return choixUtilisateur
}

function lancerBoucleDeJeu(listeProposition) {
    let score = 0
    for (i = 0; i < listeProposition.length; i++) {
        let motUtilisateur = prompt("Entrez le mot " + listeProposition[i])
        if (motUtilisateur === listeProposition[i]) {
            score = score + 1
        }

    }
    return score
}
function lancerJeu(){
    let choix = choisirPhraseOuMots()
    let score = 0
    let nombreMotsProposes = 0

    if (choix === 'mots'){
        score = lancerBoucleDeJeu(listeMots)
        nombreMotsProposes = listeMots.length
    } else {
        score = lancerBoucleDeJeu(listePhrases)
        nombreMotsProposes = listePhrases.length
    }
    afficherResultat(score, nombreMotsProposes)
}

lancerJeu();