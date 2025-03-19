let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;
  if (scrollTop > lastScrollTop) {
    header.classList.add("hide-nav");
  } else {
    header.classList.remove("hide-nav");
  }
  lastScrollTop = scrollTop;
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

const toTopButton = document.querySelector("#toTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    toTopButton.classList.add("show");
  } else {
    toTopButton.classList.remove("show");
  }
});

toTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
