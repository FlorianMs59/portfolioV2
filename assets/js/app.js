$(document).ready(function(){
    $('.num').counterUp({
      time: 3000
    });
  });

$('.button').tilt({
    speed: 5000, 
    scale: 1.05,
    reset: false,
    glare: true,
    maxGlare: .6
});

/* Text typewriter */
const txtAnim = document.querySelector('.typewriter');

new Typewriter(txtAnim, {
  loop: true,
  deleteSpeed: 30,     
})
.changeDelay(50)
.typeString(", moi c\'est Florian")
.pauseFor(1000)
.typeString('<strong>, Developpeur Front-end !</strong>')
.pause(2000)
.deleteChars(11)
.typeString('<span style="color: #0391F4;"> HTML </span>!')
.pauseFor(2000)
.deleteChars(7)
.typeString('<span style="color:#27ae60;"> CSS </span>!')
.pauseFor(2000)
.deleteChars(5)
.typeString('<span style="color: #ff6910;"> Javascript </span>!')
.pauseFor(2000)
.deleteChars(12)
.typeString('<span style="color: #ea39ff;"> PHP </span>!')
.pauseFor(1500)
.start()
/* Fin TypeWriter */
