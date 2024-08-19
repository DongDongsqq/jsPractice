const $form = document.querySelector("#form");
const $result = document.querySelector("#result");
const $bonus = document.querySelector("#bonus");
$form.addEventListener("submit", (event) => {
  event.preventDefault();
  const string = event.target.input.value;
  if (!string.trim()) {
    return alert("숫자를 입력하세요");
  }
  const myNumbers = string.split(",").map((v) => parseInt(v.trim()));
  if (myNumbers.length !== 6) {
    return alert("숫자 6개를 입력하세요.");
  }
  if (new Set(myNumbers).size !== 6) {
    return alert("중복된 값을 입력했습니다.");
  }
  if (myNumbers.find((v) => v > 45 || v < 1)) {
    return alert("1부터 45까지만 입력할 수 있습니다.");
  }

  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    const random = Math.floor(Math.random() * candidate.length);
    const spliceArray = candidate.splice(random, 1);
    const value = spliceArray[0];
    shuffle.push(value);
  }
  console.log(shuffle);
  const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);
  const bonus = shuffle[6];
  console.log(winBalls, bonus);
  function drawBall(number, $parent) {
    const $ball = document.createElement("div");
    $ball.className = "ball";
    $ball.textContent = number;
    $parent.appendChild($ball);
  }
  for (let i = 0; i < winBalls.length; i++) {
    setTimeout(() => {
      drawBall(winBalls[i], $result);
    }, 1000 * (i + 1));
  }

  setTimeout(() => {
    if (count === 6) {
      alert("1등!");
    } else if (count === 5) {
      if (myNumbers.includes(bonus)) {
        alert("2등!");
      } else alert("3등!");
    } else if (count === 4) {
      alert("4등");
    } else if (count === 3) {
      alert("5등!");
    } else {
      alert("아까비...");
    }
  }, 7050);

  setTimeout(() => {
    drawBall(bonus, $bonus);
  }, 7000);

  let count = 0;
  myNumbers.forEach((my) => {
    if (winBalls.includes(my)) {
      count++;
    }
  });
  $result.replaceChildren();
  $bonus.replaceChildren();
});
