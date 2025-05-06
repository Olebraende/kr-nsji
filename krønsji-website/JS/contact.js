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

document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");
  const declineBtn = document.getElementById("decline-cookies");

  const cookiesAccepted = localStorage.getItem("cookiesAccepted");

  if (cookiesAccepted === null) {
    banner.classList.remove("hidden");
  } else if (cookiesAccepted === "true") {
    loadAnalytics();
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    banner.classList.add("hidden");
    loadAnalytics();
  });

  declineBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "false");
    banner.classList.add("hidden");
    // Ikke last inn analytics
  });
});

function loadAnalytics() {
  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-J6Z9BCBVF9";
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', 'G-J6Z9BCBVF9');
}