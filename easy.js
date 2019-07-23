
var answer = parseInt(Math.random() * 100);
var wrongGuess = 0;

function guessGame() {
    var userNumber = parseInt(document.querySelector("input").value);
    if (answer < userNumber) {
        alert("Guess number is to big");
    } else {
        if (answer > userNumber) {
            alert("Guess number is to small");
        }
        else if (answer == userNumber) {
            alert("congratulation you won!!!")
        }
    }
}
