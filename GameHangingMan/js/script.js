let wordArray = [];
let word;
const btnChoice = document.querySelector(".btnStart");
btnChoice.addEventListener("click", wordChoice);
function wordChoice() {
  word = document.querySelector(".wordInput").value;
  console.log(word);
  wordArray = word.split("");
  showWord();
}
function showWord() {
  const divs = document.createElement("div");
  document.body.appendChild(divs);
  const para = document.createElement("p");
  para.innerText = word;
  document.querySelector("div").appendChild(para);
  console.log(wordArray);
}
