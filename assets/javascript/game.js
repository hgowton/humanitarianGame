

//Game variables declared
var goalRandom = [];
var currentRoundScore = 0;
var totalScore = 0;
var wins = 0;
var loses = 0;

//Responding to clicks on animal images
$(".animal-image").on("click", function() {
    totalScore++;

document.getElementById("totalScore").innerHTML=totalScore
})

