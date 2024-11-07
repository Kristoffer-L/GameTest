let resultRound = [];
let P1Turn = true;
let result = 0;
let p1result;
let p2result;
const headlinePlay = document.querySelector(".article-headline-play");
const headlineSave = document.querySelector(".article-headline-save");
const winScreen = document.querySelector(".winScreen");
const p1Headline = document.querySelector(".player1-headline");
const p2Headline = document.querySelector(".player2-headline");
const p1Number = document.querySelector(".player1-number");
const p2Number = document.querySelector(".player2-number");
const p1TotalNumber = document.querySelector(".player1-total-number");
const p2TotalNumber = document.querySelector(".player2-total-number");
const div1_1 = document.querySelector(".div1-1");
const div1_2 = document.querySelector(".div1-3");
const div1_3 = document.querySelector(".div1-4");
const div1_4 = document.querySelector(".div1-5");
const div1_5 = document.querySelector(".div1-6");
const div1_6 = document.querySelector(".div1-7");
const div1_7 = document.querySelector(".div1-9");
const div2_1 = document.querySelector(".div2-1");
const div2_2 = document.querySelector(".div2-3");
const div2_3 = document.querySelector(".div2-4");
const div2_4 = document.querySelector(".div2-5");
const div2_5 = document.querySelector(".div2-6");
const div2_6 = document.querySelector(".div2-7");
const div2_7 = document.querySelector(".div2-9");
const diceArr1 = [div1_1, div1_2, div1_3, div1_4, div1_5, div1_6, div1_7];
const diceArr2 = [div2_1, div2_2, div2_3, div2_4, div2_5, div2_6, div2_7];
const newGame = document.querySelector(".article-headline-nytt");
newGame.addEventListener("click", newGameFunction);

const playGame = document.querySelector(".article-headline-play");
playGame.addEventListener("click", playFunction);

const saveGame = document.querySelector(".article-headline-save");
saveGame.addEventListener("click", saveFunction);
function clearDice(arr) {
  arr.map((item) => {
    item.classList.add("display-none");
  });
}
function diceNum1(arr) {
  arr.map((item) => {
    item.classList.add("display-none");
    arr[3].classList.remove("display-none");
  });
}
function diceNum2(arr) {
  arr.map((item) => {
    item.classList.add("display-none");
    arr[0].classList.remove("display-none");
    arr[6].classList.remove("display-none");
  });
}
function diceNum3(arr) {
  arr.map((item) => {
    item.classList.add("display-none");
    arr[0].classList.remove("display-none");
    arr[3].classList.remove("display-none");
    arr[6].classList.remove("display-none");
  });
}
function diceNum4(arr) {
  arr.map((item) => {
    item.classList.add("display-none");
    arr[0].classList.remove("display-none");
    arr[1].classList.remove("display-none");
    arr[5].classList.remove("display-none");
    arr[6].classList.remove("display-none");
  });
}
function diceNum5(arr) {
  arr.map((item) => {
    item.classList.add("display-none");
    arr[0].classList.remove("display-none");
    arr[1].classList.remove("display-none");
    arr[3].classList.remove("display-none");
    arr[5].classList.remove("display-none");
    arr[6].classList.remove("display-none");
  });
}
function diceNum6(arr) {
  arr.map((item) => {
    item.classList.add("display-none");
    arr[0].classList.remove("display-none");
    arr[1].classList.remove("display-none");
    arr[2].classList.remove("display-none");
    arr[4].classList.remove("display-none");
    arr[5].classList.remove("display-none");
    arr[6].classList.remove("display-none");
  });
}
function newGameFunction() {
  result = 0;
  P1Turn = true;
  p1TotalNumber.innerHTML = 0;
  p2TotalNumber.innerHTML = 0;
  p1Number.innerHTML = 0;
  p2Number.innerHTML = 0;
  p1Headline.classList.add("headline-border");
  p2Headline.classList.remove("headline-border");
  winScreen.classList.add("display-none");
  headlineSave.classList.remove("display-none");
  headlinePlay.classList.remove("display-none");
  p1Headline.classList.add("headline-border");
  p2Headline.classList.remove("headline-border");
  clearDice(diceArr1);
  clearDice(diceArr2);
  div1_4.classList.remove("display-none");
  div2_4.classList.remove("display-none");

  console.log("works");
}
function saveFunction() {
  if (P1Turn === true) {
    console.log(resultRound);
    p1TotalNumber.innerHTML = result;
    result = 0;
    resultRound = [];
    P1Turn = false;
    p1Headline.classList.remove("headline-border");
    p2Headline.classList.add("headline-border");
  } else {
    p2TotalNumber.innerHTML = result;
    result = 0;
    resultRound = [];
    P1Turn = true;
    p1Headline.classList.add("headline-border");
    p2Headline.classList.remove("headline-border");
    p1result = Number(p1TotalNumber.innerHTML);
    p2result = Number(p2TotalNumber.innerHTML);
    console.log("p1result", p1result);
    console.log("p2result", p2result);
    if (p1result > p2result) {
      winScreen.classList.remove("display-none");
      winScreen.innerHTML = "Vinnare: Player1 med " + p1result + " Poäng";
    } else if (p1result < p2result) {
      winScreen.classList.remove("display-none");
      winScreen.innerHTML = "Vinnare: Player2 med " + p2result + " Poäng";
    } else {
      winScreen.classList.remove("display-none");
      winScreen.innerHTML = "draw";
    }
    headlinePlay.classList.add("display-none");
    headlineSave.classList.add("display-none");
  }
}
function playFunction() {
  result = 0;
  console.log("works");
  diceNum1(diceArr1);
  diceNum1(diceArr2);
  setTimeout(() => {
    diceNum6(diceArr2);
    setTimeout(() => {
      diceNum2(diceArr1);
      diceNum5(diceArr2);
      setTimeout(() => {
        diceNum3(diceArr1);
        diceNum4(diceArr2);
        setTimeout(() => {
          diceNum4(diceArr1);
          diceNum3(diceArr2);
          setTimeout(() => {
            diceNum5(diceArr1);
            diceNum2(diceArr2);
            setTimeout(() => {
              diceNum6(diceArr1);
              diceNum1(diceArr2);
              setTimeout(() => {
                clearDice(diceArr1);
                clearDice(diceArr2);
                setTimeout(() => {
                  let diceResult1 = Math.floor(Math.random() * 6);
                  let diceResult2 = Math.floor(Math.random() * 6);
                  diceResult1++;
                  diceResult2++;
                  if (diceResult1 === 1) {
                    diceNum1(diceArr1);
                  } else if (diceResult1 === 2) {
                    diceNum2(diceArr1);
                  } else if (diceResult1 === 3) {
                    diceNum3(diceArr1);
                  } else if (diceResult1 === 4) {
                    diceNum4(diceArr1);
                  } else if (diceResult1 === 5) {
                    diceNum5(diceArr1);
                  } else {
                    diceNum6(diceArr1);
                  }
                  if (diceResult2 === 1) {
                    diceNum1(diceArr2);
                  } else if (diceResult2 === 2) {
                    diceNum2(diceArr2);
                  } else if (diceResult2 === 3) {
                    diceNum3(diceArr2);
                  } else if (diceResult2 === 4) {
                    diceNum4(diceArr2);
                  } else if (diceResult2 === 5) {
                    diceNum5(diceArr2);
                  } else {
                    diceNum6(diceArr2);
                  }
                  console.log("diceResult1", diceResult1);
                  console.log("diceResult2", diceResult2);
                  let hitresult = diceResult1 + diceResult2;
                  console.log("hitresult", hitresult);
                  resultRound.push(hitresult);
                  let result2 = 0;
                  resultRound.forEach((num1) => {
                    result += num1;
                    console.log("result", result);
                    console.log("p1result", p1result);
                  });
                  if (P1Turn === true) {
                    p1Number.innerHTML = result;
                    if (diceResult1 === 1 || diceResult2 === 1) {
                      P1Turn = false;
                      p1Headline.classList.remove("headline-border");
                      p2Headline.classList.add("headline-border");
                      resultRound = [];
                      result = 0;
                      console.log("resultRound", resultRound);
                      p1Number.innerHTML = 0;
                    }
                  } else {
                    p2Number.innerHTML = result;
                    if (diceResult1 === 1 || diceResult2 === 1) {
                      P1Turn = true;
                      p1Headline.classList.add("headline-border");
                      p2Headline.classList.remove("headline-border");
                      resultRound = [];
                      result = 0;
                      p2Number.innerHTML = 0;
                      document.querySelector(".winScreen").classList.remove("display-none");
                      winScreen.innerHTML = 0;
                      p1result = Number(p1TotalNumber.innerHTML);
                      p2result = Number(p2TotalNumber.innerHTML);
                      if (p1result > p2result) {
                        winScreen.classList.remove("display-none");
                        winScreen.innerHTML = "vinnare: Player1 med " + p1result + " Poäng";
                      } else if (p1result < p2result) {
                        winScreen.classList.remove("display-none");
                        winScreen.innerHTML = "vinnare: Player2 med " + p2result + " Poäng";
                      } else {
                        winScreen.classList.remove("display-none");
                        winScreen.innerHTML = "draw";
                      }
                      headlinePlay.classList.add("display-none");
                      headlineSave.classList.add("display-none");
                    }
                  }
                }, 500);
              }, 500);
            }, 500);
          }, 500);
        }, 500);
      }, 500);
    }, 500);
  }, 500);
}
