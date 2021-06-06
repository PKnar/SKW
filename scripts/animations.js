(function () {
  window.addEventListener("scroll", (event) => {
    let scrollTop = document.documentElement.scrollTop;
    let valueProps = document.querySelector(".value-prop");

    const a1 = document.querySelector(".a1");
    const a2 = document.querySelector(".a2");
    const a3 = document.querySelector(".a3");
    const a4 = document.querySelector(".a4");

    const acties = document.querySelector(".acties");
    const blog = document.querySelector(".blog");
    const about = document.querySelector(".about");
    const catalogus = document.querySelector(".catalogus");

    if (scrollTop > 150) {
      valueProps.style.animation = "slideDown 0.8s forwards linear";
    } else {
      valueProps.style.animation = "";
    }

    if (scrollTop > 1500) {
      a1.style.animation = "slideUp 0.5s forwards ease-out";
      a2.style.animation = "slideUp 0.7s forwards ease-out";
      a3.style.animation = "slideUp 0.9s forwards ease-out";
      a4.style.animation = "slideUp 1.1s forwards ease-out";
    } else {
      [a1, a2, a3, a4].forEach((a) => (a.style.animation = ""));
    }

    if (scrollTop >= 2000) {
      [acties, blog, about, catalogus].forEach(
        (el) => (el.style.animation = "move 1s forwards ease-out")
      );
    } else {
      [acties, blog, about, catalogus].forEach(
        (el) => (el.style.animation = "")
      );
    }
  });
})();
