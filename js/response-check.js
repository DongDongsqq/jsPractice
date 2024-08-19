const $screen = document.querySelector("#screen");
const $result = document.querySelector("#result");
let startTime;
let endTime;
const records = [];
let timeOutId;
$screen.addEventListener("click", function () {
  if ($screen.classList.contains("waiting")) {
    $screen.classList.replace("waiting", "ready");
    $screen.textContent = "초록색이 되면 클릭하세요";
    timeOutId = setTimeout(function () {
      startTime = new Date();
      $screen.classList.replace("ready", "go");
      $screen.textContent = "클릭하세요!";
    }, Math.floor(Math.random() * 4000) + 2000);
  } else if ($screen.classList.contains("ready")) {
    clearTimeout(timeOutId);
    $screen.classList.replace("ready", "waiting");
    alert("실격, 처음부터 다시 시작");
    records = [];
  } else if ($screen.classList.contains("go")) {
    endTime = new Date();
    const current = endTime - startTime;
    records.push(current);
    const average = records.reduce((a, c) => a + c) / records.length;
    $result.textContent = `현재${current}ms, 평균${average}ms`;
    startTime = null;
    endTime = null;
    if (records.length === 5) {
      alert(`당신의 기록은 ${average}ms`);
      records = [];
    }
    $screen.classList.replace("go", "waiting");
    $screen.textContent = "클릭해서 테스트를 시작하세요";
  }
});
