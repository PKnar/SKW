window.addEventListener("load", (e) => {
  let header = document.querySelector(".singleShowroom");
  let selectedShowroom = JSON.parse(localStorage.getItem("selectedShowroom"));

  if (selectedShowroom) {
    generateHeader(selectedShowroom, header);
  }

  function generateHeader(selectedShowroom, header) {
    let html = `  <div class="hero">
              <!--Text conent of the hero page-->
              <div class="textContent">
        
                  <h1>${selectedShowroom.location}
                  </h1>
                  <p class="heroMessage"> ${selectedShowroom.street}<br />
                      ${selectedShowroom.zipCode}<br />
                      +31 (0) 40 707 45 49</p>
                  <div class="readMore">
                      <a href="#appointment-form">Plan Uw Bezoek</a>
        
                  </div>
        
              </div>
              <!--The glass box with news-->
        
          </div>
          <div id='map'></div>
          `;

    header.innerHTML += html;

    mapboxgl.accessToken =
      "pk.eyJ1IjoicG9naG9zeWFuIiwiYSI6ImNraWM2ejdtczE2bGIycm81bnppNXM4ZjcifQ.Wgwt-DzdiZwQtBbsF1WcPw";
    let map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/poghosyan/ckpl9i97a0vh117piu4s3yhri",
      center: selectedShowroom.center,
      zoom: 14,
    });

    let marker = new mapboxgl.Marker()
      .setLngLat(selectedShowroom.center)
      .addTo(map);
    map.addControl(new mapboxgl.NavigationControl());
  }
});
