var userScore = 0;
var userScoreVal = document.getElementById("userScoreVal");
var compScore = 0;
var comScoreVal = document.getElementById("compScoreVal");
const playerText = document.querySelector("#result-user-stat");
const computerText = document.querySelector("#result-comp-stat");
const resultText = document.querySelector("#result-final-stat");

const btnRock = document.getElementById("r");
const btnPaper = document.getElementById("p");
const btnscissors = document.getElementById("s");
// console.log(Math.floor(Math.random() * 3) + 1);

function computerTurn() {
  const choices = ["r", "p", "s"];
  const randomChoice = Math.floor(Math.random() * 3);
  console.log(randomChoice);
  return choices[randomChoice];
}

function win() {
  userScore++;
  userScoreVal.innerHTML = userScore;
  console.log("user win");
  resultText.innerHTML ="User win"
}
function lose() {
  compScore++;
  comScoreVal.innerHTML = compScore;
  console.log("user lose");
  resultText.innerHTML ="computer win"
}
function draw() {
  console.log("draw");
  resultText.innerHTML ="Draw"
}

function game(userChoice) {
  const computerChoice = computerTurn();
  if(computerChoice=="r"){
    computerText.innerHTML ="Computer : Rock"
  }
  else if (computerChoice=="p"){
    computerText.innerHTML="Computer : Paper"
  }
  else if(computerChoice=="s"){
    computerText.innerHTML="Computer : Scissors"
  }
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(); 
      break;
    case "rp":
    case "ps":
    case "sr":
      lose();
      break;
    case "rr":
    case "pp":
    case "ss":
      draw();
      break;
  }
}

btnRock.addEventListener("click", function (userChoice) {
  game("r");
  playerText.innerHTML="user : Rock"
});
btnPaper.addEventListener("click", function (userChoice) {
  game("p");
  playerText.innerHTML="user : Paper"
});
btnscissors.addEventListener("click", function (userChoice) {
  game("s");
  playerText.innerHTML="user : Scissors"
}); 