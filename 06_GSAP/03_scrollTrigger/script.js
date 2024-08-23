// properties of scrollTrigger
// - trigger: 'select element you wants to trigger',
// -scroller: " body most of the times",
// -start : "animation start point",
// -end: "animation end point",
// -markers : " Boolean" -helps us to make perfect animtion  we can remove it later,
// -scrub: "Boolean or any no. between 1-5" -to make animation back and forth,
// -pin : pin the page while animating elements
//  ** note: while using pin property make sure trigger must be parent element

gsap.registerPlugin(ScrollTrigger);

// Simplified Animation: Removed pinning and markers
gsap.to("#page2 h1", {
  xPercent: -100, // Move the element -100% along the X-axis
  delay: 2,
  scrollTrigger: {
    trigger: "#page2", // Element to trigger the animation
    scroller: "body", // Scroller element (usually 'body')
    start: "top 0%", // Start when the top of the trigger element is at 80% of the viewport height
    end: "top -150%", // End when the top of the element reaches 20% of the viewport height
    scrub: 2, // Smooth scrubbing effect
    // pin : true,// its breaking the page idk why
  },
});
