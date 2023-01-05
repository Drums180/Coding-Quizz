// DEFINING VARIABLES OF ELEMENTS
var homeElement = document.querySelector(".start");
var quizzElement = document.querySelector(".quizz");
var registrationElement = document.querySelector(".registration");
var scoreElement = document.querySelector(".score")
var questionElement = document.querySelector(".question")

// ARRAY OF QUESTIONS
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["a. stings","b. booleans","c. alerts", "d. numbers"],
        correctAnswer: 3
    },
    {
        question: "Arrays in Javascript can be used to store ______.",
        choices: ["a. numbers and strings","b. other arrays","c. booleas", "d. all of the above"],
        correctAnswer: 4
    },
    {
        question: "The condition in an if / else statement is enclosed with _____.",
        choices: ["a. quotes","b. curly brackets","c. parenthesis", "d. square brackets"],
        correctAnswer: 2
    },
    {
        question: "Sting values must be encoded within ______ when being assigned to variables.",
        choices: ["a. commas","b. curly brackets","c. quotes", "d. parenthesis"],
        correctAnswer: 3
    },
    {
        question: "A very usefull tool using during development and debugging for printing content to the debugger is:",
        choices:["a. JavaScript","b. terminal/bash","c. for loops", "d. console.log"],
        correctAnswer: 4
    }
]

// TIMER
var timeEl = document.querySelector(".time");
var startButton = document.getElementById("goButton");

var secondsLeft = 50;

function setTime() {
    var countDown = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

     if(secondsLeft === 0) {
        clearInterval(countDown);
        timeEl.textContent = "Time is OVER";
        // TODO: CREATE FUNCTION TO REGISTER SCORE
        scoreRegistration();
      }
  
    }, 1000);
}

// Establish variables to control questions and score 
var currentQuestion = 0;
var score = 0;
var askingQuestion = true;

// FUNCTION FOR ASKING A QUESTIONS 
function askQuestion() {
    
    var choices = questions[currentQuestion].choices;
    questionElement.textContent = questions[currentQuestion].question
    for (var i = 0; i < choices.length; i++) {
        var answer = document.getElementById("choice" + (i + 1));
        answer.value = (i + 1);
        answer.textContent = choices[i];
        checkAnswer()
    }

    
}

// FUNCTION FOR VALIDATING ANSWER 
function validation() {
    var answerValue = this.value
    console.log(answerValue) //Checking for bugs
    console.log(questions[currentQuestion].correctAnswer)
    if (answerValue == questions[currentQuestion].correctAnswer){ 
        //The validation in the if must have only two == as the value is registered as string 
        score++;
        console.log("IT WAS CORRECT") //Checking for bugs
        nextQuestion()
    } else {
        nextQuestion()
    }
}

function checkAnswer() {
    var choice1 = document.getElementById("choice1");
    var choice2 = document.getElementById("choice2");
    var choice3 = document.getElementById("choice3");
    var choice4 = document.getElementById("choice4");

    console.log("score is:" + score) //check for bug
    console.log("current question is number:" + currentQuestion) //check for bug

    choice1.addEventListener('click',validation);
    choice2.addEventListener('click',validation);
    choice3.addEventListener('click',validation);
    choice4.addEventListener('click',validation);
}

// FUNCTION TO PASS TO THE NEXT QUESTION 
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion == questions.length) {
      // TODO: CREATE FUNCTION TO REGISTER SCORE
      scoreRegistration();
    } else {
      askingQuestion = true;
      askQuestion();
    }
}

// FUNCTION TO REGISTER THE SCORE 
function scoreRegistration() {
    var finalScore = score * (100/(questions.length))
    quizzElement.style.display = "none"
    registrationElement.style.display = "block"
    
    scoreElement.textContent = "Your score is " + finalScore;
}

// GAME FUNCTION: Run the questions, penalizes time and adds up the score for each question
function startGame() {
    homeElement.style.display = "none";
    quizzElement.style.display = "block";
    
    setTime()

    // Modify the array so the questions change the order every time
    questions.sort(function() {
        return Math.random() - 0.5;
    });
    
    askQuestion()
    
}

startButton.addEventListener('click',startGame);