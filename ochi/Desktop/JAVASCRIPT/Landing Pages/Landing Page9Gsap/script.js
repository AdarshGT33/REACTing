let te = gsap.timeline({
    repeat: -1
})
te
.to(".imageContainer", {
    width: "100%",
    ease: Expo.easeInOut,
    stagger: 2
}, "ram")
.to(".text h1",{
    ease: Expo.easeInOut,
    stagger: 2,
    top: 0
}, "ram")
.to(".text h1",{
    delay: 2,
    ease: Expo.easeInOut,
    stagger: 2,
    top: "-100%"
}, "ram")