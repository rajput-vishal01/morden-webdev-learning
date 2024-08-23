var intialpath = "M 10 100 Q 250 100 490 100"; //paths of svg
var finalpath = "M 10 100 Q 250 100 490 100";

var string = document.querySelector("#svg");

string.addEventListener("mousemove", function (dets) {
  path = `M 10 100 Q ${dets.x} ${dets.y} 490 100`;

  gsap.to("path", {
    attr: {
      d: path,
    },
    duration: 0.3,
    ease: "power3.out", //visit gsap ease to understand momre about it
  });
});

string.addEventListener("mouseleave", function (dets) {
  gsap.to("path", {
    attr: {
      d: finalpath,
    },
    duration: 1,
    ease: "elastic.out(1,0.2)",
  });
});
