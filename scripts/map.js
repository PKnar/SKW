(function () {
  let showrooms = [
    {
      id: "waalre",
      location: "Waalre",
      street: "Van Elderenlaan 8",
      zipCode: "5581 WJ Waalre",
      phone: "Telefoon +31 (0) 40 707 4549 ",
      email: "info@bubbelkoning.nl",
      googleLink:
        "https://www.google.nl/maps?hl=en&rlz=1I7ADFA_nlNL406&q=Van+Elderenlaan+8+Waalre&um=1&ie=UTF-8&hq&hnear=0x47c6d9e5100311d9:0xd426968b8718d1ea,Van+Elderenlaan+8,+Waalre&gl=nl&ei=ZwVST4HvCIvsObDZiLIK&sa=X&oi=geocode_result&ct=title&resnum=1&ved=0CCMQ8gEwAA",
      center: [5.441, 51.392],
    },
    {
      id: "amersfoort",
      location: "Amersfoort",
      street: "Printerweg 1 ",
      zipCode: "3821 AP Amersfoort ",
      phone: "Telefoon +31 (0) 40 707 4549 ",
      email: "info@bubbelkoning.nl",
      googleLink:
        "https://www.google.com/maps/dir//Bubbelkoning+Amersfoort,+Printerweg+1,+3821+AP+Amersfoort,+Nederland/@52.1757204,5.3735725,13z",
      center: [5.409, 52.177],
    },
    {
      id: "alphen",
      location: "Alphen a/d Rijn",
      street: "Maatschapslaan 15-2 ",
      zipCode: "2404 CL Alphen aan den Rijn ",
      phone: "Telefoon +31 (0) 40 707 4549 ",
      email: "info@bubbelkoning.nl",
      googleLink:
        "https://www.google.nl/maps/preview#!q=maatschapslaan+15+alphen+aan+den+rijn&data=!1m4!1m3!1d2931!2d4.630013!3d52.1336878!4m12!2m11!1m10!1s0x47c5dad00aac2021%3A0x2ccb6a2e060ff09b!3m8!1m3!1d2503345!2d5.2793703!3d52.2129919!3m2!1i1024!2i768!4f13.1",
      center: [4.629, 52.133],
    },
    {
      id: "wijchen",
      location: "Wijchen",
      street: "Gagelvenseweg 29",
      zipCode: "6604 BE Wijchen",
      phone: "Telefoon +31 (0) 40 707 4549 ",
      email: "info@bubbelkoning.nl",
      googleLink:
        "https://www.google.nl/maps?hl=en&rlz=1I7ADFA_nlNL406&q=Van+Elderenlaan+8+Waalre&um=1&ie=UTF-8&hq&hnear=0x47c6d9e5100311d9:0xd426968b8718d1ea,Van+Elderenlaan+8,+Waalre&gl=nl&ei=ZwVST4HvCIvsObDZiLIK&sa=X&oi=geocode_result&ct=title&resnum=1&ved=0CCMQ8gEwAA",
      center: [5.742, 51.819],
    },
    {
      id: "zeeland",
      location: "Zeeland",
      street: "Prins Beatrixstraat 13/15 15-2 ",
      zipCode: "4507 AH Schoondijke",
      phone: "Telefoon +31 (0) 40 707 4549 ",
      email: "info@bubbelkoning.nl",
      googleLink:
        "https://www.google.nl/maps?hl=en&rlz=1I7ADFA_nlNL406&q=Van+Elderenlaan+8+Waalre&um=1&ie=UTF-8&hq&hnear=0x47c6d9e5100311d9:0xd426968b8718d1ea,Van+Elderenlaan+8,+Waalre&gl=nl&ei=ZwVST4HvCIvsObDZiLIK&sa=X&oi=geocode_result&ct=title&resnum=1&ved=0CCMQ8gEwAA",
      center: [3.557, 51.354],
    },
    {
      id: "denbosch",
      location: "Den Bosch",
      street: "Runweg 22",
      zipCode: "5258 BN Berlicum",
      phone: "Telefoon +31 (0) 40 707 4549 ",
      email: "info@bubbelkoning.nl",
      googleLink:
        "https://www.google.nl/maps?hl=en&rlz=1I7ADFA_nlNL406&q=Van+Elderenlaan+8+Waalre&um=1&ie=UTF-8&hq&hnear=0x47c6d9e5100311d9:0xd426968b8718d1ea,Van+Elderenlaan+8,+Waalre&gl=nl&ei=ZwVST4HvCIvsObDZiLIK&sa=X&oi=geocode_result&ct=title&resnum=1&ved=0CCMQ8gEwAA",
      center: [5.391, 51.674],
    },
    {
      id: "zandhoven",
      location: "Zandhoven",
      street: "Vaartstraat 19a",
      zipCode: "2240 Zandhoven",
      phone: "Telefoon +31 (0) 40 707 4549 ",
      email: "info@bubbelkoning.nl",
      googleLink:
        "https://www.google.nl/maps?hl=en&rlz=1I7ADFA_nlNL406&q=Van+Elderenlaan+8+Waalre&um=1&ie=UTF-8&hq&hnear=0x47c6d9e5100311d9:0xd426968b8718d1ea,Van+Elderenlaan+8,+Waalre&gl=nl&ei=ZwVST4HvCIvsObDZiLIK&sa=X&oi=geocode_result&ct=title&resnum=1&ved=0CCMQ8gEwAA",
      center: [5.046, 51.663],
    },

    {
      id: "waregem",
      location: "Waregem",
      street: "Schoendalestraat 74",
      zipCode: "8793 Sint-Eloois-Vijve ",
      phone: "Telefoon +31 (0) 40 707 4549 ",
      email: "info@bubbelkoning.nl",
      googleLink:
        "https://www.google.nl/maps?hl=en&rlz=1I7ADFA_nlNL406&q=Van+Elderenlaan+8+Waalre&um=1&ie=UTF-8&hq&hnear=0x47c6d9e5100311d9:0xd426968b8718d1ea,Van+Elderenlaan+8,+Waalre&gl=nl&ei=ZwVST4HvCIvsObDZiLIK&sa=X&oi=geocode_result&ct=title&resnum=1&ved=0CCMQ8gEwAA",
      center: [3.398, 50.904],
    },
    {
      id: "genk",
      location: "Genk",
      street: "Nieuwpoortlaan 21 bus 17 ",
      zipCode: "3600 Genk",
      phone: "Telefoon +31 (0) 40 707 4549 ",
      email: "info@bubbelkoning.nl",
      googleLink:
        "https://www.google.nl/maps?hl=en&rlz=1I7ADFA_nlNL406&q=Van+Elderenlaan+8+Waalre&um=1&ie=UTF-8&hq&hnear=0x47c6d9e5100311d9:0xd426968b8718d1ea,Van+Elderenlaan+8,+Waalre&gl=nl&ei=ZwVST4HvCIvsObDZiLIK&sa=X&oi=geocode_result&ct=title&resnum=1&ved=0CCMQ8gEwAA",
      center: [5.537, 50.924],
    },
  ];
  let showroomMenu = document.querySelector(".showrooms-menu");

  showrooms.forEach(
    (showroom) =>
      (showroomMenu.innerHTML += `<li><a class="showroom-link" id=${showroom.id} href='https://pknar.github.io/SKW/singleShowroom.html'>${showroom.location}</a></li>`)
  );

  let hrefs = document.querySelectorAll(".showroom-link");

  hrefs.forEach((a) => {
    a.addEventListener("click", (e) => {
      let selectedShowroom = showrooms.filter(
        (showroom) => showroom.id === e.target.id
      );

      localStorage.setItem(
        "selectedShowroom",
        JSON.stringify(selectedShowroom[0])
      );
    });
  });
})();
