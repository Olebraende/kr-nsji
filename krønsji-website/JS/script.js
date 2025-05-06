// Dette prosjektet er laget av kodehode-gjengen til JobLoop.

document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.querySelector(".menu-items");
  const searchInput = document.querySelector("#menu-search");
  const buttons = document.querySelectorAll(".button-filter");

  if (!menuContainer) {
    console.error("Menu container not found");
    return;
  }

  //Crunchy Burgers
  const crunchyBurger = [
    {
      name: "Krønsji Burger",
      description: "2 Strips, 2 Crispy Salad, Cheese, BBQ, Chili Mayo",
      price: "149,-",
      allergies: ["gluten", "egg"],
      image: "./Assets/images/krønsjiBurger.jpeg",
    },
    {
      name: "Krønsji Burger Korean",
      description:
        "2 Korean Strips, 2 Crispy Salad, Cheese, BBQ, Chili Mayo",
      price: "159,-",
      allergies: ["gluten", "soya", "egg"],
      image: "./Assets/images/krønsjiBurgerKorean.jpg",
    },
    {
      name: "Krønsji Burger Hot",
      description: "2 Hot Strips, 2 Crispy Salad, Cheese, BBQ, Chili Mayo",
      price: "159,-",
      allergies: ["gluten", "soya", "egg"],
      image: "./Assets/images/krønsjiBurgerHot.jpg",
    },
    {
      name: "Krønsji Burger Honey Mustard",
      description: "2 Strips, 2 Crispy Salad, Honey Mustard, Cheese, BBQ",
      price: "159,-",
      allergies: ["gluten", "sennep", "soya", "egg"],
      image: "./Assets/images/krønsjiBurgerHoneyMustard.jpg",
    },
    {
      name: "Krønsji Burger Coleslaw",
      description: "4 Strip, 2 Crispy Salad, Cheese, BBQ + Chili Mayo",
      price: "149,-",
      allergies: ["gluten", "soya", "egg"],
      image: "./Assets/images/krønsjiColeslawBurger.jpg",
    },
    {
      name: "Double Krønsji Burger + Mozzarella Sticks",
      description: "2 Strips, 2 Crispy Salad, Cheese, BBQ, Chili Mayo",
      price: "210,-",
      allergies: ["gluten", "soya", "egg"],
      image: "./Assets/images/krønsjiDoubleBurger.jpeg",
    },
  ];

  // Crunchy Wraps
  const crunchyWrap = [
    {
      name: "Krønsji Wrap",
      description: "",
      price: "139,-",
      allergies: ["gluten", "egg"],
      image: "./Assets/images/krønsjiWrap.jpg",
    },
    {
      name: "Krønsji Wrap Korean",
      description: "",
      price: "149,-",
      allergies: ["gluten"],
      image: "./Assets/images/krønsjiWrapKorean.jpeg",
    },
    {
      name: "Krønsji Wrap Hot",
      description: "",
      price: "149,-",
      allergies: ["gluten", "Soya"],
      image: "./Assets/images/krønsjiWrapHot.jpg",
    },
  ];

  //Croissants
  const croissants = [
    {
      name: "Sweet Croissant",
      description: "1 Strip, Sweet Chili, Cheese",
      price: "99,-",
      allergies: ["gluten", "egg"],
      image: "./Assets/images/krønsjiCriossantSweet.jpg",
    },
    {
      name: "Honey Croissant",
      description: "1 Strip, Honey Mustard, Cheese",
      price: "99,-",
      allergies: ["gluten", "sennep", "egg"],
      image: "./Assets/images/krønsjiCroissantHoneyMustard.jpeg",
    },
    {
      name: "BBQ Croissant",
      description: "1 Strip, BBQ, Cheese",
      price: "99,-",
      allergies: ["gluten", "soya", "egg"],
      image: "./Assets/images/krønsjiCriossantBBQ.jpg",
    },
  ];

  //Baguettes
  const baguettes = [
    {
      name: "Krønsji Strips Baguette",
      description: "2 Strips, Salad, Fries, BBQ, Chili Mayo",
      price: "179,-",
      allergies: ["gluten", "soya", "egg"],
      image: "./Assets/images/krønsjiBaguette.jpeg",
    },
  ];

  const falafel = [
    {
      name: "Falafel (6 stk)",
      description: "",
      price: "100,-",
      allergies: ["gluten", "egg"],
      image: "./Assets/images/krønsjiFalafel6stk.jpg",
    },
    {
      name: "Rullefalafel",
      description: "",
      price: "130,-",
      allergies: ["gluten", "egg"],
      image: "./Assets/images/krønsjiRullefalafel.jpg",
    },
    {
      name: "Falafel i pita",
      description: "",
      price: "130,-",
      allergies: ["gluten", "egg"],
      image: "./Assets/images/krønsjiFalafelPita.jpg",
    },
  ];

  //Wings and Strips
  const wingsAndStrips = [
    {
      name: "Krønsji Wings",
      description: "6 Crunchy Wings",
      price: "119,-",
      allergies: ["gluten", "egg"],
      image: "./Assets/images/krønsjiWings6.jpg",
    },
    {
      name: "Krønsji Wings",
      description: "12 Crunchy Wings",
      price: "199,-",
      allergies: ["gluten", "egg"],
      image: "./Assets/images/krønsjiWings12.jpg",
    },
    {
      name: "Hot Buffalo Wings",
      description: "6 Hot Wings",
      price: "139,-",
      allergies: ["gluten", "egg"],
      image: "./Assets/images/krønsjiWingsHot.jpeg",
    },
    {
      name: "Hot Buffalo Wings",
      description: "12 Hot Wings",
      price: "210,-",
      allergies: ["gluten", "egg"],
      image: "./Assets/images/krønsjiWingsHot.jpeg",
    },
    {
      name: "Korean Wings",
      description: "6 Korean Wings",
      price: "139,-",
      allergies: ["gluten", "soya", "egg"],
      image: "./Assets/images/krønsjiWingsKorean.jpg",
    },
    {
      name: "Korean Wings",
      description: "12 Korean Wings",
      price: "210,-",
      allergies: ["gluten", "soya", "egg"],
      image: "./Assets/images/krønsjiWingsKorean.jpg",
    },
    {
      name: "Krønsji Strips",
      description: "4 Crunchy Strips",
      price: "159,-",
      allergies: ["gluten", "egg"],
      image: "./Assets/images/krønsjiStrips.jpeg",
    },
    {
      name: "Krønsji Strips",
      description: "8 Crunchy Strips",
      price: "279,-",
      allergies: ["gluten", "egg"],
      image: "./Assets/images/krønsjiStrips.jpeg",
    },
  ];

  //Combos and snack boxes
  const comboSnackBox = [
    {
      name: "Combo Box",
      description: "3 Strips, 3 Wings",
      price: "219,-",
      allergies: ["gluten", "egg"],
      image: "./Assets/images/krønsjiCombo3+3.jpg",
    },
    {
      name: "Snackbox 1",
      description:
        "Fries, Crispy Onions, Jalapenos/Chili Mayo, BBQ, Cheese",
      price: "100,-",
      allergies: ["gluten", "egg"],
      image: "./Assets/images/krønsjiSnackBox1.jpg",
    },
    {
      name: "Snackbox 2",
      description:
        "2 Strips, Fries, Crispy Onions, Jalapenos/Chili Mayo, BBQ, Cheese",
      price: "149,-",
      allergies: ["gluten", "egg"],
      image: "./Assets/images/krønsjiSnackBox234.jpg",
    },
    {
      name: "Snackbox Korean",
      description:
        "2 Korean Strips, Fries, Crispy Onions, Jalapenos/Chili Mayo, BBQ, Cheese",
      price: "158,-",
      allergies: ["gluten", "soya, egg"],
      image: "./Assets/images/krønsjiSnackBox234.jpg",
    },
    {
      name: "Snackbox Hot",
      description:
        "2 Hot Strips, Fries, Crispy Onions, Jalapenos/Chili Mayo, BBQ, Cheese",
      price: "158,-",
      allergies: ["gluten", "egg"],
      image: "./Assets/images/krønsjiSnackBox234.jpg",
    },
  ];
  // Alle Menyer 
  const menyer = [
    {
      name: "Crispy Burger Meny",
      description: "Crispy Strips, Coleslaw, Brioche brød, Prommesfrites + Brus",
      price: "220,-",
      allergies: ["gluten", "egg"],
      image: "./Assets/images/krønsjiBurger.jpeg",
    },
    {
      name: "Chicken Fries Meny",
      description: "Chickennuggets (5 stk), Snackbox, Brus",
      price: "199,-",
      allergies: ["gluten", "egg"],
      image: "./Assets/images/krønsjiNuggets.jpg",
    },
    {
      name: "Crispy Wings Meny",
      description: "Wings (6 stk), Pommesfrites, Brus",
      price: "199,-",
      allergies: ["gluten", "egg"],
      image: "./Assets/images/krønsjiCombo3+3.jpg",
    },
    {
      name: "Falafel Meny",
      description: "Rullefalafel, Brus",
      price: "199,-",
      allergies: ["gluten", "egg"],
      image: "./Assets/images/krønsjiRullefalafel.jpg",
    },
    {
      name: "Falafel Meny",
      description: "Falafel (6 stk), Tahini saus, Brus",
      price: "120,-",
      allergies: ["gluten", "egg"],
      image: "./Assets/images/krønsjiFalafel6stk.jpg",
    },
  ];

  const pizza = [
    {
      name: "Margherita",
      description: "ost, tomatsaus",
      price: "119,- / 209,-",
      allergies: ["gluten"],
      image: "",
    },
    {
      name: "Svolten Pizza",
      description: "ost, marinert kylling, marinert biff, paprika, løk, sjampinjong",
      price: "159,- / 259,-",
      allergies: ["gluten"],
      image: "",
    },
    {
      name: "Kylling Pizza",
      description: "ost, marinert kylling, paprika, løk",
      price: "149,- / 239,-",
      allergies: ["gluten"],
      image: "",
    },
    {
      name: "Taco Pizza",
      description: "ost, biff, kjøttdeig, hvitløk, jalapeños",
      price: "149,- / 239,-",
      allergies: ["gluten"],
      image: "",
    },
    {
      name: "Kebab Pizza",
      description: "ost, kebab kjøtt, salat, agurk, rødløk, tomat, hvitløk, dressing",
      price: "159,- / 259,-",
      allergies: ["gluten, egg"],
      image: "",
    },
    {
      name: "Krønsji Pizza",
      description: "ost, hvit saus, crispy strips, pomemes frites, honey mustard, dressing",
      price: "179,- / 279,-",
      allergies: ["gluten, egg"],
      image: "",
    },
    {
      name: "Krønsji Hot Pizza",
      description: "ost, hvit saus, crispy strips, pomemes frites, jalapeños, chili mayo dressing",
      price: "179,- / 279,-",
      allergies: ["gluten, egg"],
      image: "",
    },
    {
      name: "Pepperoni Pizza",
      description: "ost, løk, pepperoni, paprika, sjampinjong",
      price: "149,- / 239,-",
      allergies: ["gluten"],
      image: "",
    },
    {
      name: "Skinke Pizza",
      description: "ost, skinke, tomatsaus",
      price: "149,- / 239,-",
      allergies: ["gluten"],
      image: "",
    },
    {
      name: "Hawaii Pizza",
      description: "ost, skinke, ananas",
      price: "149,- / 239,-",
      allergies: ["gluten"],
      image: "",
    },
    {
      name: "Allan Pizza",
      description: "ost, skinke, kjøttdeig, pepperoni, løk, sjampinjong",
      price: "149,- / 249,-",
      allergies: ["gluten"],
      image: "",
    },
    {
      name: "Bolognese Pizza",
      description: "ost, kjøttdeig, løk",
      price: "135,- / 215,-",
      allergies: ["gluten"],
      image: "",
    },
  ]

  //All sides
  const sides = [
    {
      name: "Normal Fries",
      description: "",
      price: "57,-",
      allergies: [],
      image: "./Assets/images/krønsjiFries.jpg",
    },
    {
      name: "Sweet Fries",
      description: "",
      price: "67,-",
      allergies: [],
      image: "./Assets/images/krønsjiSweetFries.jpg",
    },
    {
      name: "Onion Rings (5 stk)",
      description: "",
      price: "57,-",
      allergies: ["gluten", "egg"],
      image: "./Assets/images/krønsjiOnionRing.jpg",
    },
    {
      name: "Dips",
      description:
        "Chili Mayo/Garlic/BBQ/Extra Hot Chili Mayo/Honey Mustard/Sweet Chili",
      price: "29,-",
      allergies: ["melk", "sennep", "egg", "soya"],
      image: "./Assets/images/krønsjiDips.jpg",
    },
  ];

  // All Drinks
  const drikke = [
    {
      name: "Coca Cola 0.5L",
      description: "",
      price: "40,-",
      allergies: [],
      image: "./Assets/images/krønsjiCocaCola.png",
    },
    {
      name: "Coca Cola Zero 0.5L",
      description: "",
      price: "40,-",
      allergies: [],
      image: "./Assets/images/krønsjiColaZero.png",
    },
    {
      name: "Fanta Orange 0.5L",
      description: "",
      price: "40,-",
      allergies: [],
      image: "./Assets/images/krønsjiFantaOrange.png",
    },
    {
      name: "Fanta Orange Zero 0.5L",
      description: "",
      price: "40,-",
      allergies: [],
      image: "./Assets/images/krønsjiFantaOrangeZero.png",
    },
    {
      name: "Fanta Exotic 0.5L",
      description: "",
      price: "40,-",
      allergies: [],
      image: "./Assets/images/krønsjiFantaExotic.png",
    },
    {
      name: "Sprite 0.5L",
      description: "",
      price: "40,-",
      allergies: [],
      image: "./Assets/images/krønsjiSprite.png",
    },
    {
      name: "Sprite Zero 0.5L",
      description: "",
      price: "40,-",
      allergies: [],
      image: "./Assets/images/krønsjiSpriteZero.png",
    },
    {
      name: "Urge 0.5L",
      description: "",
      price: "40,-",
      allergies: [],
      image: "./Assets/images/krønsjiUrge.png",
    },
  ];

  function createBurgerItemElement(item) {
    const menuItemElement = document.createElement("div");
    menuItemElement.classList.add("menu-item");

    const imgElement = document.createElement("img");
    if (item.image != "") {
      imgElement.src = item.image;
      imgElement.alt = item.name;
    }
   

    const textContainer = document.createElement("div");
    textContainer.classList.add("menu-text");

    const nameElement = document.createElement("h3");
    nameElement.textContent = item.name;

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("menu-text-description");
    descriptionElement.textContent = item.description;

    const allergiesElement = document.createElement("p");
    if (item.allergies.length > 0) {
      const strongElement = document.createElement("strong");
      allergiesElement.classList.add("menu-text-allergy");
      strongElement.textContent = "Allergener: ";
      
      allergiesElement.appendChild(strongElement);
      allergiesElement.appendChild(document.createTextNode(item.allergies.join(", ")));
    }
    const priceElement = document.createElement("p");
    priceElement.textContent = item.price;
    priceElement.classList.add("price");

    textContainer.appendChild(nameElement);
    textContainer.appendChild(descriptionElement);
    textContainer.appendChild(allergiesElement);
    textContainer.appendChild(priceElement);
    if(imgElement.src != ""){
      menuItemElement.appendChild(imgElement);
    }
    
    menuItemElement.appendChild(textContainer);

    return menuItemElement;
  }

  function renderMenu(items) {
    items.forEach((item) => {
      const menuItemElement = createBurgerItemElement(item);
      menuContainer.appendChild(menuItemElement);
    });
  }

  const name = document.querySelector('#menu-name');
  const titleContainer = document.querySelector(".menu-items");
  const addTitle = (text) => {
    const title = document.createElement("h2"); 
    title.textContent = text;
    titleContainer.appendChild(title);
  };

  // Initial rendering av menyen
  addTitle("Krønsji Burger");
  renderMenu(crunchyBurger);
  addTitle("Krønsji Wraps");
  renderMenu(crunchyWrap);
  addTitle("Krønsji Croissants");
  renderMenu(croissants);
  addTitle("Krønsji Baguettes");
  renderMenu(baguettes);
  addTitle("Falafel");
  renderMenu(falafel);
  addTitle("Wings & Strips");
  renderMenu(wingsAndStrips);
  addTitle("Combo & Snackbox");
  renderMenu(comboSnackBox);
  addTitle("Menyer");
  renderMenu(menyer);
  addTitle("Pizza");
  renderMenu(pizza);
  addTitle("Sides");
  renderMenu(sides);
  addTitle("Drikke");
  renderMenu(drikke);

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      // Remove active class from all buttons
      buttons.forEach((btn) => btn.classList.remove("button-active"));

      // Add active class to clicked button
      e.target.classList.add("button-active");

      // Clear menu content
      while (menuContainer.firstChild) {
        menuContainer.removeChild(menuContainer.firstChild);
      }

      // Render menu based on clicked button
      switch (e.target.id) {
        case "buttonAlle":
          name.textContent = 'Hele Menyen';
          addTitle("Krønsji Burger");
          renderMenu(crunchyBurger);
          addTitle("Krønsji Wraps");
          renderMenu(crunchyWrap);
          addTitle("Krønsji Croissants");
          renderMenu(croissants);
          addTitle("Krønsji Baguettes");
          renderMenu(baguettes);
          addTitle("Falafel");
          renderMenu(falafel);
          addTitle("Wings & Strips");
          renderMenu(wingsAndStrips);
          addTitle("Combo & Snackbox");
          renderMenu(comboSnackBox);
          addTitle("Menyer");
          renderMenu(menyer);
          addTitle("Pizza");
          renderMenu(pizza);
          addTitle("Sides");
          renderMenu(sides);
          addTitle("Drikke");
          renderMenu(drikke);
          break;
        case "buttonBurger":
          name.textContent = 'Krønsji Burger';
          renderMenu(crunchyBurger);
          break;
        case "buttonWraps":
          name.textContent = 'Krønsji Wraps';
          renderMenu(crunchyWrap);
          break;
        case "buttonCroissant":
          name.textContent = 'Croissants';
          renderMenu(croissants);
          break;
        case "buttonBaguette":
          name.textContent = 'Krønsji Strip Baguette';
          renderMenu(baguettes);
          break;
        case "buttonFalafel":
          name.textContent = 'Falafel';
          renderMenu(falafel);
          break;
        case "buttonWings":
          name.textContent = 'Wings & Strips';
          renderMenu(wingsAndStrips);
          break;
        case "buttonCombo":
          name.textContent = 'Combo & Snack Boxes';
          renderMenu(comboSnackBox);
          break;
        case "buttonMenu":
          name.textContent = 'Meny';
          renderMenu(menyer);
          break;
        case "buttonPizza":
          name.textContent = 'Pizza';
          renderMenu(pizza);
          break;
        case "buttonSides":
          name.textContent = 'Sides';
          renderMenu(sides);
          break;
        case "buttonDrikke":
          name.textContent = 'Drikke';
          renderMenu(drikke);
          break;
      }
    });
  });

  // Søkefunksjon
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filteredItems = CrunchyBurger.filter((item) =>
        item.name.toLowerCase().includes(searchTerm)
      );
      renderMenu(filteredItems);
    });
  }

  let lastScrollTop = 0;
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;
    if (scrollTop > lastScrollTop) {
      header.classList.add("hide-nav");
    } else {
      header.classList.remove("hide-nav");
    }
    lastScrollTop = scrollTop;
  });

  const toTopButton = document.getElementById("toTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      toTopButton.classList.add("show");
    } else {
      toTopButton.classList.remove("show");
    }
  });

  toTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");

  if (!localStorage.getItem("cookiesAccepted")) {
    banner.classList.remove("hidden");
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    banner.classList.add("hidden");
    loadAnalytics();
  });

  if (localStorage.getItem("cookiesAccepted") === "true") {
    loadAnalytics();
  }
});

function loadAnalytics() {
  // Google Analytics 4
  const scriptTag = document.createElement("script");
  scriptTag.setAttribute("async", "");
  scriptTag.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-J6Z9BCBVF9");
  document.head.appendChild(scriptTag);

  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', 'G-J6Z9BCBVF9');
}

