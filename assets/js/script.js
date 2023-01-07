// DEFINING VARIABLES OF ELEMENTS
//Variables for Start
var homeElement = document.querySelector(".start");
var startButton = document.getElementById("goButton");

//Variables for Quizz
var quizzElement = document.querySelector(".quizz");
var resultElement = document.querySelector(".result");
var questionElement = document.querySelector(".question");

//Variables for Result Registration
var registrationElement = document.querySelector(".registration");
var scoreElement = document.querySelector(".score");
var submitButton = document.querySelector(".submit");
    
//Variables for Highscores
var highscoreButton = document.querySelector(".highscoreButton");
var highscore = document.querySelector(".highscore");
var backButton = document.querySelector(".home");
var ol = document.querySelector(".scores");
var clearButton = document.querySelector(".restart")


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
var secondsLeft = 50;
var countDown;

function setTime() {
    countDown = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

     if(secondsLeft === 0) {
        clearInterval(countDown);
        timeEl.textContent = "Time is OVER";
        scoreRegistration();
      }
  
    }, 1000);
}

function resetTimer() {
    // Reset the timer in case the quizz is stopped
    clearTimeout(countDown);
    secondsLeft = 50;
    timeEl.textContent = "Time: " + secondsLeft;
}

function stopTimer() {
    // Stop the timer in case the quizz ended
    clearTimeout(countDown);
}

// FUNCTION FOR GOING BACK IN HIGHSCORE
function goBack() {
    homeElement.style.display = "block";
    quizzElement.style.display = "none";
    registrationElement.style.display = "none";
    highscore.style.display = "none";

    //Eliminate list elements so they don´t acumulate when entering the highscores
    var list = document.querySelector("ol");
    list.innerHTML = "";
}

// FUNCTION FOR SUBMITTING INITIALS TO HIGHSCORE 
var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

function submit() {
    homeElement.style.display = "none";
    quizzElement.style.display = "none";
    registrationElement.style.display = "none";
    highscore.style.display = "block";

    var textInput = document.getElementById("textInput").value;

    var currentScore = {
        score: finalScore,
        player: textInput,
        time: secondsLeft
    };

    highscores.push(currentScore);
    localStorage.setItem("highscores", JSON.stringify(highscores));
    
    showHighscores();
    displayHighScores();
    resetTimer();
}

function showHighscores() {
    var totalHighscores = localStorage.getItem('highscores');
    console.log (totalHighscores) //Check for bugs
    totalHighscores = JSON.parse(totalHighscores);
    console.log (totalHighscores) //Check for bugs

    for (var i = 0; i < totalHighscores.length; i++) {
        var scoreX = totalHighscores[i].score;
        var playerX = totalHighscores[i].player;
        var timeX = totalHighscores[i].time;

        var li = document.createElement("li");
        li.textContent = playerX + " - " + scoreX  + " - " + timeX + " sec";
        ol.appendChild(li);
    }

}

// FUNCTION TO DISPLAY HIGHSCORES WITH BUTTON 
function displayHighscores() {
    showHighscores();
    
    homeElement.style.display = "none";
    quizzElement.style.display = "none";
    registrationElement.style.display = "none";
    highscore.style.display = "block";

    resetTimer();
}

// FUNCTION FOR CLEARING HIGHSCORE 
function clearHighscore() {
    highscores = [];
    localStorage.setItem("highscores", JSON.stringify(highscores));

    //Eliminate list elements since are no longer in Local Storage
    var list = document.querySelector("ol");
    list.innerHTML = "";
}

// FUNCTION FOR ASKING A QUESTIONS 

// Establish variables to control questions and score 
var currentQuestion = 0;
var score = 0;
var askingQuestion = true;

function askQuestion() {
    
    var choices = questions[currentQuestion].choices;
    questionElement.textContent = questions[currentQuestion].question
    //Clear the element result so it restarts at the beginneng of each question
    for (var i = 0; i < choices.length; i++) {
        var answer = document.getElementById("choice" + (i + 1));
        answer.value = (i + 1);
        answer.textContent = choices[i];
        resultElement.textContent = "" 
        resultElement.style.borderTopWidth = "0px";
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
        // Let the user know the answer is correct
        resultElement.textContent = "Correct!";
        resultElement.style.borderTop = "2px solid var(--result);";
        resultElement.style.borderTopWidth = "2px";
        nextQuestion()
    } else {
        nextQuestion()
        resultElement.textContent = "Wrong!";
        resultElement.style.borderTopWidth = "2px";
        // Let the user know the answer is wrong
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
    setTimeout(function() {
        currentQuestion++;
        if (currentQuestion == questions.length) {
          scoreRegistration();
          stopTimer();

        } else {
          askingQuestion = true;
          askQuestion();
        }
    }, 1000);
    // Function setTimeout allows 1 second to pass / or 1000 miliseconds
}

// FUNCTION TO REGISTER THE SCORE 
var finalScore;

function scoreRegistration() {
    finalScore = score * (100/(questions.length))
    quizzElement.style.display = "none"
    registrationElement.style.display = "block"

    scoreElement.textContent = "Your score is " + finalScore;
}

// FUNCTION TO STORE SCORE AND RESTART QUIZZ 

function displayHighScores() {
    var highscores = [];
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
    for (var i = 0; i < highscores.length; i++) {
      var player = document.createElement("li");
      player.textContent = "-" + highscores[i].score;
      list.appendChild(player);
    }
}

// GAME FUNCTION: Run the questions, penalizes time and adds up the score for each question
function startGame() {
    homeElement.style.display = "none";
    quizzElement.style.display = "block";

    resultElement.textContent = "";
    resultElement.style.borderTopWidth = "0px";
    
    setTime();

    // Modify the array so the questions change the order every time
    questions.sort(function() {
        return Math.random() - 0.5;
    });
    
    askQuestion();
}

startButton.addEventListener("click",startGame);
backButton.addEventListener("click",goBack)
highscoreButton.addEventListener("click",displayHighscores);
submitButton.addEventListener("click",submit);
clearButton.addEventListener("click",clearHighscore);