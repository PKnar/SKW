(function () {
  "use strict";

  const productsList = document.querySelector(".product-list");
  const productsURL = "https://saunakoning.herokuapp.com/api/products";
  let currentActiveLink = "";
  let currentSort = "";

  let filter = document.querySelector("#filter");

  let binnenSubs = ["Alle binnen", "Budget", "Combi", "Design", "Traditionele"];
  let buitenSub = ["Alle buiten", "Barrel", "Traditionele"];

  function populateFilter(category) {
    // let filters;
    // if (category === "binnen") {
    //   filters = binnenSubs.map((sub) => {
    //     return `<option>${sub} </option>`;
    //   });
    // } else if (category === "buiten") {
    //   filters = buitenSub.map((sub) => {
    //     return `<option>${sub} </option>`;
    //   });
    //   filter.innerHTML += filters;
    // }
  }

  async function getData(url) {
    let response = await fetch(url);
    let json = await response.json();
    return json;
  }

  let sort = document.querySelector("#sort");

  sort.addEventListener("change", (e) => {
    let value = e.target.value.toLowerCase();
    currentSort = value;
    generateProducts(currentActiveLink, value);
  });

  async function generateProducts(selection, value) {
    let products = await getData(productsURL);
    let data = products;
    productsList.innerHTML = "";

    if (value) {
      if (value.includes("lowest")) {
        data = data.sort((a, b) => a.price - b.price);
      } else if (value.includes("highest")) {
        data = data.sort((a, b) => b.price - a.price);
      }
    }

    if (selection === "binnen") {
      data = products.filter((product) => product.category == "binnen");
    } else if (selection === "buiten") {
      data = products.filter((product) => product.category == "buiten");
    } else if (selection === "maatwerk") {
      data = products.filter((product) => product.category == "maatwerk");
    } else {
      data = products;
    }

    if (data.length == 0) {
      productsList.innerHTML += `<p>Geen product gevonden </p>`;
    } else {
      data.forEach((product) => {
        let randomNumber = Math.floor(Math.random() * 7) + 1;
        let card = document.createElement("div");

        card.setAttribute("class", "card");

        card.innerHTML += `
     
          <img src='https://pknar.github.io/SKW/assets/images/saunas/regular/${randomNumber}.jpg' />
          <h5>${product.name}</h5>
          <p>${product.specifications.afmeting} cm
  
          </p>
          <p> Personen: ${product.specifications.personen}</p>
          <hr/>
          <p class="price"> € ${product.price}</p>`;

        productsList.appendChild(card);

        card.addEventListener("click", (e) =>
          clickedProduct(product, `${randomNumber}.jpg`)
        );
      });
    }
  }

  /* mini navbar */

  function generate(activeCategory, arr) {
    activeCategory.classList.add("active");
    arr.forEach((el) => el.classList.remove("active"));
  }

  const categories = Array.from(document.querySelectorAll(".category"));

  function handleClick(e) {
    categories.forEach((category) => {
      category.classList.remove("active");
    });

    e.target.classList.add("active");
    currentActiveLink = e.target.id;
    generateProducts(currentActiveLink, currentSort);
    //populateFilter("binnen");
  }

  categories.forEach((category) =>
    category.addEventListener("click", (e) => handleClick(e))
  );

  window.addEventListener("load", (e) => {
    currentActiveLink =
      JSON.parse(localStorage.getItem("chosenCategory")) || "alle";

    categories.forEach((cat) => cat.classList.remove("active"));

    let currentCat = categories.find((cat) => cat.id === currentActiveLink);
    currentCat.classList.add("active");

    generateProducts(currentActiveLink, currentSort);
  });

  function clickedProduct(product, image) {
    location.href = "https://pknar.github.io/SKW/product.html";
    let selectedproduct = {
      product,
      image,
    };

    localStorage.setItem("selectedProduct", JSON.stringify(selectedproduct));
  }
})();
