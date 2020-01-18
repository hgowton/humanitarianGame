

//Game variables declared
var goalRandom = "";
var currentRoundScore = 0;
var totalScore = 0;
var wins = 0;
var loses = 0;

//Generate random number for goal
var goalRandom = Math.floor(Math.random() * (120 - 19));
document.getElementById("goalRandom").innerHTML="Current Goal: " + goalRandom

//??? Not sure if needed (Crystal Game #07) Current Goal and target number to allow
var dogRandom = Math.floor(Math.random() * (12 - 2));
console.log("dog increase: " + dogRandom);

//Responding to clicks on animal images
$(".animal-image").on("click", function() {
    currentRoundScore += dogRandom;

    //Checks if round score matches goal
    if (goalRandom === currentRoundScore) {
        wins++;
        document.getElementById("wins").innerHTML="Wins: " + wins

        //NEED TO ADD --- logic where currentRoundScore adds to totalScore
    }
    //NEED TO ADD --- logic where if currentRoundScore is greater than goal == game restarts and loses increments
    console.log(goalRandom);
    console.log(currentRoundScore);

document.getElementById("totalScore").innerHTML="Current Score: " + currentRoundScore
})

