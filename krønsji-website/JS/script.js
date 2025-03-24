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
      description: "2 Strips + 2 Crispy Salad + Cheese + BBQ + Chili Mayo",
      price: "149Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiBurger.jpeg",
    },
    {
      name: "Krønsji Burger Korean",
      description:
        "2 Korean Strips + 2 Crispy Salad + Cheese + BBQ + Chili Mayo",
      price: "159Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiBurgerKorean.jpg",
    },
    {
      name: "Krønsji Burger Hot",
      description: "2 Hot Strips + 2 Crispy Salad + Cheese + BBQ + Chili Mayo",
      price: "159Kr",
      allergies: ["gluten", "egg"],
      image: "./Assets/images/krønsjiBurgerHot.jpg",
    },
    {
      name: "Krønsji Burger Honey Mustard",
      description: "2 Strips + 2 Crispy Salad + Honey Mustard + Cheese + BBQ",
      price: "159Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiBurgerHoneyMustard.jpg",
    },
    {
      name: "Krønsji Burger Coleslaw",
      description: "4 Strips + 2 Crispy Salad + Cheese + BBQ + Chili Mayo",
      price: "149Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiColeslawBurger.jpg",
    },
    {
      name: "Double Krønsji Burger + Mozzarella Sticks",
      description: "2 Strips + 2 Crispy Salad + Cheese + BBQ + Chili Mayo",
      price: "210Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiDoubleBurger.jpeg",
    },
  ];

  // Crunchy Wraps
  const crunchyWrap = [
    {
      name: "Krønsji Wrap",
      description: "",
      price: "139Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiWrap.jpg",
    },
    {
      name: "Krønsji Wrap Korean",
      description: "",
      price: "149Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiWrapKorean.jpeg",
    },
    {
      name: "Krønsji Wrap Hot",
      description: "",
      price: "149Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiWrapHot.jpg",
    },
  ];

  //Croissants
  const croissants = [
    {
      name: "Sweet Croissant",
      description: "1 Strip + Sweet Chili + Cheese",
      price: "99Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiCriossantSweet.jpg",
    },
    {
      name: "Honey Croissant",
      description: "1 Strip + Honey Mustard + Cheese",
      price: "99Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiCroissantHoneyMustard.jpeg",
    },
    {
      name: "BBQ Croissant",
      description: "1 Strip + BBQ + Cheese",
      price: "99Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiCriossantBBQ.jpg",
    },
  ];

  //Baguettes
  const baguettes = [
    {
      name: "Krønsji Strips Baguette",
      description: "2 Strips + Salad + Fries + BBQ + Chili Mayo",
      price: "149Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiBaguette.jpeg",
    },
  ];

  const falafel = [
    {
      name: "Falafel (6 stk)",
      description: "",
      price: "100Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiFalafel6stk.jpg",
    },
    {
      name: "Rullefalafel",
      description: "",
      price: "130Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiRullefalafel.jpg",
    },
    {
      name: "Falafel i pita",
      description: "",
      price: "130Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiFalafelPita.jpg",
    },
  ];

  //Wings and Strips
  const wingsAndStrips = [
    {
      name: "Krønsji Wings",
      description: "6 Crunchy Wings",
      price: "100Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiWings6.jpg",
    },
    {
      name: "Krønsji Wings",
      description: "12 Crunchy Wings",
      price: "180Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiWings12.jpg",
    },
    {
      name: "Hot Buffalo Wings",
      description: "6 Hot Wings",
      price: "120Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiWingsHot.jpeg",
    },
    {
      name: "Hot Buffalo Wings",
      description: "12 Hot Wings",
      price: "198Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiWingsHot.jpeg",
    },
    {
      name: "Korean Wings",
      description: "6 Korean Wings",
      price: "120Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiWingsKorean.jpg",
    },
    {
      name: "Korean Wings",
      description: "12 Korean Wings",
      price: "198Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiWingsKorean.jpg",
    },
    {
      name: "Krønsji Strips",
      description: "4 Crunchy Strips",
      price: "159Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiStrips.jpeg",
    },
    {
      name: "Krønsji Strips",
      description: "8 Crunchy Strips",
      price: "279Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiStrips.jpeg",
    },
  ];

  //Combos and snack boxes
  const comboSnackBox = [
    {
      name: "Combo Box",
      description: "3 Strips + 3 Wings",
      price: "219Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiCombo3+3.jpg",
    },
    {
      name: "Snackbox 1",
      description:
        "Fries + Crispy Onions + Jalapenos/Chili Mayo + BBQ + Cheese",
      price: "100Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiSnackBox1.jpg",
    },
    {
      name: "Snackbox 2",
      description:
        "2 Strips + Fries + Crispy Onions + Jalapenos/Chili Mayo + BBQ + Cheese",
      price: "139Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiSnackBox234.jpg",
    },
    {
      name: "Snackbox Korean",
      description:
        "2 Korean Strips + Fries + Crispy Onions + Jalapenos/Chili Mayo + BBQ + Cheese",
      price: "158Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiSnackBox234.jpg",
    },
    {
      name: "Snackbox Hot",
      description:
        "2 Hot Strips + Fries + Crispy Onions + Jalapenos/Chili Mayo + BBQ + Cheese",
      price: "158Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiSnackBox234.jpg",
    },
  ];
  // Alle Menyer 
  const menyer = [
    {
      name: "Crispy Burger Meny",
      description: "Crispy Strips, Coleslaw, Brioche brød, Prommesfrites + Brus",
      price: "219Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiCombo3+3.jpg",
    },
    {
      name: "Crispy Wings Meny",
      description: "Wings (6 stk) + Pommesfrites + Brus",
      price: "179Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiCombo3+3.jpg",
    },
    {
      name: "Falafel Meny",
      description: "Rullefalafel + Brus",
      price: "150Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiCombo3+3.jpg",
    },
    {
      name: "Falafel Meny",
      description: "Falafel (6 stk) + Tahini saus + Brus",
      price: "120Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiCombo3+3.jpg",
    },
  ];

  const pizza = [
    {
      name: "Margherita",
      description: "ost, tomatsaus",
      price: "119Kr / 209kr",
      allergies: ["gluten"],
      image: "",
    },
    {
      name: "Svolten Pizza",
      description: "ost, marinert kylling, marinert biff, paprika, løk, sjampinjong",
      price: "159Kr / 259kr",
      allergies: ["gluten"],
      image: "",
    },
    {
      name: "Kylling Pizza",
      description: "ost, marinert kylling, paprika, løk",
      price: "149Kr / 239kr",
      allergies: ["gluten"],
      image: "",
    },
    {
      name: "Taco Pizza",
      description: "ost, biff, kjøttdeig, hvitløk, jalapeños",
      price: "149Kr / 239kr",
      allergies: ["gluten"],
      image: "",
    },
    {
      name: "Kebab Pizza",
      description: "ost, kebab kjøtt, salat, agurk, rødløk, tomat, hvitløk, dressing",
      price: "159Kr / 259kr",
      allergies: ["gluten, egg"],
      image: "",
    },
    {
      name: "Krønsji Pizza",
      description: "ost, hvit saus, crispy strips, pomemes frites, honey mustard, dressing",
      price: "179Kr / 279kr",
      allergies: ["gluten, egg"],
      image: "",
    },
    {
      name: "Krønsji Hot Pizza",
      description: "ost, hvit saus, crispy strips, pomemes frites, jalapeños, chili mayo dressing",
      price: "179Kr / 279kr",
      allergies: ["gluten, egg"],
      image: "",
    },
    {
      name: "Pepperoni Pizza",
      description: "ost, løk, pepperoni, paprika, sjampinjong",
      price: "149Kr / 239kr",
      allergies: ["gluten"],
      image: "",
    },
    {
      name: "Skinke Pizza",
      description: "ost, skinke, tomatsaus",
      price: "149Kr / 239kr",
      allergies: ["gluten"],
      image: "",
    },
    {
      name: "Hawaii Pizza",
      description: "ost, skinke, ananas",
      price: "149Kr / 239kr",
      allergies: ["gluten"],
      image: "",
    },
    {
      name: "Allan Pizza",
      description: "ost, skinke, kjøttdeig, pepperoni, løk, sjampinjong",
      price: "149Kr / 249kr",
      allergies: ["gluten"],
      image: "",
    },
    {
      name: "Bolognese Pizza",
      description: "ost, kjøttdeig, løk",
      price: "135Kr / 215kr",
      allergies: ["gluten"],
      image: "",
    },
  ]

  //All sides
  const sides = [
    {
      name: "Normal Fries",
      description: "",
      price: "57Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiFries.jpg",
    },
    {
      name: "Sweet Fries",
      description: "",
      price: "67Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiSweetFries.jpg",
    },
    {
      name: "Onion Rings (5 stk)",
      description: "",
      price: "57Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiOnionRing.jpg",
    },
    {
      name: "Dips",
      description:
        "Chili Mayo/Garlic/BBQ/Extra Hot Chili Mayo/Honey Mustard/Sweet Chili",
      price: "29Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/krønsjiDips.jpg",
    },
  ];

  // All Drinks
  const drikke = [
    {
      name: "Coca Cola 0.5L",
      description: "",
      price: "40Kr",
      allergies: [""],
      image: "./Assets/images/cola.png",
    },
    {
      name: "Coca Cola Zero 0.5L",
      description: "",
      price: "40Kr",
      allergies: [""],
      image: "./Assets/images/cola.png",
    },
    {
      name: "Fanta Orange 0.5L",
      description: "",
      price: "40Kr",
      allergies: [""],
      image: "./Assets/images/cola.png",
    },
    {
      name: "Fanta Orange Zero 0.5L",
      description: "",
      price: "40Kr",
      allergies: [""],
      image: "./Assets/images/cola.png",
    },
    {
      name: "Fanta Exotic 0.5L",
      description: "",
      price: "40Kr",
      allergies: [""],
      image: "./Assets/images/cola.png",
    },
    {
      name: "Sprite 0.5L",
      description: "",
      price: "40Kr",
      allergies: [""],
      image: "./Assets/images/sprite.png",
    },
    {
      name: "Sprite Zero 0.5L",
      description: "",
      price: "40Kr",
      allergies: [""],
      image: "./Assets/images/cola.png",
    },
    {
      name: "Urge 0.5L",
      description: "",
      price: "40Kr",
      allergies: [""],
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
    descriptionElement.textContent = item.description;

    const allergiesElement = document.createElement("p");
    if (item.allergies != "") {
      allergiesElement.textContent = `Allergier: ${item.allergies.join(", ")}`;
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

  // Initial rendering av menyen

  renderMenu(crunchyBurger);
  renderMenu(crunchyWrap);
  renderMenu(croissants);
  renderMenu(baguettes);
  renderMenu(falafel);
  renderMenu(wingsAndStrips);
  renderMenu(comboSnackBox);
  renderMenu(menyer);
  renderMenu(pizza)
  renderMenu(sides);
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
          renderMenu(crunchyBurger);
          renderMenu(crunchyWrap);
          renderMenu(croissants);
          renderMenu(baguettes);
          renderMenu(falafel);
          renderMenu(wingsAndStrips);
          renderMenu(comboSnackBox);
          renderMenu(menyer);
          renderMenu(pizza);
          renderMenu(sides);
          renderMenu(drikke);
          break;
        case "buttonBurger":
          renderMenu(crunchyBurger);
          break;
        case "buttonWraps":
          renderMenu(crunchyWrap);
          break;
        case "buttonCroissant":
          renderMenu(croissants);
          break;
        case "buttonBaguette":
          renderMenu(baguettes);
          break;
        case "buttonFalafel":
          renderMenu(falafel);
          break;
        case "buttonWings":
          renderMenu(wingsAndStrips);
          break;
        case "buttonCombo":
          renderMenu(comboSnackBox);
          break;
        case "buttonMenu":
          renderMenu(menyer);
          break;
        case "buttonPizza":
          renderMenu(pizza);
          break;
        case "buttonSides":
          renderMenu(sides);
          break;
        case "buttonDrikke":
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

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
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
