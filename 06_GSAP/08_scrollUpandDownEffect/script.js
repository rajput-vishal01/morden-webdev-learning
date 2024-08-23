window.addEventListener("wheel", function (dets) {
  if (dets.deltaY > 0) {
    gsap.to(".bar", {
      transform: "translateX(-200%)",
      repeat: -1,
      duration: 6,
      ease: "none",
    });
    gsap.to(".bar img", {
      rotate: 180,
    });
  } else {
    gsap.to(".bar", {
      transform: "translateX(0%)",
      repeat: -1,
      duration: 5,
      ease: "none",
    });
    gsap.to(".bar img", {
      rotate: 0,
    });
  }
});
