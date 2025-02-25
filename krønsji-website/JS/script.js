// script.js

document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.querySelector(".menu-items");
  const searchInput = document.querySelector("#menu-search");

  if (!menuContainer) {
    console.error("Menu container not found");
    return;
  }

  const menuItems = [
    {
      name: "Fried Chicken Deluxe",
      price: "99Kr",
      allergies: "gluten, melk, soya",
      image: "images/fried_chicken.jpg",
    },
    {
      name: "Spicy Wings",
      price: "79Kr",
      allergies: "gluten, melk",
      image: "images/spicy_wings.jpg",
    },
    {
      name: "Crispy Strips",
      price: "89Kr",
      allergies: "gluten, egg",
      image: "images/crispy_strips.jpg",
    },
  ];

  function renderMenu(items) {
    menuContainer.innerHTML = ""; // Rens menyen før ny rendering
    items.forEach((item) => {
      const menuItemElement = document.createElement("div");
      menuItemElement.classList.add("menu-item");

      const imgElement = document.createElement("img");
      imgElement.src = item.image;
      imgElement.alt = item.name;

      const textContainer = document.createElement("div");
      textContainer.classList.add("menu-text");

      const nameElement = document.createElement("h3");
      nameElement.textContent = item.name;

      const allergiesElement = document.createElement("p");
      allergiesElement.textContent = `Allergies: ${item.allergies}`;

      const priceElement = document.createElement("p");
      priceElement.textContent = item.price;
      priceElement.classList.add("price");

      textContainer.appendChild(nameElement);
      textContainer.appendChild(allergiesElement);
      textContainer.appendChild(priceElement);

      menuItemElement.appendChild(imgElement);
      menuItemElement.appendChild(textContainer);

      menuContainer.appendChild(menuItemElement);
    });
  }

  // Initial rendering av menyen
  renderMenu(menuItems);

  // Søkefunksjon
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filteredItems = menuItems.filter((item) =>
        item.name.toLowerCase().includes(searchTerm)
      );
      renderMenu(filteredItems);
    });
  }
});
