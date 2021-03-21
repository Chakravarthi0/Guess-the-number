let check = document.getElementById("checkButton");
let start = document.getElementById("startButton");
let currentGuess = document.getElementById("currentGuess");
let form = document.getElementById("form");
let reset = document.getElementById("resetButton");

let target;
let guessArray = []
let feedBack = document.getElementById("feedback");
let message = document.getElementById("message");
let history = document.getElementById("history");

function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
}



function GuessHistory(originalArr) {
    let arr = [...originalArr]
    history.innerHTML =  "";
    arr.reverse();
    let mappedArray = arr.map((ele) => {
        return "<tr class= \"table-primary\"> <td> " + ele + "</td> </tr>";
    });

    let html = mappedArray.join('');

    let result = "<table class= \"table table-hover\"> <thead> <tr class= \"table-light\"> <th scope=\"col\">Guess History</th> <tbody>" + html + "</tr> </thead> </tbody> </table>";

    history.innerHTML = result;
}

check.onclick = function () {

    let guess = currentGuess.value;
    
    feedBack.style.display = "inline";
  
    if (guess) {
        guessArray.push(guess);
        GuessHistory(guessArray);
    }
    if (guess === "") {

        message.innerHTML = "Please enter a number";
    }
    else if (guess < target) {

        message.innerHTML = "Your guess is too low";

    }
    else if (guess > target) {

        message.innerHTML = "Your guess is too high";
    }
    else {

        message.setAttribute("class","alert alert-success col-md-6 offset-md-3")
        message.innerHTML = "You guessed it right";
        check.style.display = "none";
        reset.innerText = "Start new game";
    }
}

function main() {
    target = generateRandomNumber();
}

start.onclick = function () {
    main();
    check.style.display = "inline";
    reset.style.display = "inline";
    currentGuess.style.display = "inline";
    start.style.display = "none";
}

reset.onclick = function () {
    main();
    currentGuess.setAttribute("class", "form-control col-form-label-lg");
    message.setAttribute("class","alert alert-warning col-md-6 offset-md-3")
    currentGuess.value = "";
    guessArray = [];
    history.innerHTML =  "";
    reset.innerText = "Reset";
    check.style.display = "inline";
    feedBack.style.display = "none";
}