let hitRn = 0;
let score = 0;

const makeBubble = () => {
    let clutter = "";
    for (let i = 1; i <= 168; i++){
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbottom").innerHTML = clutter;
}

const timeDuration = () => {
    let timer = 60;
    const timerVal = setInterval(function () {
        if (timer>0){
            timer--;
            document.querySelector("#timeval").textContent = timer;
        }else{
            clearInterval(timerVal);
            document.querySelector("#pbottom").innerHTML = `<h1>Game is Over \ud83d\udc4d</h1>`;
        }
    }, 1000)
}

const changeScoreVal = () => {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

const getHit = () => {
    hitRn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitRn;
}

document.querySelector("#pbottom").addEventListener("click", function(dets) {
    var clickedBub = Number(dets.target.textContent);
    if (clickedBub === hitRn){
        changeScoreVal();
        makeBubble();
        getHit();
    }
});

makeBubble();
timeDuration();
getHit();