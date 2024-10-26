const Areas = {
    area1: {
        btn1: "area2",
        btn2: "area3",
        btn3: "area4"
    },
    area2: {
        btn1: "area1",
        btn2: "area3",
        btn3: "area4"
    },
    area3: {
        btn1: "area1",
        btn2: "area2",
        btn3: "area4"
    },
    area4: {
        btn1: "area1",
        btn2: "area2",
        btn3: "area3"
    }
}
document.querySelector(".btn-1").onclick = function() {btn1Function()};
document.querySelector(".btn-2").onclick = function() {btn2Function()};
document.querySelector(".btn-3").onclick = function() {btn3Function()};
let btn1Count = 0;

function btn1Function() {
    if(btn1Count === 0) {
        document.querySelector(".section-headline_area").innerHTML = "Area: 2"
        document.querySelector(".btn-1").innerHTML = Areas.area2.btn1;
        document.querySelector(".btn-2").innerHTML = Areas.area2.btn2;
        document.querySelector(".btn-3").innerHTML = Areas.area2.btn3;
        btn1Count++;
        console.log("1")
    } else {
        document.querySelector(".section-headline_area").innerHTML = "Area: 1"
        document.querySelector(".btn-1").innerHTML = Areas.area1.btn1;
        document.querySelector(".btn-2").innerHTML = Areas.area1.btn2;
        document.querySelector(".btn-3").innerHTML = Areas.area1.btn3;
        btn1Count = 0;
        console.log("1")
    }
}
function btn2Function() {
    if(btn1Count === 0) {
        document.querySelector(".section-headline_area").innerHTML = "Area: 3"
        document.querySelector(".btn-1").innerHTML = Areas.area3.btn1;
        document.querySelector(".btn-2").innerHTML = Areas.area3.btn2;
        document.querySelector(".btn-3").innerHTML = Areas.area3.btn3;
        btn1Count++;
        console.log("1")
    } else {
        document.querySelector(".section-headline_area").innerHTML = "Area: 2"
        document.querySelector(".btn-1").innerHTML = Areas.area2.btn1;
        document.querySelector(".btn-2").innerHTML = Areas.area2.btn2;
        document.querySelector(".btn-3").innerHTML = Areas.area2.btn3;
        btn1Count = 0;
        console.log("1")
    }
}
function btn3Function() {
    if(btn1Count === 0) {
        document.querySelector(".section-headline_area").innerHTML = "Area: 4"
        document.querySelector(".btn-1").innerHTML = Areas.area4.btn1;
        document.querySelector(".btn-2").innerHTML = Areas.area4.btn2;
        document.querySelector(".btn-3").innerHTML = Areas.area4.btn3;
        btn1Count++;
        console.log("1")
    } else {
        document.querySelector(".section-headline_area").innerHTML = "Area: 3"
        document.querySelector(".btn-1").innerHTML = Areas.area3.btn1;
        document.querySelector(".btn-2").innerHTML = Areas.area3.btn2;
        document.querySelector(".btn-3").innerHTML = Areas.area3.btn3;
        btn1Count = 0;
        console.log("1")
    }
}