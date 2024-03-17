var h1s = document.querySelectorAll("h1");
var index = 0;
document.querySelector("#main").addEventListener("click", function(){
    gsap.to(h1[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
    });
})