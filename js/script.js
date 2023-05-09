const navbar = document.getElementById("main-navbar");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 0) {
    navbar.classList.add("navbar-after-scroll");
  } else {
    navbar.classList.remove("navbar-after-scroll");
  }
});

const cardmenu1 = document.getElementById("cardmenu1");
const cardbody1 = document.getElementById("cardbody1");
const bodysvg1 = document.getElementById("bodysvg1");
const cardmenu2 = document.getElementById("cardmenu2");
const cardbody2 = document.getElementById("cardbody2");
const bodysvg2 = document.getElementById("bodysvg2");
const cardmenu3 = document.getElementById("cardmenu3");
const cardbody3 = document.getElementById("cardbody3");
const bodysvg3 = document.getElementById("bodysvg3");
const cardmenu4 = document.getElementById("cardmenu4");
const cardbody4 = document.getElementById("cardbody4");
const bodysvg4 = document.getElementById("bodysvg4");

cardmenu1.addEventListener("mouseover", function () {
  bodysvg1.classList.add("bodysvghover");
  cardbody1.classList.add("text-white");
  cardmenu1.classList.remove("cardmenuhoverbot");
  cardmenu1.classList.add("cardmenuhoverup");
});
cardmenu1.addEventListener("mouseleave", function () {
  bodysvg1.classList.remove("bodysvghover");
  cardbody1.classList.remove("text-white");
  cardmenu1.classList.remove("cardmenuhoverup");
  cardmenu1.classList.add("cardmenuhoverbot");
});
// Card Menu Animation
cardmenu2.addEventListener("mouseover", function () {
  bodysvg2.classList.add("bodysvghover");
  cardbody2.classList.add("text-white");
  cardmenu2.classList.remove("cardmenuhoverbot");
  cardmenu2.classList.add("cardmenuhoverup");
});
cardmenu2.addEventListener("mouseleave", function () {
  bodysvg2.classList.remove("bodysvghover");
  cardbody2.classList.remove("text-white");
  cardmenu2.classList.remove("cardmenuhoverup");
  cardmenu2.classList.add("cardmenuhoverbot");
});
// Card Menu Animation
cardmenu3.addEventListener("mouseover", function () {
  bodysvg3.classList.add("bodysvghover");
  cardbody3.classList.add("text-white");
  cardmenu3.classList.remove("cardmenuhoverbot");
  cardmenu3.classList.add("cardmenuhoverup");
});
cardmenu3.addEventListener("mouseleave", function () {
  bodysvg3.classList.remove("bodysvghover");
  cardbody3.classList.remove("text-white");
  cardmenu3.classList.remove("cardmenuhoverup");
  cardmenu3.classList.add("cardmenuhoverbot");
});
// Card Menu Animation
cardmenu4.addEventListener("mouseover", function () {
  bodysvg4.classList.add("bodysvghover");
  cardbody4.classList.add("text-white");
  cardmenu4.classList.remove("cardmenuhoverbot");
  cardmenu4.classList.add("cardmenuhoverup");
});
cardmenu4.addEventListener("mouseleave", function () {
  bodysvg4.classList.remove("bodysvghover");
  cardbody4.classList.remove("text-white");
  cardmenu4.classList.remove("cardmenuhoverup");
  cardmenu4.classList.add("cardmenuhoverbot");
});
// Card Menu Animation

// Card Deals

const carddeals1 = document.getElementById("carddeals1");
const carddeals2 = document.getElementById("carddeals2");
const carddeals3 = document.getElementById("carddeals3");

carddeals1.addEventListener("mouseover", function () {
  carddeals1.classList.remove("carddealshoverbot");
  carddeals1.classList.add("carddealshoverup");
});
carddeals1.addEventListener("mouseleave", function () {
  carddeals1.classList.remove("carddealshoverup");
  carddeals1.classList.add("carddealshoverbot");
});

carddeals2.addEventListener("mouseover", function () {
  carddeals2.classList.remove("carddealshoverbot");
  carddeals2.classList.add("carddealshoverup");
});
carddeals2.addEventListener("mouseleave", function () {
  carddeals2.classList.remove("carddealshoverup");
  carddeals2.classList.add("carddealshoverbot");
});

carddeals3.addEventListener("mouseover", function () {
  carddeals3.classList.remove("carddealshoverbot");
  carddeals3.classList.add("carddealshoverup");
});
carddeals3.addEventListener("mouseleave", function () {
  carddeals3.classList.remove("carddealshoverup");
  carddeals3.classList.add("carddealshoverbot");
});
