// Header change color on --mouseenter--
const navBar = document.querySelector(".main-navigation");

navBar.addEventListener("mouseenter", () => {
  navBar.style.backgroundColor = "pink";
});

// Header change color on --mouseleave--
navBar.addEventListener("mouseleave", () => {
  navBar.style.backgroundColor = "grey";
});

// Fun Bus scale increae on --dblclick--
const funBusImg = document.querySelector(".intro img");

funBusImg.addEventListener("dblclick", () => {
  funBusImg.style.transform = "scale(1.2)";
  funBusImg.style.transition = "transform 0.3s";
});

// Body change color on --load--
window.addEventListener("load", () => {
  alert("ALERT MESSAGE!!!");
});

// Images scale on --scroll--
const images = document.querySelector(".intro img");

window.addEventListener("scroll", () => {
  images.style.transform = "scale(0.8)";
});

// Sections change background color on --click--
document.querySelectorAll("section").forEach(ele => {
  ele.addEventListener("click", () => {
    ele.style.backgroundColor = "lightgray";
  });
});

// h2/h4 change color on --keydown--
document.querySelectorAll("h2, h4").forEach(ele => {
  window.addEventListener("keydown", () => {
    ele.style.color = "blue";
  });
});

// Body changes background color on --mouseover--
const footer = document.querySelector("footer");
const body = document.querySelector("body");

footer.addEventListener("mouseover", () => {
  console.log(footer);
  body.style.backgroundColor = "lightGreen";
});

// Paragraphs turn to green on --copy--
document.querySelectorAll("p").forEach(element => {
  element.addEventListener("copy", () => {
    element.style.color = "green";
  });
});

// Images are resized on --keyup--
document.querySelectorAll(".btn").forEach(ele => {
  window.addEventListener("keyup", () => {
    ele.style.display = "none";
  });
});

// Nested --click-- for stopPropagation
document.querySelectorAll("p").forEach(ele => {
  ele.addEventListener("click", () => {
    ele.style.color = "red";
    event.stopPropagation();
  });
});

// use of preventDefault
const deadLink = document.querySelector("nav a");

deadLink.addEventListener("click", event => {
  event.preventDefault();
});
