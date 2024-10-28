let resultRound = [];
let P1Turn = true;
let result = 0;
let p1result;
let p2result;

const newGame = document.querySelector(".article-headline-nytt");
newGame.addEventListener("click", newGameFunction);

const playGame = document.querySelector(".article-headline-play");
playGame.addEventListener("click", playFunction);

const saveGame = document.querySelector(".article-headline-save");
saveGame.addEventListener("click", saveFunction);

function newGameFunction() {
    result = 0;
    P1Turn = true;
    document.querySelector(".player1-total-number").innerHTML = 0;
    document.querySelector(".player2-total-number").innerHTML = 0;
    document.querySelector(".winScreen").classList.add("display-none");
    document.querySelector(".article-headline-play").classList.remove("display-none");
    document.querySelector(".article-headline-save").classList.remove("display-none");
    document.querySelector(".player1-number").innerHTML = "0";
    document.querySelector(".player2-number").innerHTML = "0";
    document.querySelector(".player1-headline").classList.add("headline-border");
    document.querySelector(".player2-headline").classList.remove("headline-border");
    document.querySelector(".div1-1").classList.add("display-none");
    document.querySelector(".div1-3").classList.add("display-none");
    document.querySelector(".div1-4").classList.add("display-none");
    document.querySelector(".div1-5").classList.remove("display-none");
    document.querySelector(".div1-6").classList.add("display-none");
    document.querySelector(".div1-7").classList.add("display-none");
    document.querySelector(".div1-9").classList.add("display-none");
    document.querySelector(".div2-1").classList.add("display-none");
    document.querySelector(".div2-3").classList.add("display-none");
    document.querySelector(".div2-4").classList.add("display-none");
    document.querySelector(".div2-5").classList.remove("display-none");
    document.querySelector(".div2-6").classList.add("display-none");
    document.querySelector(".div2-7").classList.add("display-none");
    document.querySelector(".div2-9").classList.add("display-none");
    console.log("works");
}
function saveFunction() {
    if(P1Turn === true) {
        console.log(resultRound)
        document.querySelector(".player1-total-number").innerHTML = result;
        result = 0;
        resultRound = [];
        P1Turn = false;
        document.querySelector(".player1-headline").classList.remove("headline-border");
        document.querySelector(".player2-headline").classList.add("headline-border");
    } else {
        document.querySelector(".player2-total-number").innerHTML = result;
        result = 0;
        resultRound = [];
        P1Turn = true;
        document.querySelector(".player1-headline").classList.add("headline-border");
        document.querySelector(".player2-headline").classList.remove("headline-border");
        p1result = Number(document.querySelector(".player1-total-number").innerHTML);
        p2result = Number(document.querySelector(".player2-total-number").innerHTML);
        console.log("p1result", p1result)
        console.log("p2result", p2result)
        if(p1result > p2result)  {
            document.querySelector(".winScreen").classList.remove("display-none");
            document.querySelector(".winScreen").innerHTML = "vinnare: Player1 med " + p1result + " Poäng";
        } else if(p1result < p2result) {
            document.querySelector(".winScreen").classList.remove("display-none");
            document.querySelector(".winScreen").innerHTML = "vinnare: Player2 med " + p2result + " Poäng";
        } else {
            document.querySelector(".winScreen").classList.remove("display-none");
            document.querySelector(".winScreen").innerHTML = "draw";
        }
        document.querySelector(".article-headline-play").classList.add("display-none");
        document.querySelector(".article-headline-save").classList.add("display-none");
    }
}
function GameFinished() {
    if(P1Turn === false) {
        console.log("end")
    }
}
function playFunction() {
    result = 0;
    console.log("works");
    document.querySelector(".div1-1").classList.add("display-none");
    document.querySelector(".div1-3").classList.add("display-none");
    document.querySelector(".div1-4").classList.add("display-none");
    document.querySelector(".div1-5").classList.remove("display-none");
    document.querySelector(".div1-6").classList.add("display-none");
    document.querySelector(".div1-7").classList.add("display-none");
    document.querySelector(".div1-9").classList.add("display-none");
    document.querySelector(".div2-1").classList.add("display-none");
    document.querySelector(".div2-3").classList.add("display-none");
    document.querySelector(".div2-4").classList.add("display-none");
    document.querySelector(".div2-5").classList.remove("display-none");
    document.querySelector(".div2-6").classList.add("display-none");
    document.querySelector(".div2-7").classList.add("display-none");
    document.querySelector(".div2-9").classList.add("display-none");
    setTimeout(() => {
        document.querySelector(".div2-1").classList.toggle("display-none");
        document.querySelector(".div2-3").classList.toggle("display-none");
        document.querySelector(".div2-4").classList.toggle("display-none");
        document.querySelector(".div2-5").classList.toggle("display-none");
        document.querySelector(".div2-6").classList.toggle("display-none");
        document.querySelector(".div2-7").classList.toggle("display-none");
        document.querySelector(".div2-9").classList.toggle("display-none");
        setTimeout(() => {
            document.querySelector(".div1-1").classList.toggle("display-none");
            document.querySelector(".div1-5").classList.toggle("display-none");
            document.querySelector(".div1-9").classList.toggle("display-none");
            document.querySelector(".div2-4").classList.toggle("display-none");
            document.querySelector(".div2-5").classList.toggle("display-none");
            document.querySelector(".div2-6").classList.toggle("display-none");
            setTimeout(() => {
                document.querySelector(".div1-5").classList.toggle("display-none");
                document.querySelector(".div2-5").classList.toggle("display-none");
                setTimeout(() => {
                    document.querySelector(".div1-3").classList.toggle("display-none");
                    document.querySelector(".div1-5").classList.toggle("display-none");
                    document.querySelector(".div1-7").classList.toggle("display-none");
                    document.querySelector(".div2-3").classList.toggle("display-none");
                    document.querySelector(".div2-5").classList.toggle("display-none");
                    document.querySelector(".div2-7").classList.toggle("display-none");
                    setTimeout(() => {
                        document.querySelector(".div1-5").classList.toggle("display-none");
                        document.querySelector(".div2-5").classList.toggle("display-none");
                        setTimeout(() => {
                            document.querySelector(".div1-4").classList.toggle("display-none");
                            document.querySelector(".div1-5").classList.toggle("display-none");
                            document.querySelector(".div1-6").classList.toggle("display-none");
                            document.querySelector(".div2-1").classList.toggle("display-none");
                            document.querySelector(".div2-5").classList.toggle("display-none");
                            document.querySelector(".div2-9").classList.toggle("display-none");
                            setTimeout(() => {
                                document.querySelector(".div1-1").classList.add("display-none");
                                document.querySelector(".div1-3").classList.add("display-none");
                                document.querySelector(".div1-4").classList.add("display-none");
                                document.querySelector(".div1-5").classList.add("display-none");
                                document.querySelector(".div1-6").classList.add("display-none");
                                document.querySelector(".div1-7").classList.add("display-none");
                                document.querySelector(".div1-9").classList.add("display-none");
                                document.querySelector(".div2-1").classList.add("display-none");
                                document.querySelector(".div2-3").classList.add("display-none");
                                document.querySelector(".div2-4").classList.add("display-none");
                                document.querySelector(".div2-5").classList.add("display-none");
                                document.querySelector(".div2-6").classList.add("display-none");
                                document.querySelector(".div2-7").classList.add("display-none");
                                document.querySelector(".div2-9").classList.add("display-none");
                                setTimeout(() => {
                                    let diceResult1 = Math.floor(Math.random() * 6);
                                    let diceResult2 = Math.floor(Math.random() * 6);
                                    diceResult1++;
                                    diceResult2++;
                                    if(diceResult1 === 1) {
                                        document.querySelector(".div1-1").classList.add("display-none");
                                        document.querySelector(".div1-3").classList.add("display-none");
                                        document.querySelector(".div1-4").classList.add("display-none");
                                        document.querySelector(".div1-5").classList.remove("display-none");
                                        document.querySelector(".div1-6").classList.add("display-none");
                                        document.querySelector(".div1-7").classList.add("display-none");
                                        document.querySelector(".div1-9").classList.add("display-none");
                                    } else if(diceResult1 === 2) {
                                        document.querySelector(".div1-1").classList.remove("display-none");
                                        document.querySelector(".div1-3").classList.add("display-none");
                                        document.querySelector(".div1-4").classList.add("display-none");
                                        document.querySelector(".div1-5").classList.add("display-none");
                                        document.querySelector(".div1-6").classList.add("display-none");
                                        document.querySelector(".div1-7").classList.add("display-none");
                                        document.querySelector(".div1-9").classList.remove("display-none");
                                    } else if(diceResult1 === 3) {
                                        document.querySelector(".div1-1").classList.remove("display-none");
                                        document.querySelector(".div1-3").classList.add("display-none");
                                        document.querySelector(".div1-4").classList.add("display-none");
                                        document.querySelector(".div1-5").classList.remove("display-none");
                                        document.querySelector(".div1-6").classList.add("display-none");
                                        document.querySelector(".div1-7").classList.add("display-none");
                                        document.querySelector(".div1-9").classList.remove("display-none");
                                    } else if(diceResult1 === 4) {
                                        document.querySelector(".div1-1").classList.remove("display-none");
                                        document.querySelector(".div1-3").classList.remove("display-none");
                                        document.querySelector(".div1-4").classList.add("display-none");
                                        document.querySelector(".div1-5").classList.add("display-none");
                                        document.querySelector(".div1-6").classList.add("display-none");
                                        document.querySelector(".div1-7").classList.remove("display-none");
                                        document.querySelector(".div1-9").classList.remove("display-none");
                                    } else if(diceResult1 === 5) {
                                        document.querySelector(".div1-1").classList.remove("display-none");
                                        document.querySelector(".div1-3").classList.remove("display-none");
                                        document.querySelector(".div1-4").classList.add("display-none");
                                        document.querySelector(".div1-5").classList.remove("display-none");
                                        document.querySelector(".div1-6").classList.add("display-none");
                                        document.querySelector(".div1-7").classList.remove("display-none");
                                        document.querySelector(".div1-9").classList.remove("display-none");
                                    } else {
                                        document.querySelector(".div1-1").classList.remove("display-none");
                                        document.querySelector(".div1-3").classList.remove("display-none");
                                        document.querySelector(".div1-4").classList.remove("display-none");
                                        document.querySelector(".div1-5").classList.add("display-none");
                                        document.querySelector(".div1-6").classList.remove("display-none");
                                        document.querySelector(".div1-7").classList.remove("display-none");
                                        document.querySelector(".div1-9").classList.remove("display-none");
                                    }
                                    if(diceResult2 === 1) {
                                        document.querySelector(".div2-1").classList.add("display-none");
                                        document.querySelector(".div2-3").classList.add("display-none");
                                        document.querySelector(".div2-4").classList.add("display-none");
                                        document.querySelector(".div2-5").classList.remove("display-none");
                                        document.querySelector(".div2-6").classList.add("display-none");
                                        document.querySelector(".div2-7").classList.add("display-none");
                                        document.querySelector(".div2-9").classList.add("display-none");
                                    } else if(diceResult2 === 2) {
                                        document.querySelector(".div2-1").classList.remove("display-none");
                                        document.querySelector(".div2-3").classList.add("display-none");
                                        document.querySelector(".div2-4").classList.add("display-none");
                                        document.querySelector(".div2-5").classList.add("display-none");
                                        document.querySelector(".div2-6").classList.add("display-none");
                                        document.querySelector(".div2-7").classList.add("display-none");
                                        document.querySelector(".div2-9").classList.remove("display-none");
                                    } else if(diceResult2 === 3) {
                                        document.querySelector(".div2-1").classList.remove("display-none");
                                        document.querySelector(".div2-3").classList.add("display-none");
                                        document.querySelector(".div2-4").classList.add("display-none");
                                        document.querySelector(".div2-5").classList.remove("display-none");
                                        document.querySelector(".div2-6").classList.add("display-none");
                                        document.querySelector(".div2-7").classList.add("display-none");
                                        document.querySelector(".div2-9").classList.remove("display-none");
                                    } else if(diceResult2 === 4) {
                                        document.querySelector(".div2-1").classList.remove("display-none");
                                        document.querySelector(".div2-3").classList.remove("display-none");
                                        document.querySelector(".div2-4").classList.add("display-none");
                                        document.querySelector(".div2-5").classList.add("display-none");
                                        document.querySelector(".div2-6").classList.add("display-none");
                                        document.querySelector(".div2-7").classList.remove("display-none");
                                        document.querySelector(".div2-9").classList.remove("display-none");
                                    } else if(diceResult2 === 5) {
                                        document.querySelector(".div2-1").classList.remove("display-none");
                                        document.querySelector(".div2-3").classList.remove("display-none");
                                        document.querySelector(".div2-4").classList.add("display-none");
                                        document.querySelector(".div2-5").classList.remove("display-none");
                                        document.querySelector(".div2-6").classList.add("display-none");
                                        document.querySelector(".div2-7").classList.remove("display-none");
                                        document.querySelector(".div2-9").classList.remove("display-none");
                                    } else {
                                        document.querySelector(".div2-1").classList.remove("display-none");
                                        document.querySelector(".div2-3").classList.remove("display-none");
                                        document.querySelector(".div2-4").classList.remove("display-none");
                                        document.querySelector(".div2-5").classList.add("display-none");
                                        document.querySelector(".div2-6").classList.remove("display-none");
                                        document.querySelector(".div2-7").classList.remove("display-none");
                                        document.querySelector(".div2-9").classList.remove("display-none");
                                    }
                                    console.log("diceResult1", diceResult1);
                                    console.log("diceResult2",diceResult2);
                                    let hitresult = diceResult1 + diceResult2;
                                    console.log("hitresult", hitresult)
                                    resultRound.push(hitresult);
                                    let result2 = 0;
                                    resultRound.forEach( num1 => {
                                        result += num1;
                                        console.log("result", result)  
                                        console.log("p1result", p1result)  
                                    })
                                    if(P1Turn === true) {
                                        document.querySelector(".player1-number").innerHTML = result;
                                        if(diceResult1 === 1 || diceResult2 === 1) {
                                            P1Turn = false;
                                            document.querySelector(".player1-headline").classList.remove("headline-border");
                                            document.querySelector(".player2-headline").classList.add("headline-border");
                                            resultRound = [];
                                            result = 0;
                                            console.log("resultRound", resultRound)
                                            document.querySelector(".player1-number").innerHTML = 0;
                                        }
                                    } else {
                                        document.querySelector(".player2-number").innerHTML = result;
                                        if(diceResult1 === 1 || diceResult2 === 1) {
                                            P1Turn = true;
                                            document.querySelector(".player1-headline").classList.add("headline-border");
                                            document.querySelector(".player2-headline").classList.remove("headline-border");
                                            resultRound = [];
                                            result = 0;
                                            document.querySelector(".player2-number").innerHTML = 0;
                                            document.querySelector(".winScreen").classList.remove("display-none");
                                            document.querySelector(".winScreen").innerHTML = 0;
                                            p1result = Number(document.querySelector(".player1-total-number").innerHTML);
                                            p2result = Number(document.querySelector(".player2-total-number").innerHTML);
                                            if(p1result > p2result)  {
                                                document.querySelector(".winScreen").classList.remove("display-none");
                                                document.querySelector(".winScreen").innerHTML = "vinnare: Player1 med " + p1result + " Poäng";
                                            } else if(p1result < p2result) {
                                                document.querySelector(".winScreen").classList.remove("display-none");
                                                document.querySelector(".winScreen").innerHTML = "vinnare: Player2 med " + p2result + " Poäng";
                                            } else {
                                                document.querySelector(".winScreen").classList.remove("display-none");
                                                document.querySelector(".winScreen").innerHTML = "draw";
                                            }
                                            document.querySelector(".article-headline-play").classList.add("display-none");
                                            document.querySelector(".article-headline-save").classList.add("display-none");
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
