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
  wordArray.map((item) => {
    let index = wordArray.indexOf(item);
    console.log(index)
    const para = document.createElement("p");
    para.innerText = item;
    document.querySelector("div").appendChild(para);
  });
  const sections = document.createElement("section");
  document.body.appendChild(sections);
  const input = document.createElement("input");
  document.querySelector("section").appendChild(input);
  console.log(wordArray);
}
