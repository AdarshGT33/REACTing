let con = document.querySelector("#container");
let icon = document.querySelector("i");

con.addEventListener('dblclick', function(){
    icon.style.transform = "translate(-50%, -50%) scale(1)";
    setTimeout(function(){
        icon.style.opacity = 0.9;
    },1000)
    setTimeout(function(){
        icon.style.transform = "translate(-50%, -50%) scale(0)"
    },2000)
})