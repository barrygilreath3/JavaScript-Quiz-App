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
        answer: "Javascript"
    },
    {
        question: "What does the acronmym, DOM, stand for?",
        choice1: "Document Object Model",
        choice2: "Delivery Optical Model",
        choice3: "Document Origin Makeup",
        choice4: "Delivery Object Makeup",
        answer: "Document Object Model"
    },
    {
        question: "Which one of the following is NOT a data type?",
        choice1: "Integer",
        choice2: "Boolean",
        choice3: "Function",
        choice4: "String",
        answer: "Function"
    },
    {
        question: "Which of the following is created with square brackets, [], in JavaScript?",
        choice1: "String",
        choice2: "Method",
        choice3: "Object",
        choice4: "Array",
        answer: "Array"
    },
    {
        question: "What kind of statements control behavior in JavaScript and determine whether or not pieces of code can run?",
        choice1: "DOM Tree",
        choice2: "Conditional",
        choice3: "Scoping",
        choice4: "For Loops",
        answer: "Conditional"
    },
    {
        question: "________________ let you group a series of statements together to perform a specific task:",
        choice1: "Functions",
        choice2: "Conditional",
        choice3: "Operators",
        choice4: "Attributes",
        answer: "Functions"
    },
    {
        question: "Which of the following is NOT a logical operator?",
        choice1: "&&",
        choice2: "||",
        choice3: "!",
        choice4: "//",
        answer: "//"
    },
    {
        question: "Which math object rounds the number down to the nearest integer?",
        choice1: "math.round()",
        choice2: "math.random()",
        choice3: "math.floor()",
        choice4: "math.PI()",
        answer: "math.floor()"
    },
    {
        question: "What is JQuery?",
        choice1: "A JavaScript INDEX",
        choice2: "A JavaScript LIBRARY",
        choice3: "A JavaScript SPELL-CHECKER",
        choice4: "A JavaScript METHOD",
        answer: "A JavaScript LIBRARY"
    },
    {
        question: "When is a function executed?",
        choice1: "When it is declared.",
        choice2: "When it is called.",
        choice3: "When it is declared and after it is called.",
        choice4: "None of the above",
        answer: "When it is called."
    },
];


var questions = document.querySelector('.question');
var choices = document.querySelector('.choices');
var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var choice3 = document.getElementById('choice3');
var choice4 = document.getElementById('choice4');
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

function displayHidden () {
    document.getElementById("quiz").style.display = "block";
    document.getElementById("intro").style.display = "none";
}

function displayHiddenResult () {
    document.getElementById("result").style.display = "block";
}


// Start the Quiz
function quiz() {

    // displayhidden
    displayHidden();
    
    // Call the Timer
    timer();

    // Call the Questions
    askQuestions(0);

}

function askQuestions (i) {

    userChoice = document.querySelectorAll(".choices");

    // var i=0;
    console.log(i);

    if (i === 10) {
        return;
    }

    question.textContent = answerKey[i].question;

    choice1.textContent = "1. "+answerKey[i].choice1;
    choice1.setAttribute("data-answer", answerKey[i].choice1);
    choice1.onclick=function() {

        var userChoice = choice1.getAttribute("data-answer");
        if (userChoice === answerKey[i].answer) {
            console.log("correct")
            i++;
            return askQuestions(i);
        }
        else {
            i++;
            return askQuestions(i);
        }


    }

    choice2.textContent = "2. "+answerKey[i].choice2;
    choice2.setAttribute("data-answer", answerKey[i].choice2);
    choice2.onclick=function() {
        var userChoice = choice2.getAttribute("data-answer");
        if (userChoice === answerKey[i].answer) {
            console.log("correct")
            i++;
            return askQuestions(i);
        }
        else {
            i++;
            return askQuestions(i);
        }


    }
    
    choice3.textContent = "3. "+answerKey[i].choice3;
    choice3.setAttribute("data-answer", answerKey[i].choice3);
    choice3.onclick=function() {
        var userChoice = choice3.getAttribute("data-answer");
        if (userChoice === answerKey[i].answer) {
            console.log("correct")
            i++;
            return askQuestions(i);
        }
        else {
            i++;
            return askQuestions(i);
        }



    }
    choice4.textContent = "4. "+answerKey[i].choice4;
    choice4.setAttribute("data-answer", answerKey[i].choice4);
    choice4.onclick=function() {
        var userChoice = choice4.getAttribute("data-answer");
            console.log(userChoice, answerKey[i])
        if (userChoice === answerKey[i].answer) {
            console.log("correct")
            i++;
            return askQuestions(i);
        }
        else {
            i++;
            return askQuestions(i);
        }


    }


    // if (userChoice === answerKey.answer) {
    //     console.log ("correct");
    // } 
}

function saveAnswers() {
    localStorage.setItem(questionKey, choice1);

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

        }

        // Store High Score to gauge progress compared to peers

// Instantly taken to High Score Page

    // User has option to "Go Back / Clear Scores" [HTML]

    // Clear Scores wipes the memory and instantly updates on the HTML page

    function clearScores () {
        var scoreboard = document.querySelector("#clearscores");
    }

    // Go Back returns to index.html