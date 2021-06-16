// Defining variables for dot texts (popular section)
var interval;
var dotText1;
var dotText2;
var dotText3;
function setDotTexts() {
  // Filling variables for dot texts (popular section) from HTML onload function arguments
  dotText1 = arguments[0];
  dotText2 = arguments[1];
  dotText3 = arguments[2];
  setFirstText = document.querySelector(".changeText");
  // Set default text on start of page because of bug with possibility of change from default text in HTML
  setFirstText.innerHTML = arguments[0];
}
// Main
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

  // Function to change dot at popular left section with 5s interval
  interval = window.setInterval(function popularLeftDotChanger() {
    let popLeft1 = document.querySelector(".firstdot");
    let popLeft2 = document.querySelector(".seconddot");
    let popLeft3 = document.querySelector(".thirddot");

    if (popLeft3.className == "thirddot dot1") {
      popLeft3.className = "thirddot dot";
      popLeft1.className = "firstdot dot1";
      // Call text changer function for first dot text as argument
      popularLeftTextChanger(dotText1);
      return;
    }

    if (popLeft1.className == "firstdot dot1") {
      popLeft1.className = "firstdot dot";
      popLeft2.className = "seconddot dot1";
      // Call text changer function for second dot text as argument
      popularLeftTextChanger(dotText2);
      return;
    }

    if (popLeft2.className == "seconddot dot1") {
      popLeft2.className = "seconddot dot";
      popLeft3.className = "thirddot dot1";
      // Call text changer function for third dot text as argument
      popularLeftTextChanger(dotText3);
      return;
    }
  }, 5000);

  // Function to change text at popular section
  function popularLeftTextChanger() {
    let text = arguments[0];
    let popLeftTxt = document.querySelector(".changeText");

    popLeftTxt.classList.add("hide");
    setTimeout(function () {
      popLeftTxt.innerHTML = text;
      popLeftTxt.classList.remove("hide");
    }, 500);
  }
}

// Repeating for outside of main function
// Function to change text at popular section
function popularLeftTextChanger() {
  let text = arguments[0];
  let popLeftTxt = document.querySelector(".changeText");

  popLeftTxt.classList.add("hide");
  setTimeout(function () {
    popLeftTxt.innerHTML = text;
    popLeftTxt.classList.remove("hide");
  }, 500);
}

// Function to open more references button
function openMore() {
  let button = document.querySelector(".openmorewrap");
  let buttonDisplayed = document.querySelector(".closemorewrap");
  let blogDisplayed = document.querySelector(".blogPage2");

  blogDisplayed.style.display = "block";
  blogDisplayed.scrollIntoView({ behavior: "smooth", block: "start" });
  button.style.display = "none";
  buttonDisplayed.style.display = "";
  document.querySelector(".blogPage").style.paddingBottom = "0";
}

// Function to close more references button
function closeMore() {
  let button = document.querySelector(".closemorewrap");
  let buttonDisplayed = document.querySelector(".openmorewrap");
  let blogHideClass = document.querySelector(".blogPage2");
  let blogDisplayed = document.querySelector(".blogPage");

  blogHideClass.style.display = "none";
  blogDisplayed.scrollIntoView({ behavior: "smooth", block: "start" });
  button.style.display = "none";
  buttonDisplayed.style.display = "";
  document.querySelector(".blogPage").style.paddingBottom = "3rem";
}

// Function to change popular texts by clicking dots
function onClickChange() {
  clearInterval(interval);
  let dot = arguments[0];
  let notdot1 = arguments[1];
  let notdot2 = arguments[2];
  let thisDotText = arguments[3];

  let dotclass = document.querySelector("." + dot);
  let notdot1class = document.querySelector("." + notdot1);
  let notdot2class = document.querySelector("." + notdot2);

  dotclass.className = "" + dot + " dot1";
  notdot1class.className = "" + notdot1 + " dot";
  notdot2class.className = "" + notdot2 + " dot";
  popularLeftTextChanger(thisDotText);
}
