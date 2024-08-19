const $computer = document.querySelector("#computer");
const $score = document.querySelector("#score");

const $rock = document.querySelector("#rock");
const $scissors = document.querySelector("#scissors");
const $paper = document.querySelector("#paper");
const IMG_URL = "./rsp.png";
$computer.style.background = `url(${IMG_URL}) 0 0`;
$computer.style.backgroundSize = "auto 200px";
const rspX = {
  scissors: "0",
  rock: "-220px",
  paper: "-440px",
};
let computerChoice = "scissors";
const changeComputerHand = () => {
  if (computerChoice === "rock") {
    computerChoice = "scissors";
  } else if (computerChoice === "scissors") {
    computerChoice = "paper";
  } else if (computerChoice === "paper") {
    computerChoice = "rock";
  }
  $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
  $computer.style.backgroundSize = "auto 200px";
};
let intervalId = setInterval(changeComputerHand, 50);
const scoreTable = {
  scissors: 1,
  rock: 0,
  paper: -1,
};
let clickable = true;
let score = 0;
let computerScore = 0;
const clickButton = (event) => {
  if (clickable) {
    clearInterval(intervalId);
    clickable = false;
    const myChoice =
      event.target.textContent === "바위"
        ? "rock"
        : event.target.textContent === "가위"
        ? "scissors"
        : "paper";
    const myScore = scoreTable[myChoice];
    const computerTScore = scoreTable[computerChoice];
    const diff = myScore - computerTScore;
    let message;
    if ([2, -1].includes(diff)) {
      score += 1;
      message = "승리";
    } else if ([-2, 1].includes(diff)) {
      computerScore += 1;
      message = "패배";
    } else {
      message = "무승부";
    }
    $score.textContent = `${message} 당신의 점수: ${score}점 컴퓨터의 점수:${computerScore}점`;
    if (score === 3) {
      alert("당신이 이겼습니다. 축하드려요");
    } else if (computerScore === 3) {
      alert("컴퓨터가 이겼습니다. ㅉㅉㅉ");
    }
    setTimeout(() => {
      clickable = true;
      intervalId = setInterval(changeComputerHand, 50);
    }, 1000);
  }
};

$rock.addEventListener("click", clickButton);
$scissors.addEventListener("click", clickButton);
$paper.addEventListener("click", clickButton);
