let scrollcontainer = document.querySelector(".gallary");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");


scrollcontainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollcontainer.scrollLeft += evt.deltaY;
    scrollcontainer.style.scrollBehavior = "smooth";
});


nextbtn.addEventListener("click", () => {
    scrollcontainer.style.scrollBehavior = "smooth";
    scrollcontainer.scrollLeft += 900;
});

backbtn.addEventListener("click", () => {
    scrollcontainer.style.scrollBehavior = "smooth";
    scrollcontainer.scrollLeft -= 900;
});
