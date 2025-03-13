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
      price: "129Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4623.jpeg",
    },
    {
      name: "Krønsji Burger Korean",
      description:
        "2 Korean Strips + 2 Crispy Salad + Cheese + BBQ + Chili Mayo",
      price: "139Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4623.jpeg",
    },
    {
      name: "Krønsji Burger Hot",
      description: "2 Hot Strips + 2 Crispy Salad + Cheese + BBQ + Chili Mayo",
      price: "139Kr",
      allergies: ["gluten", "egg"],
      image: "./Assets/images/IMG_4623.jpeg",
    },
    {
      name: "Krønsji Burger Honey Mustard",
      description: "2 Strips + 2 Crispy Salad + Honey Mustard + Cheese + BBQ",
      price: "139Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4623.jpeg",
    },
    {
      name: "Krønsji Burger Avocado",
      description: "2 Strips + 2 Crispy Salad + Avocado Sauce + Cheese + BBQ",
      price: "139Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4634.jpeg",
    },
    {
      name: "Krønsji Burger Coleslaw",
      description: "4 Strips + 2 Crispy Salad + Cheese + BBQ + Chili Mayo",
      price: "169Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4623.jpeg",
    },
    {
      name: "Double Krønsji Burger",
      description: "2 Strips + 2 Crispy Salad + Cheese + BBQ + Chili Mayo",
      price: "129Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4633.jpeg",
    },
  ];

  // Crunchy Wraps
  const crunchyWrap = [
    {
      name: "Krønsji Wrap",
      description: "",
      price: "129Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4639.jpeg",
    },
    {
      name: "Krønsji Wrap Korean",
      description: "",
      price: "139Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4639.jpeg",
    },
    {
      name: "Krønsji Wrap Hot",
      description: "",
      price: "139Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4639.jpeg",
    },
  ];

  //Croissants
  const croissants = [
    {
      name: "Sweet Croissant",
      description: "1 Strip + Sweet Chili + Cheese",
      price: "79Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4638.jpeg",
    },
    {
      name: "Honey Croissant",
      description: "1 Strip + Honey Mustard + Cheese",
      price: "79Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4636.jpeg",
    },
    {
      name: "BBQ Croissant",
      description: "1 Strip + BBQ + Cheese",
      price: "79Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4636.jpeg",
    },
  ];

  //Baguettes
  const baguettes = [
    {
      name: "Krønsji Strips Baguette",
      description: "2 Strips + Salad + Fries + BBQ + Chili Mayo",
      price: "129Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4622.jpeg",
    },
  ];

  //Wings and Strips
  const wingsAndStrips = [
    {
      name: "Krønsji Wings",
      description: "6 Crunchy Wings",
      price: "74Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4626.jpeg",
    },
    {
      name: "Krønsji Wings",
      description: "12 Crunchy Wings",
      price: "136Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4626.jpeg",
    },
    {
      name: "Hot Buffalo Wings",
      description: "6 Hot Wings",
      price: "109Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4626.jpeg",
    },
    {
      name: "Hot Buffalo Wings",
      description: "12 Hot Wings",
      price: "159Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4626.jpeg",
    },
    {
      name: "Korean Wings",
      description: "6 Korean Wings",
      price: "109Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4626.jpeg",
    },
    {
      name: "Korean Wings",
      description: "12 Korean Wings",
      price: "159Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4626.jpeg",
    },
    {
      name: "Krønsji Strips",
      description: "4 Crunchy Strips",
      price: "159Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4621.jpeg",
    },
    {
      name: "Krønsji Strips",
      description: "8 Crunchy Strips",
      price: "279Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4621.jpeg",
    },
  ];

  //Combos, sharing and snack boxes
  const comboSharingBox = [
    {
      name: "Combo Box",
      description: "3 Strips + 3 Wings",
      price: "129Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4635.jpeg",
    },
    {
      name: "Combo Box",
      description: "5 Strips + 5 Wings",
      price: "219Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4635.jpeg",
    },
    {
      name: "Combo Box",
      description: "8 Strips + 8 Wings",
      price: "339Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4635.jpeg",
    },
    {
      name: "Sharing Box",
      description: "9 Wings + 9 Strips + 2 Normal Fries + 2 Dips",
      price: "419Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4635.jpeg",
    },
    {
      name: "Wings Bucket",
      description: "36 Wings + 2 Normal Fries + 3 Dips",
      price: "419Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4635.jpeg",
    },
    {
      name: "Wings Bucket",
      description: "36 Wings + 2 Normal Fries + 3 Dips",
      price: "419Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4630.jpeg",
    },
    {
      name: "Snackbox 1",
      description:
        "Fries + Crispy Onions + Jalapenos/Chili Mayo + BBQ + Cheese",
      price: "79Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4630.jpeg",
    },
    {
      name: "Snackbox 2",
      description:
        "2 Strips + Fries + Crispy Onions + Jalapenos/Chili Mayo + BBQ + Cheese",
      price: "139Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4630.jpeg",
    },
    {
      name: "Snackbox Korean",
      description:
        "2 Korean Strips + Fries + Crispy Onions + Jalapenos/Chili Mayo + BBQ + Cheese",
      price: "149Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4630.jpeg",
    },
    {
      name: "Snackbox Hot",
      description:
        "2 Hot Strips + Fries + Crispy Onions + Jalapenos/Chili Mayo + BBQ + Cheese",
      price: "149Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4630.jpeg",
    },
  ];

  //All sides
  const sides = [
    {
      name: "Normal Fries",
      description: "",
      price: "49Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4630.jpeg",
    },
    {
      name: "Curly Fries",
      description: "",
      price: "74Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4630.jpeg",
    },
    {
      name: "Sweet Fries",
      description: "",
      price: "59Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4630.jpeg",
    },
    {
      name: "Onion Rings (5 stk)",
      description: "",
      price: "49Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4630.jpeg",
    },
    {
      name: "Chili Cheese (5 stk)",
      description: "",
      price: "49Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4630.jpeg",
    },
    {
      name: "Dips",
      description: "Chili Mayo/Garlic/BBQ/Extra Hot Chili Mayo/Honey Mustard/Sweet Chili",
      price: "29Kr",
      allergies: ["gluten", "melk"],
      image: "./Assets/images/IMG_4630.jpeg",
    },
  ];

  // All Drinks
  const drikke = [
    {
      name: "Cola 0.33L",
      description: "",
      price: "39Kr",
      allergies: [""],
      image: "./Assets/images/drikkeCola.png",
    },
  ];



  function createBurgerItemElement(item) {
    const menuItemElement = document.createElement("div");
    menuItemElement.classList.add("menu-item");

    const imgElement = document.createElement("img");
    imgElement.src = item.image;
    imgElement.alt = item.name;

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

    menuItemElement.appendChild(imgElement);
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
  renderMenu(wingsAndStrips);
  renderMenu(comboSharingBox);
  renderMenu(sides);
  renderMenu(drikke);

  buttons.forEach(button => {
    button.addEventListener("click", (e) => {
      // Remove active class from all buttons
      buttons.forEach(btn => btn.classList.remove("button-active"));
  
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
          renderMenu(wingsAndStrips);
          renderMenu(comboSharingBox);
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
        case "buttonWings":
          renderMenu(wingsAndStrips);
          break;
        case "buttonCombo":
          renderMenu(comboSharingBox);
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
