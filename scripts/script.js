(function () {
  "use strict";

  /* Navogation -change backgroun on scroll */
  window.addEventListener("scroll", (event) => {
    let scrollTop = document.documentElement.scrollTop;
    let nav = document.querySelector("nav");

    if (scrollTop > 100) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  const burgerMenu = document.querySelector(".burger-menu");

  let handleMobileNavClick = (e) => {
    let mobile_nav = document.querySelector(".mobile-nav .nav-links");
    let topLine = document.querySelector(".top-line");
    let middleLine = document.querySelector(".middle-line");
    let bottomLine = document.querySelector(".bottom-line");

    topLine.classList.toggle("deg-45");
    middleLine.classList.toggle("transparent-line");
    bottomLine.classList.toggle("deg45");
    mobile_nav.classList.toggle("show");

    topLine.classList.toggle("black");
    middleLine.classList.toggle("black");
    bottomLine.classList.toggle("black");
  };

  burgerMenu.addEventListener("click", (e) => handleMobileNavClick(e));
})();
