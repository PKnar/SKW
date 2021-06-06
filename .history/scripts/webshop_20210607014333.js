// function ReadMore() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("myBtn");

//     if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.innerHTML = "Lees Meer";
//       moreText.style.display = "none";
//     } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "Lees minder";
//       moreText.style.display = "inline";
//     }
//   }

(function () {
  let categories = {
    finse: {
      cover:
        "https://pknar.github.io/SKW/assets/images/products/winter-sauna.jpg",
      title: "ONTDEK FINSE SAUNA'S",
      desc: "Een Finse sauna, een traditionele sauna, is ideaal voor echte levensgenieters. U kunt heerlijk genieten van de warmte, liggend of zittend op houten banken met diverse hoogtes. De temperatuur van de lucht in Finse sauna’s wordt erg hoog, soms tot wel 90 graden Celcius. U begint in een Finse sauna dus snel te zweten, waardoor bijvoorbeeld de doorbloeding wordt bevorderd en de hartprestatie wordt verhoogd. Even helemaal niets, alleen maar genieten!",
    },
    infrarood: {
      cover: "https://pknar.github.io/SKW/assets/images/homepage/Infrarood.jpg",
      title: "Ultiem genieten in een infrarood cabine",
      desc: "Ontspanning en rust met een infraroodcabine van Saunakoning. U kunt een infraroodcabine in verschillende afmetingen kopen. De straling van infrarood in de cabine zorgt voor natuurlijke warmte en diepdoordringende pijnverlichtende straling. Terwijl u van deze wellness stralingen geniet, kunt u luisteren naar uw favoriete muziek dankzij de ingebouwde radio met speakers.",
    },
  };

  let finseLink = document.querySelector(".finse");
  let infrarood = document.querySelector(".infrarood");
  let title = document.querySelector("#title");
  let desc = document.querySelector("#desc");
  let cover = document.querySelector(".image");

  function generate(activeCategory, removeActive, catTitle, catDesc, coverIMG) {
    activeCategory.classList.add("active");
    removeActive.classList.remove("active");

    title.innerHTML = catTitle.toUpperCase();
    desc.innerHTML = catDesc;
    cover.style.backgroundImage = `url("${coverIMG}")`;
  }

  finseLink.addEventListener("click", (e) =>
    generate(
      finseLink,
      infrarood,
      categories.finse.title,
      categories.finse.desc,
      categories.finse.cover
    )
  );

  infrarood.addEventListener("click", (e) =>
    generate(
      infrarood,
      finseLink,
      categories.infrarood.title,
      categories.infrarood.desc,
      categories.infrarood.cover
    )
  );

  window.addEventListener("load", (e) =>
    generate(
      finseLink,
      infrarood,
      categories.finse.title,
      categories.finse.desc,
      categories.finse.cover
    )
  );
})();
