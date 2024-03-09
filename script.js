var hitrn ="";
var score = 0 ;
var counter= 0;

function MakeBubble(){
    var clutter = " ";
for(var i =1; i<= 264;i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
};

document.querySelector(".pbtm").innerHTML = clutter;
}

function runTimer(){
    var timer = 60;

    var time = setInterval(function(){
        if (timer > 0){
            timer --;
            document.querySelector("#timeint").textContent = timer ;
        }
        else {
            clearInterval(time);
            document.querySelector(".pbtm").innerHTML =`<h1>Game Over</h1>`;
        }
    },1000);
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitint").textContent = hitrn;
}

function increaseScore(){
    score += 10;
    document.querySelector("#scoreint").textContent = score;
}

function Start(){
    document.querySelector(".pbtm")
.addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);

    if(clickednum === hitrn){
        increaseScore();
        MakeBubble();
        getNewHit();
    }
    else{
        MakeBubble();
        getNewHit();
    }
});
}

var clicked = document.querySelector("button");
clicked.addEventListener("click",function(){
    runTimer();
    MakeBubble();
    getNewHit();
    Start();

    clicked.style.color = "#000";
    clicked.style.border = "#000";
    clicked.style.backgroundColor = "white" ;
});


