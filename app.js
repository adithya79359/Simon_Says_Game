// let gameSeq=[];
// let userSeq=[];

// let btns=["yellow","red","purple","green"];

// let started=false;
// let level=0;

// let h2=document.querySelector("h2");

// document.addEventListener("keydown",function(){
//     if(!started){
//         console.log("game is started");
//         started=true;
//         levelUp();
//     }
// });

// function gameFlash(btn){
//     btn.classList.add("flash");
//     setTimeout(function(){
//         btn.classList.remove("flash");
//     },250);
// }

// function userFlash(btn){
//     btn.classList.add("userflash");
//     setTimeout(function(){
//         btn.classList.remove("userflash");
//     },250);
// }

// function levelUp(){
//      console.log("levelUp called");
//     userSeq=[];
//     level++;
//     h2.innerText=`Level ${level}`;

//     let randIdx = Math.floor(Math.random() * btns.length);
//     let randColor=btns[randIdx];
//     let randBtn=document.querySelector(`.${randColor}`);
//     // console.log(randIdx);
//     // console.log(randColor);
//     // console.log(randBtn);
//     gameSeq.push(randColor);
//     console.log(gameSeq);
//     gameFlash(randBtn);
//     console.log("Game Sequence:", gameSeq);
     
// }

// // function checkAns(idx){
// //     // console.log("curr level :",level);
// //      console.log("idx =", idx);
// //     console.log("gameSeq =", gameSeq);
// //     console.log("userSeq =", userSeq);

// //     if(userSeq[idx]===gameSeq[idx]){
// //         if(userSeq.length==gameSeq.length){
// //             setTimeout(levelUp,1000);
// //         }
// //     }else{
// //         h2.innerHTML=`Game Over! Your score was<b>${level}</b> <br>Press any key to start`;
// //         document.querySelector("body").style.backgroundColor="red";
// //         setTimeout(function (){
// //             document.querySelector("body").style.backgroundColor="white";
// //         },150);

// //         reset();
// //     }
// //     console.log("Comparing:", userSeq[idx], gameSeq[idx]);
// // }

// function checkAns(idx){
//     console.log("idx =", idx);
//     console.log("gameSeq =", gameSeq);
//     console.log("userSeq =", userSeq);
//     console.log("Comparing:", userSeq[idx], gameSeq[idx]);

//     if(userSeq[idx] === gameSeq[idx]){
//         if(userSeq.length === gameSeq.length){
//             setTimeout(levelUp,1000);
//         }
//     }else{
//         h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press any key to start`;
//         document.body.style.backgroundColor = "red";

//         setTimeout(function(){
//             document.body.style.backgroundColor = "white";
//         },150);

//         reset();
//     }
// }
// function btnPress(){
//     // console.log(this);
//     let btn=this;
//     userFlash(btn);
//     let userColor=btn.getAttribute("id");
//     userSeq.push(userColor);
//      console.log("User clicked:", userColor);
// console.log("User Sequence:", userSeq);
//     checkAns(userSeq.length-1);
   
// }

// let allBtns=document.querySelectorAll(".btn");
// for(btn of allBtns){
//     btn.addEventListener("click",btnPress);
// }
 

// function reset(){
//     console.log("RESET CALLED");
//     started=false;
//     gameSeq=[];
//     userSeq=[];
//     level=0;
// }

// console.log("JavaScript Loaded");

let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

// Start the game
document.addEventListener("keydown", function () {
    if (!started) {
        console.log("Game Started");
        started = true;
        levelUp();
    }
});

// Flash generated button
function gameFlash(btn) {
    btn.classList.add("flash");

    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

// Flash user clicked button
function userFlash(btn) {
    btn.classList.add("userflash");

    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

// Increase level
function levelUp() {

    userSeq = [];
    level++;

    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];

    gameSeq.push(randColor);

    console.log("Game Sequence :", gameSeq);

    let randBtn = document.querySelector(`.${randColor}`);

    gameFlash(randBtn);
}

// Check user's answer
function checkAns(idx) {

    if (userSeq[idx] === gameSeq[idx]) {

        // User completed current sequence
        if (userSeq.length === gameSeq.length) {

            setTimeout(levelUp, 1000);
        }

    } else {

        h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press any key to restart`;

        document.body.style.backgroundColor = "red";

        setTimeout(function () {
            document.body.style.backgroundColor = "white";
        }, 200);

        reset();
    }
}

// Button click
function btnPress() {

    let btn = this;

    userFlash(btn);

    let userColor = btn.getAttribute("id");

    userSeq.push(userColor);

    console.log("User Sequence :", userSeq);

    checkAns(userSeq.length - 1);
}

// Add click event to all buttons
let allBtns = document.querySelectorAll(".btn");

for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

// Reset game
function reset() {

    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}