
let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "green", "purple"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (!started) {
        console.log("game is started");
        started = true;
        levelup();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 1000);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 1000);
}

function levelup() {
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let randIndx = Math.floor(Math.random() * 4); // Corrected to 4 to include all colors
    let ranColor = btns[randIndx];
    let randbtn = document.querySelector(`.${ranColor}`);
    // console.log(ranColor);
    // console.log(randbtn);
    // console.log(randIndx);
    gameSeq.push(ranColor);
     console.log(gameSeq);
    gameFlash(randbtn);
}
function checkAns(idx){
// console.log("curr level :",level);
// let idx=level-1;
if(userSeq[idx]=== gameSeq[idx]){
   if(userSeq.length==gameSeq.length){
    setTimeout(levelup,1000);
   }
}else{
    h2.innerHTML=`Game over! your Score was <b>${level} </b>  <br> press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },200);

    
    reset();
}
}

function btnPress(){
    // console.log(this);
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
};
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}