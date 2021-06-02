(function () {
  const header = document.querySelector("header");
  let sections = document.querySelectorAll(".section");
  let circles = document.querySelector(".circles");

  sections.forEach((sec) => {
    circles.innerHTML += `<div class="circle-wrapper ">
        <div class="circle-child"> </div>
      </div>`;
  });

  let circleChildren = document.querySelectorAll(".circle-wrapper");

  window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;

    for (let i = 0; i < sections.length; i++) {
      if (sections[i].classList.contains("bright")) {
        circleChildren[i].classList.add("dark");
      }
    }
  });
})();
