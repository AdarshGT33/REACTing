let rect = document.querySelector("#center");

rect.addEventListener("mousemove", function (details){
    let rectangleLocation = rect.getBoundingClientRect();
    console.log(rectangleLocation);
})