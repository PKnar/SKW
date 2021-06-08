function main() {
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

  if (burgerMenu) {
    burgerMenu.addEventListener("click", (e) => handleMobileNavClick(e));
  }

  /* slideshow*/

  let slideIndex = 1;

  let next = document.querySelector(".next");
  let prev = document.querySelector(".prev");

  let interval = setInterval(() => nexSlide(1, "next"), 3000);

  showSlides(slideIndex);

  function nexSlide(n, currentButton) {
    showSlides((slideIndex += n), currentButton);
  }

  function showSlides(n, currentButton) {
    var i;
    var slides = document.querySelectorAll(".review");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    if (currentButton == "next") {
      slides[slideIndex - 1].style = " animation: slideLeft 2s forwards";
    } else {
      slides[slideIndex - 1].style = " animation: slideRight 2s forwards";
    }

    slides[slideIndex - 1].style.display = "block";
  }

  prev.addEventListener("click", (e) => {
    clearInterval(interval);
    nexSlide(-1, "prev");
  });
  next.addEventListener("click", (e) => {
    clearInterval(interval);
    nexSlide(1, "next");
  });
}

window.addEventListener("load", main);
