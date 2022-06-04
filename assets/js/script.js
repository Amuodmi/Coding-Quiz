
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
        stopTimer();
        endGame();
    }
},1000);

}

//stopping timer
function stopTimer(){
 clearInterval(intervalId);
 
}

//Start game function
var startGame = function() {
    console.log("button clicked")
var question1 = document.querySelector("li.question1");
console.log("question1", question1)
question1.textContent = "Commonly used data types do NOT include? ";

var answer1El = document.createElement("p");
var answer2El = document.createElement("p");
var answer3El = document.createElement("p");
var answer4El = document.createElement("p");

answer1El.textContent = "Strings"
answer2El.textContent = "Booleans"
answer3El.textContent = "Alerts"
answer4El.textContent = "Number"

answer1El.onclick = checkAnswer
answer2El.onclick = checkAnswer
answer3El.onclick = checkAnswer
answer4El.onclick = checkAnswer

question1.append(answer1El, answer2El, answer3El, answer4El);

startTimer();

};


//Second question function
function nextQuestion(){
    var question2 = document.querySelector("li.question2");
console.log("question2", question2)
question2.textContent = "Arrays in JavaScript can be used to store ____? ";

var answer1El = document.createElement("p");
var answer2El = document.createElement("p");
var answer3El = document.createElement("p");
var answer4El = document.createElement("p");

answer1El.textContent = "Numbers and Strings"
answer2El.textContent = "Other Arrays"
answer3El.textContent = "Booleans"
answer4El.textContent = "All of the above"

answer1El.onclick = checkAnswer2
answer2El.onclick = checkAnswer2
answer3El.onclick = checkAnswer2
answer4El.onclick = checkAnswer2

question2.append(answer1El, answer2El, answer3El, answer4El);
}

//Checking if first answer is right
function checkAnswer(event){

var clickedAnswer = event.target.innerText
console.log(clickedAnswer);

if ("Alerts" === clickedAnswer){
    console.log("right answer");
   counter = counter + 5;
   clickedAnswer.onclick = "Correct!"
}
else {
    console.log("wrong");
    counter = counter - 5;
}

nextQuestion();
}

//Checking if second answer is right 
function checkAnswer2(event){

    var clickedAnswer = event.target.innerText
    console.log(clickedAnswer);
    
    if ("All of the above" === clickedAnswer){
        console.log("right answer");
        counter = counter + 5;

    endGame();

    }
    else {
        console.log("wrong");
        counter = counter - 5;

    endGame();
    }
    
    }

    //Inputting initials for score 
    var inputEl = document.createElement("input");
    inputEl.setAttribute("type", "text");

    var saveEl = document.createElement("button");
    saveEl.onclick = saveScore 

    function endGame(){
   
    saveEl.textContent = "Save";
    document.body.append(inputEl, saveEl);
    stopTimer();

}


//Saving score funtion
function saveScore (){
var scoreEntryEl = document.createElement("p");
scoreEntryEl.textContent = inputEl.value + " " + "score " + counter + "!"

document.body.append(scoreEntryEl);

console.log("input", scoreEntryEl.textContent);
}

buttonEl.addEventListener("click", startGame);



