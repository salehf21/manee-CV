
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

// tsParticles with mouse interaction
tsParticles.load("tsparticles", {
  background: { color: { value: "transparent" } },
  particles: {
    number: { value: 60 },
    size: { value: 2 },
    move: { enable: true, speed: 1 },
    opacity: { value: 0.25 },
    color: { value: "#9f7aea" },
    links: {
      enable: true,
      distance: 120,
      color: "#b497d6",
      opacity: 0.2
    }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.5 }
    }
  }
});
