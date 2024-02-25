let  listeMots = ["Cachalot", "Pétunia","Serviette"]
let score = 0


let motUtilisateur = prompt("Entrez le mot " + listeMots [0])

if (motUtilisateur === listeMots[0]){
    console.log("bravo")
    score = score + 1
}
else{
    console.log("Erreur")
}

motUtilisateur = prompt("Entrez le mot " + listeMots [1])
if (motUtilisateur === listeMots[1]){
    console.log("bravo")
     score = score + 1
}
else{
    console.log("Erreur")
}

motUtilisateur = prompt("Entrez le mot " + listeMots [2])
if (motUtilisateur === listeMots[2]){
    console.log("bravo")
     score = score + 1
}
else{
    console.log("Erreur")
}


console.log(score)