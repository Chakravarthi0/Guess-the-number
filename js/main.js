let check = document.getElementById("checkButton");
let start = document.getElementById("startButton");
let currentGuess = document.getElementById("currentGuess");
let form = document.getElementById("form");
let reset = document.getElementById("resetButton");

let target;
let feedBack = document.createElement("div");

function generateRandomNumber(){
    return Math.floor(Math.random() * 100); 
}

check.onclick = function(){

    let guess = currentGuess.value;
    // console.log("guess: "+guess +"\n"+"tar: "+target)
    if(guess === ""){
        currentGuess.setAttribute("class","form-control is-invalid")

        feedBack.setAttribute("class","invalid-feedback")
        feedBack.innerText = "Enter a number";

        form.appendChild(feedBack);
    }
    else if(guess < target){
        // console.log("your guess is low")
        currentGuess.setAttribute("class","form-control is-invalid")

        feedBack.setAttribute("class","invalid-feedback")
        feedBack.innerText = "Your guess is low";

        form.appendChild(feedBack);
    }
    else if(guess > target){
        // console.log("your guess is high")
        currentGuess.setAttribute("class","form-control is-invalid")

        feedBack.setAttribute("class","invalid-feedback")
        feedBack.innerText = "Your guess is high";

        form.appendChild(feedBack);
    }
    else{
        // console.log("accepted!")
        currentGuess.setAttribute("class","form-control is-valid")

        feedBack.setAttribute("class","valid-feedback")
        feedBack.innerText = "You guessed it right!";

        form.appendChild(feedBack);
    }
}

function main(){
    target = generateRandomNumber();
}

start.onclick = function(){
    main();
    check.style.display = "inline";
    reset.style.display = "inline";
    currentGuess.style.display = "inline";
    start.style.display = "none";
}

reset.onclick = function(){
    main();
    currentGuess.setAttribute("class","form-control col-form-label-lg")
    form.removeChild(feedBack)
    currentGuess.value = "";
}