let  listeMots = ["Cachalot", "Pétunia","Serviette"]
let listePhrases = ["Pas de panique!","La vie et l'univers","Merci pour le poisson"]
let score = 0



let choixUtilisateur = prompt(" veuiller choisir ")



for(i = 0; i <listeMots.length; i++ ){
   let motUtilisateur = prompt("Entrez le mot " + listeMots [i])
    if (motUtilisateur === listeMots[i]){
        score = score + 1
    }
}

console.log("votre score est de " + score + " sur" + listeMots.length)






