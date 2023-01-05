// DEFINING VARIABLES OF ELEMENTS
var home = document.querySelector(".start")
var quizz = document.querySelector(".quizz")

// TIMER
var timeEl = document.querySelector(".time");
var startButton = document.getElementById("goButton");

var secondsLeft = 50;

function setTime() {
    var countDown = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

     if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
}

function lol() {
    home.style.display = "none";
    quizz.style.display = "y";
}

