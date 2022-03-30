/*

Assignment:  Build a timed coding quiz with multiple-choice questions.
This app will run in the browser and will feature
dynamically updated HTML and CSS powered by JavaScript code that you write.

```
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```

A user clicks through an interactive coding quiz,
then enters initials to save the high score before
resetting and starting over.

*/

// Questions
var answerKey = [
    {
        question: "Which of the following is a 'scripting' language?",
        choice1: "Heiroglyphics",
        choice2: "HTML",
        choice3: "CSS",
        choice4: "Javascript",
        answer: choice4,
    },
    {
        question: "What does the acronmym, DOM, stand for?",
        choice1: "Document Object Model",
        choice2: "Delivery Optical Model",
        choice3: "Document Origin Makeup",
        choice4: "Delivery Object Makeup",
        answer: choice1,
    },
    {
        question: "Which one of the following is NOT a data type?",
        choice1: "Integer",
        choice2: "Boolean",
        choice3: "Function",
        choice4: "String",
        answer: choice3,
    },
    {
        question: "Which of the following is created with square brackets, [], in JavaScript?",
        choice1: "String",
        choice2: "Method",
        choice3: "Object",
        choice4: "Array",
        answer: choice4,
    },
    {
        question: "What kind of statements control behavior in JavaScript and determine whether or not pieces of code can run?",
        choice1: "DOM Tree",
        choice2: "Conditional",
        choice3: "Scoping",
        choice4: "For Loops",
        answer: choice2,
    },
    {
        question: "________________ let you group a series of statements together to perform a specific task:",
        choice1: "Functions",
        choice2: "Conditional",
        choice3: "Operators",
        choice4: "Attributes",
        answer: choice1,
    },
    {
        question: "Which of the following is NOT a logical operator?",
        choice1: "&&",
        choice2: "||",
        choice3: "!",
        choice4: "//",
        answer: choice4,
    },
    {
        question: "Which math object rounds the number down to the nearest integer?",
        choice1: "math.round()",
        choice2: "math.random()",
        choice3: "math.floor()",
        choice4: "math.PI()",
        answer: choice3,
    },
    {
        question: "What is JQuery?",
        choice1: "A JavaScript INDEX",
        choice2: "A JavaScript LIBRARY",
        choice3: "A JavaScript SPELL-CHECKER",
        choice4: "A JavaScript METHOD",
        answer: choice2,
    },
    {
        question: "When is a function executed?",
        choice1: "When it is declared.",
        choice2: "When it is called.",
        choice3: "When it is declared and after it is called.",
        choice4: "None of the above",
        answer: choice2,
    },
];

var questions = document.querySelector('.question');
var choices = document.querySelector('.choices');
var choice1 = document.getElementById('choice1text');
var choice2 = document.getElementById('choice2text');
var choice3 = document.getElementById('choice3text');
var choice4 = document.getElementById('choice4text');
var countdown = document.getElementById('countdown');

// Click the start quiz button
var startQuiz = document.querySelector("#startquiz");

startQuiz.addEventListener("click", quiz);

// Timer
var countdown = document.getElementById('countdown');

function timer () {
    var timeLeft = 60;
  
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `countdown` to show the remaining seconds
        countdown.textContent = timeLeft;
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `countdown` to an empty string
        countdown.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
      }
    }, 1000);
}

function displayHidden (startQuiz) {
    document.getElementById("quiz").style.display = "block";
    document.getElementById("intro").style.display = "none";
}

function displayHiddenResult (getInitials) {
    document.getElementById("result").style.display = "block";
}


// Start the Quiz
function quiz() {

    // displayhidden
    displayHidden();
    
    // Call the Timer
    timer();

    // Call the Questions
    askQuestions();

}

// Variables for Answers

var userChoice = document.querySelector('.choices');

userChoice.addEventListener("click", calculate);

var correct = 0;


function askQuestions () {

    for (i=0; i < 10; i++) {
        event.preventDefault;
        question.textContent = answerKey[i].question;
        choice1.textContent = answerKey[i].choice1;
        choice2.textContent = answerKey[i].choice2;
        choice3.textContent = answerKey[i].choice3;
        choice4.textContent = answerKey[i].choice4;

        return userChoice;
    }
        
}

function calculate () {
    console.log ("testing");
    if (userChoice === answerKey[i].answer) {
        correct++;
        console.log("Hey");
    }
}

    // WHEN I answer a question, another question is presented.

        // WHEN I answer a question incorrectly [if]

            // THEN time is subtracted from the clock


// WHEN all questions are answered or the timer reaches 0 [if]

    // THEN the game is over

        // WHEN the game is over

        // THEN I prompt user to write in initials.  User clicks submit.

        function getInitials () {
            var initials = document.setElementById

            // startQuiz.addEventListener("click", quiz);
        }

        // Store High Score to gauge progress compared to peers

// Instantly taken to High Score Page

    // User has option to "Go Back / Clear Scores" [HTML]

    // Clear Scores wipes the memory and instantly updates on the HTML page

    function clearScores () {
        var scoreboard = document.querySelector("#clearscores");
    }

    // Go Back returns to index.html