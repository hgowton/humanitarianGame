

//Game variables declared
var goalRandom = "";
var currentRoundScore = 0;
var totalScore = 0;
var wins = 0;
var loses = 0;

//variables never appear on screen for user
var dogRandom = "";
var catRandom = "";
var turtleRandom = "";
var birdRandom = "";

function startGame () {
    //Generate random number for goal
    goalRandom = Math.floor(Math.random() * 100) + 19;

    //Generate random number for each animal
    dogRandom = buttonGenerator();
    catRandom = buttonGenerator();
    turtleRandom = buttonGenerator();
    birdRandom = buttonGenerator();

    console.log("Dog: " + dogRandom);
    console.log("Cat: " + catRandom);
    console.log("Turtle: " + turtleRandom);
    console.log("Bird: " + birdRandom);


    //Prints goal for game
    document.getElementById("goalRandom").innerHTML="Your Goal: " + goalRandom
};

//Creates random number for each animal
function buttonGenerator () {
    return Math.floor(Math.random() * 12) + 1;
};


//What happens when you click an animal
    $(".animal-dog").on("click", function() {
        currentRoundScore += dogRandom;
        gameProgress();
    });

    $(".animal-cat").on("click", function() {
        currentRoundScore += catRandom;
        gameProgress();
    });

    $(".animal-turtle").on("click", function() {
        currentRoundScore += turtleRandom;
        gameProgress();
    });

    $(".animal-bird").on("click", function() {
        currentRoundScore += birdRandom;
        gameProgress();
    });

//Determines won, lost, or game in progress
function gameProgress() {
    if (goalRandom === currentRoundScore) {
        wins++;
        currentRoundScore = 0;
        alert ("You Won!");

        //logic where currentRoundScore adds to totalScore
        totalScore += currentRoundScore;

        document.getElementById("wins").innerHTML="Wins: " + wins;
        startGame();
    }
    else if (goalRandom <= currentRoundScore) {
        alert("You Lost!");
        loses++;
        currentRoundScore = 0;
        document.getElementById("loses").innerHTML="Loses: " + loses;
        startGame();

    }

        //NEED TO ADD --- logic where if currentRoundScore is greater than goal == game restarts and loses increments
        console.log(currentRoundScore);

    document.getElementById("totalScore").innerHTML="Current Score: " + currentRoundScore;
};