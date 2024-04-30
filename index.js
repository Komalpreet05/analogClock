setInterval(setClock, 1000);


const hourHand = document.querySelector('[data-hour-hand]');
const secondHand = document.querySelector('[data-second-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}
setClock();

// let second = document.getElementById("two");
// second.addEventListener("click", () => {
//     alert("clicked");
// })


//default
const clock = document.getElementById("clock");
clock.style.backgroundColor = "black";
clock.style.color = "white";
document.body.style.background = "rgb(193 223 189)";

//color selection
// let first = document.getElementById("one");
// first.addEventListener("click", () => {
//     clock.style.backgroundColor = "yellow";
//     clock.style.color = "black";
//     document.body.style.background = "aqua";
// })

//dropdwon access
let part = document.querySelector("#part");

console.log(part.value);
// part.addEventListener("click", () => {
//     console.log("ch", part.value);

// })
// console.log(part.value);

//test
let head = document.getElementById("head");
let numbersAll = document.querySelectorAll(".number");
let colorPick = document.getElementById("favcolor");
colorPick.addEventListener("input", () => {
    console.log("ok", colorPick.value);
    //clock.style.backgroundColor = colorPick.value;
    if (part.value === "clockBackground") {
        backColorChange(clock);
    }
    if (part.value === "webBackground") {
        backColorChange(document.body);
    }
    if (part.value === "numbers") {
        numbersAll.forEach(num => {
            colorChange(num);
        })
    }
    if (part.value === "border") {
        clock.style.border = `5px solid ${colorPick.value}`;
    }

})


function backColorChange(partColor) {
    partColor.style.backgroundColor = colorPick.value;
}

function colorChange(partColor) {
    partColor.style.color = colorPick.value;
}
