// TODO:Animation 1
// function breakTheText(){
//     var h1= document.querySelector('h1')
// var h1Text=h1.textContent

// var splittedtext = h1Text.split("");
// var clutter =''
// splittedtext.forEach(function(e){
//    clutter+=`<span>${e}</span>`

// })

// h1.innerHTML=clutter
// }

// breakTheText()

// gsap.from('h1 span',{
//     y:50,
//     opacity:0,
//     duration:0.5,
//     delay:0.5,
//     stagger:0.15,
//     // stagger:-0.15, for reverse

// })

// gsap.from("h1 span", {
//   y: 50,
//   opacity: 0,
//   duration: 0.5,
//   delay: 0.5,
//   stagger: 0.15,
//   // stagger:-0.15, for reverse
// });

// TODO:Animation2

function breakTheText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;

  var splittedtext = h1Text.split("");
  var halfValue = Math.floor(splittedtext.length / 2);
  var clutter = "";
  splittedtext.forEach(function (e, idx) {
    if (idx<halfValue) {
      clutter += `<span class="a">${e}</span>`;
      
    } else {
      clutter += `<span class="b">${e}</span>`;
      
    }
    
  });

  h1.innerHTML = clutter;
}
breakTheText();

gsap.from("h1 .a", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.15, 
    // stagger:-0.15, for reverse
  });

  gsap.from("h1 .b", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    // stagger: 0.15, for reverse
    stagger:-0.15, 
  });