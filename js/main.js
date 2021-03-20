let check = document.getElementById("checkButton");
let start = document.getElementById("startButton");
let currentGuess = document.getElementById("currentGuess");
let form = document.getElementById("form");
let reset = document.getElementById("resetButton");

let target;
let guessArray = []
let feedBack = document.createElement("div");
let history = document.getElementById("history");

function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
}



function GuessHistory(originalArr) {
    let arr = [...originalArr]
    console.log(arr);
    history.innerHTML =  "";
    arr.reverse();
    let mappedArray = arr.map((ele) => {
        return "<tr class= \"table-primary\"> <td> " + ele + "</td> </tr>";
    });

    let html = mappedArray.join('');

    let result = "<table class= \"table table-hover\"> <thead> <tr class= \"table-light\"> <th scope=\"col\">Guess History</th> <tbody>" + html + "</tr> </thead> </tbody> </table>";
    // console.log(html);
    history.innerHTML = result;
}

check.onclick = function () {

    let guess = currentGuess.value;
    // console.log("guess: "+guess +"\n"+"tar: "+target)
    if (guess) {
        guessArray.push(guess);
        GuessHistory(guessArray);
    }
    if (guess === "") {
        currentGuess.setAttribute("class", "form-control is-invalid")

        feedBack.setAttribute("class", "invalid-feedback")
        feedBack.innerText = "Enter a number";

        form.appendChild(feedBack);
    }
    else if (guess < target) {
        // console.log("your guess is low")
        currentGuess.setAttribute("class", "form-control is-invalid")

        feedBack.setAttribute("class", "invalid-feedback")
        feedBack.innerText = "Your guess is low";

        form.appendChild(feedBack);
    }
    else if (guess > target) {
        // console.log("your guess is high")
        currentGuess.setAttribute("class", "form-control is-invalid")

        feedBack.setAttribute("class", "invalid-feedback")
        feedBack.innerText = "Your guess is high";

        form.appendChild(feedBack);
    }
    else {
        // console.log("accepted!")
        currentGuess.setAttribute("class", "form-control is-valid")

        feedBack.setAttribute("class", "valid-feedback")
        feedBack.innerText = "You guessed it right!";

        form.appendChild(feedBack);
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
    currentGuess.setAttribute("class", "form-control col-form-label-lg")
    form.removeChild(feedBack)
    currentGuess.value = "";
    guessArray = [];
}