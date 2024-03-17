let select = document.querySelector("#main");
let twice = document.querySelector(".cursor");

select.addEventListener("mousemove", function(dets){
    twice.style.left = dets.x + "px";
    twice.style.top = dets.y + "px";
})