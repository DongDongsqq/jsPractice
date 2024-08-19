const { body } = document;
const $table = document.createElement("table");
const $result = document.createElement("div");

const rows = [];
for (let i = 1; i <= 3; i++) {
  const $tr = document.createElement("tr");
  const cells = [];
  for (let j = 1; j <= 3; j++) {
    const $td = document.createElement("td");
    cells.push = [$td];
    $tr.appendChild($td);
  }
  rows.push(cells);
  $table.appendChild($tr);
}
body.appendChild($table);
body.appendChild($result);

let turn = "0";
const callback = (event) => {
  if (event.target.textContent !== "") {
    console.log("빈칸이 아닙니다.");
    event.target.textContent = turn;
    turn = turn === "X" ? "0" : "X";
  }
};
