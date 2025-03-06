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
      image: "./Assets/images/IMG_4621.jpeg",
    },
    {
      name: "Spicy Wings",
      price: "79Kr",
      allergies: "gluten, melk",
      image: "./Assets/images/IMG_4633.jpeg",
    },
    {
      name: "Crispy Strips",
      price: "89Kr",
      allergies: "gluten, egg",
      image: "./Assets/images/IMG_4641.jpeg",
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
