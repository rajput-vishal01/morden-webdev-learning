var tl = gsap.timeline();
var menuBtn = document.querySelector("#nav i");
var backBtn = document.querySelector("#full i");

tl.to("#full", {
  right: 0,
  duration: 1,
  ease: "power.out",
});

tl.from("#full h4", {
  x: 140,
  duration: 0.39,
  stagger: 0.3,
  opacity: 0,
  ease: "power.out3",
});

tl.pause();

menuBtn.addEventListener("click", function () {
  tl.play();
});

backBtn.addEventListener("click", function () {
  tl.reverse();
});
