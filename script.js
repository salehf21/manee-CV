
// Typewriter Effect
const text = "Manee Al-Ghwairi";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 120);
  }
}
window.onload = typeWriter;

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);
gsap.from(".card", {
  scrollTrigger: ".card",
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.2
});

// Particles Background
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    size: { value: 3 },
    move: { speed: 1.5 },
    line_linked: { enable: true, color: "#b14aed" },
    color: { value: "#6f42c1" }
  }
});
