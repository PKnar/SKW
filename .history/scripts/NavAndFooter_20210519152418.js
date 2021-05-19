(function () {
  let navLinks = [
    { path: "", name: "Home" },
    { path: "#", name: "Webshop" },
    { path: "#", name: "Sauna Info" },
    { path: "#", name: "Showrooms" },
    { path: "blogs.html", name: "Blog" },
  ];

  let baseURL = "https://pknar.github.io/SKW/";

  function generateNav() {
    let nav = document.querySelector("nav");
    let html = ` 
    <div class="desktop-nav">
    <img class="logo" alt='Saunakoning logo' src='./assets/logo/white.png' />
    <ul class="nav-links ">

    ${navLinks.forEach((link) => {
      return ` <li><a href="${baseURL}${link.path}">${link.name} </a></li>`;
    })}
   
    </ul>

    <ul class="nav-icons">
        <li><img src="assets/icons/search.png" /></li>
        <li><img src="assets/icons/user.png" /></li>
        <li><img src="assets/icons/shopping-bag.png" /></li>
    </ul>

</div>


<div class="mobile-nav">




<ul class="nav-icons">
<li><img src="assets/icons/shopping-bag.png" /></li>
    <li><img src="assets/icons/user.png" /></li>
    <li><img src="assets/icons/search.png" /></li>
    </ul>

<img class="mobile-logo" alt='Saunakoning logo' src='./assets/logo/white.png' />
    <div class="container-column">
        <div class="burger-menu">
            <div class="line top-line"></div>
            <div class="line middle-line"></div>
            <div class="line bottom-line"></div>
        </div>


        <ul class="nav-links close ">
            <li><a class="active" href="/index.html">Home </a></li>
            <li><a href="/acties">Acties </a></li>
            <li><a href="#">Webshop </a></li>
            <li><a href="#"> Sauna Info</a></li>
            <li><a href="/showrooms.html">Showrooms </a></li>
            <li><a href="/blogs.html">Blog </a></li>
            <li><a href="/about.html">About </a></li>
            <li><a href="/contact.html">Contact </a></li>
            <li><a href="/careers.html">Wij verkopen ook</a></li>
        </ul>


    </div>



</div>
  `;

    nav.innerHTML += html;
  }

  generateNav();

  function generateFooter() {
    let footer = document.querySelector("footer");
    let html = ` 
    <img class="footer-logo" src='./assets/logo/white.png' />
        <p class="footer-message">Bel direct voor persoonlijk advies of bezoek onze showroom.</p>
        <div class="socials">

            <img src='./assets/icons/socials-contacts/facebook.png' />
            <img src='./assets/icons/socials-contacts/instagram.png' />
            <div class="vertical-line"></div>
            <div class="flex-row">
                <img src='./assets/icons/socials-contacts/email.png' />
                <p>Contact</p>
            </div>

        </div>
        <hr>
        <div class="footer-contact">
            <img src='./assets/icons/socials-contacts/call.png' />
            <div class="tel-numbers">
                <p> NL <a href="tel:040 - 707 45 49">040 - 707 45 49</a></p>
                <p> BE <a href="tel:033 367 4575">033 367 4575</a></p>
            </div>
        </div>
        <hr>
        <div class="container-row">
            <div class="footer-links">
                <h4>SHOWROOMS</h4>
                <ul>
                    <li><a href="#"> Showroom Amersfoort</a></li>
                    <li><a href="#"> Showroom Alphen a.d. Rijn</a></li>
                    <li><a href="#"> Showroom Wijchen</a></li>
                    <li><a href="#"> Showroom Waalre</a></li>
                    <li><a href="#"> Showroom Waregem (BE)</a></li>
                    <li><a href="#"> Showroom Zandhoven (BE)</a></li>
                    <li><a href="#"> Showroom Genk (BE)</a></li>
                </ul>
            </div>
            <div class="footer-links">
                <h4>HANDIGE PAGINA'S</h4>
                <ul>
                    <li><a href="#"> Algemene sauna informatie</a></li>
                    <li><a href="#"> Contact</a></li>
                    <li><a href="#"> Algemene voorwaarden</a></li>
                    <li><a href="#"> Privacy beleid</a></li>
                    <li><a href="#"> Leverings Informatie </a></li>
                    <li><a href="#"> Sitemap </a></li>

                </ul>
            </div>


        </div>
        <img class="rating" src="./assets/icons/Rating-grey.png" />
        <div class="payments">
            <a href="#">Bekijk het saunamagazine</a>
            <div class="payment-icons">
                <img src="./assets/icons/payments/ideal.png" />
                <img src="./assets/icons/payments/mastercard(1).png" />
                <img src="./assets/icons/payments/mastercard.png" />
                <img src="./assets/icons/payments/visa.png" />
                <img src="./assets/icons/payments/paypal.png" />
                <img src="./assets/icons/payments/bancontact-logo_0.png" />
            </div>
        </div>`;

    footer.innerHTML += html;
  }

  generateFooter();
})();

{
  /* <li><a class="active" href="/">Home </a></li>
<li><a href="#">Acties </a></li>
<li><a href="#">Webshop </a></li>
<li><a href="#"> Sauna Info</a></li>
<li><a href="#">Showrooms </a></li>
<li><a href="./blogs.html">Blog </a></li>
<li><a href="./about.html">About </a></li>
<li><a href="#">Contact </a></li>
<li><a href="./careers.html">Wij verkopen ook</a></li> */
}
