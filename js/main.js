let listeMots = ["Cachalot", "Pétunia", "Serviette"]
let listePhrases = ["Pas de panique!", "La vie et l'univers", "Merci pour le poisson"]
let score = 0



let choixUtilisateur = prompt(" veillez choisir  la liste  mots ou phrases")
while (choixUtilisateur !== "mots" && choixUtilisateur !== "phrases") {
    choixUtilisateur = prompt(" veillez choisir  la liste  mots ou phrases")
}

if (choixUtilisateur == "mots") {

    for (i = 0; i < listeMots.length; i++) {
        let motUtilisateur = prompt("Entrez le mot " + listeMots[i])
        if (motUtilisateur === listeMots[i]) {
            score = score + 1
        }
    }
    console.log("votre score est de " + score + " sur" + listeMots.length)
} else {
    for (i = 0; i < listePhrases.length; i++) {
        let motUtilisateur = prompt("Entrez la phrase " + listePhrases[i])
        if (motUtilisateur === listePhrases[i]) {
            score = score + 1
        }
    }
    console.log("votre score est de " + score + " sur" + listePhrases.length)
}


function retournerMessageScore(score, nombreQuestion){
    let message = "votre score est de " + score + " sur " +nombreQuestion
    return message
}


let nouveauMessage = retournerMessageScore(5, 10)
console.log(nouveauMessage)