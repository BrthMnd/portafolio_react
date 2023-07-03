import ScrollReveal from "scrollreveal";

ScrollReveal().reveal("#section__home", { duration: 1000 });
ScrollReveal().reveal("#presentacion", {
  duration: 1500,
  easing: "linear",
  origin: "button",
  distance: "-100px",
});
ScrollReveal().reveal("#section__about", {
  duration: 4000,
  origin: "top",
  distance: "-100px",
  reset: "true",
});
console.log("hola");
