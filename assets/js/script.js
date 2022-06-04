
var timer = document.getElementById("timer");
var counter = 30;
var countEl = document.getElementById("count");
countEl.textContent = counter;


// Button to start the quiz
var buttonEl = document.querySelector("#firstClick");
var questionsEl = document.querySelector("#questions");
var intervalId 

//Timer for quiz function
function startTimer (){
intervalId = setInterval(function (){
    counter--;
    countEl.textContent = counter;
    if (counter === 0){
        inputDisplayEl.textContent = "Game over!"
        stopTimer();
        endGame();
    }
},1000);

}

//stopping timer
function stopTimer(){
 clearInterval(intervalId);
 
}


var answerDisplay = document.getElementById("answer-display");

//Start game function
var startGame = function() {
    
var question1 = document.querySelector("p.question1");

question1.textContent = "1. Commonly used data types do NOT include? ";

var answer1El = document.createElement("p");
var answer2El = document.createElement("p");
var answer3El = document.createElement("p");
var answer4El = document.createElement("p");

answer1El.textContent = "A) Strings"
answer2El.textContent = "B) Booleans"
answer3El.textContent = "C) Alerts"
answer4El.textContent = "D) Number"

answer1El.onclick = checkAnswer
answer2El.onclick = checkAnswer
answer3El.onclick = checkAnswer
answer4El.onclick = checkAnswer

question1.append(answer1El, answer2El, answer3El, answer4El);

startTimer();

};


//Second question function
function nextQuestion(){
    var question2 = document.querySelector("p.question2");

question2.textContent = "2. Arrays in JavaScript can be used to store ____? ";

var answer1El = document.createElement("p");
var answer2El = document.createElement("p");
var answer3El = document.createElement("p");
var answer4El = document.createElement("p");

answer1El.textContent = "A) Numbers and Strings"
answer2El.textContent = "B) Other Arrays"
answer3El.textContent = "C) Booleans"
answer4El.textContent = "D) All of the above"

answer1El.onclick = checkAnswer2
answer2El.onclick = checkAnswer2
answer3El.onclick = checkAnswer2
answer4El.onclick = checkAnswer2

question2.append(answer1El, answer2El, answer3El, answer4El);
}


//Checking if first answer is right
function checkAnswer(event){

var clickedAnswer = event.target.innerText


if ("C) Alerts" === clickedAnswer){

    answerDisplay.textContent = "Correct! 5 seconds added to the clock.";
    console.log("right answer");
    counter = counter + 5;
   
}
else {
    answerDisplay.textContent = "Wrong choice! 5 seconds deducted from the clock."; 
    console.log("wrong");
    counter = counter - 5;
   
    
}

nextQuestion();
}

//Checking if second answer is right 
function checkAnswer2(event){

    var clickedAnswer = event.target.innerText
    console.log(clickedAnswer);
    
    if ("D) All of the above" === clickedAnswer){
        answerDisplay.textContent= "Correct! Game over. Enter your name, and see your score!";
        console.log("right answer");
        //counter = counter + 5;

    endGame();

    }
    else {
        answerDisplay.textContent = "Wrong choice! Game over. 5 points deducted from your final score. Enter your name, and see your score!";
        console.log("wrong");
        counter = counter - 5;

    endGame();
    }
    
    }

    //Inputting initials for score 
    var inputEl = document.getElementById("input-save");
    var inputDisplayEl = document.getElementById("input-display")
    var saveEl = document.getElementById("save-button");
    saveEl.onclick = saveScore 


    function endGame(){
   
    stopTimer();

}


//Saving score funtion
function saveScore (){
var scoreEntryEl = document.createElement("p");
scoreEntryEl.textContent = inputEl.value + " " + "scored " + counter + " points!"

inputDisplayEl.append(scoreEntryEl)

//document.body.append(scoreEntryEl);

console.log("input", scoreEntryEl.textContent);
}

buttonEl.addEventListener("click", startGame);



