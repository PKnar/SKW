(function () {
  let selected = JSON.parse(localStorage.getItem("selectedProduct"));
  let header = document.querySelector(".pOverview");

  let productInfo = `   <div class="product">
  
    <img src='https://pknar.github.io/SKW/assets/images/saunas/regular/${selected.image}'>
  
  </div>
  <div class="product-info-card">
  
    <h2>${selected.product.name} </h2>
    <div class="flex-row ">
        <p><img src="https://pknar.github.io/SKW/assets/icons/productOverview/group.png" /> 3 plaatsen</p>
        <div class="vertical-line"></div>
        <p> <img src="../assets/icons/productOverview/invert.png" /> ${selected.product.specifications.afmeting} cm</p>
    </div>
    <hr>
    <div class="flex-row price-row">
        <h3>€ ${selected.product.price}</h3>
        <img src = "../assets/icons/productOverview/SharedScreenshot.png"/>
    </div>
    <hr>
    <div>
        <h4>Details</h4>
        <div class='flex-row'>
  
            <ul>
                <li> <img src="../assets/icons/productOverview/check-mark.png" />1e klas Nordisch Fichte hout</li>
                <li><img src="../assets/icons/productOverview/check-mark.png" />1 espen leuning</li>
                <li><img src="../assets/icons/productOverview/check-mark.png" />Deur van brons thermoglas</li>
  
            </ul>
            <ul>
                <li><img src="../assets/icons/productOverview/check-mark.png" />Maatwerk mogelijk</li>
                <li><img src="../assets/icons/productOverview/check-mark.png" />1 binnenvloerrooster</li>
                <li><img src="../assets/icons/productOverview/check-mark.png" />Lamp met lampenscherm</li>
  
            </ul>
        </div>
  
    </div>
    <div class="buttons">
        <button class="black-btn"><img src ="../assets/icons/productOverview/shopping-bag.png" />In Winkelwagen</button>
        <button class='transparent'> <img src ="../assets/icons/productOverview/pin(1).png" />Maak een afspraak met een expert</button>
    </div>
  
  </div>`;

  header.innerHTML += productInfo;

  const links = document.querySelectorAll(".menu-link");

  function handleClick(e) {
    links.forEach((link) => {
      link.classList.remove("active-sub-link");
    });

    e.target.classList.add("active-sub-link");
  }

  links.forEach((link) =>
    link.addEventListener("click", (e) => handleClick(e))
  );
})();
