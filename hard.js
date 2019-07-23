
var answer = parseInt(Math.random() * 1000);

function guessHardLevel() {
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
