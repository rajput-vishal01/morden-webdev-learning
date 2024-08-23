var tl = gsap.timeline();

tl.to("#box1", {
  x: 1850,
  scale: 1.5,
  backgroundColor:"yellow",
  borderRadius:"50%",
  duration: 2,
  rotate: 180,
  repeat:-1,
  yoyo:true,
});
tl.to("#box2", {
  x: 1850,
  scale:0.7,
  backgroundColor:"green",
  borderRadius:"50%",
  duration: 2.1,
  rotate: 280,
  repeat:-1,
  yoyo:true,
});
tl.to("#box3", {
  x: 1850,
  scale: 1.2,
  backgroundColor:"red",
  borderRadius:"50%",
  duration: 2.2,
  rotate: 360,
  repeat:-1,
  yoyo:true,
});
