# Coding-Quizz
## Criteria 1: Quizz Start and Timer



```
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
```

![timer](https://user-images.githubusercontent.com/118247139/211243449-ea5de9f5-8859-4fbd-864b-296a04275dba.png)


> ###### Note: 

## Criteria 2: Question after question



```
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
```

![askquestion ](https://user-images.githubusercontent.com/118247139/211243858-fd3f4899-bb1d-4206-aff9-d63378ef622a.png)

## Criteria 3: Time Substraction



```
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
        secondsLeft = secondsLeft - 10;
        // Let the user know the answer is wrong
    }
}
```

![submit](https://user-images.githubusercontent.com/118247139/211244196-91e717b0-c046-4d6d-b9ec-96345469ce77.png)
> ###### Note: This function is also created in order to save the users text input and register it in the Local Storage for later view.

## Criteria 4: Game Over

RECAP DE LOS OTROS 2 PUNTOS / TIMER LLEGA A 0 - ACABA TODAS LAS PREGUNTAS Y LLEGA A SUBMIT

## Criteria 5: Save Score in Local Storage

RECAP DE SUBMIT Y COMO SE UTILIZA JSON PARA PONER EL ARRAY EN LOCAL STORAGE Y DESP CON UN PARSE CAMBIARLO A UN OBJETO MODIFICABLE

```
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
```
![CLEARHIGHSCORES](https://user-images.githubusercontent.com/118247139/211244636-d38b6161-9145-46f7-a3d3-3364ca196a86.png)


## Details and Future Changes 



> Visualize the final page [here](https://drums180.github.io/Coding-Quizz/)
