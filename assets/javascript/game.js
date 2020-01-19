

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

//variables audio
var audioElementCat = document.createElement("audio");
audioElementCat.setAttribute("src", "assets/sounds/meow.mp3");
var audioElementDog = document.createElement("audio");
audioElementDog.setAttribute("src", "assets/sounds/bark.mp3");
var audioElementTurtle = document.createElement("audio");
audioElementTurtle.setAttribute("src", "assets/sounds/bubble.mp3");
var audioElementBird = document.createElement("audio");
audioElementBird.setAttribute("src", "assets/sounds/tweet.mp3");

//instructions button
$(document).ready(function() {
    $('#show').click(function() {
        $('.menu').toggle("slide");
    })


function startGame () {
    //Generate random number for goal
    goalRandom = Math.floor(Math.random() * 100) + 19;
    currentRoundScore = 0;

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

startGame();


//What happens when you click an animal
    $(".animal-dog").on("click", function() {
        audioElementDog.play();
        currentRoundScore += dogRandom;
        gameProgress();
    });

    $(".animal-cat").on("click", function() {
        audioElementCat.play();
        currentRoundScore += catRandom;
        gameProgress();
    });

    $(".animal-turtle").on("click", function() {
        audioElementTurtle.play();
        currentRoundScore += turtleRandom;
        gameProgress();
    });

    $(".animal-bird").on("click", function() {
        audioElementBird.play();
        currentRoundScore += birdRandom;
        gameProgress();
    });

//Determines won, lost, or game in progress
function gameProgress() {
    if (goalRandom === currentRoundScore) {
        wins++;
        totalScore += currentRoundScore;
        alert ("You Won!");

        //logic where currentRoundScore adds to totalScore

        document.getElementById("wins").innerHTML="Wins: " + wins;
        startGame();
    }
    else if (goalRandom <= currentRoundScore) {
        alert("You Lost!");
        loses++;
        document.getElementById("loses").innerHTML="Loses: " + loses;
        startGame();


    }


        //NEED TO ADD --- logic where if currentRoundScore is greater than goal == game restarts and loses increments
        console.log(currentRoundScore);

    document.getElementById("currentRoundScore").innerHTML="Current Score: " + currentRoundScore;
    document.getElementById("totalScore").innerHTML="Humanitarian Effort: " + totalScore;
};


})