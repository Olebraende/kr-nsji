document.addEventListener("DOMContentLoaded", async function () {
  const menuContainer = document.getElementById("menu");
  let menuItems = [];

  try {
    const response = await fetch("menu.json");
    menuItems = await response.json();
    displayMenu(menuItems);
  } catch (error) {
    console.error("Feil ved lasting av menyen:", error);
  }

  // Funksjon for å vise menyen
  function displayMenu(items) {
    menuContainer.innerHTML = "";
    items.forEach((item) => {
      const menuItem = document.createElement("div");
      menuItem.classList.add("menu-item");

      menuItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span>${item.price}</span>
            `;

      menuContainer.appendChild(menuItem);
    });
  }

  // Søkefunksjon
  window.filterMenu = function () {
    const searchQuery = document.getElementById("search").value.toLowerCase();
    const filteredItems = menuItems.filter((item) =>
      item.name.toLowerCase().includes(searchQuery)
    );
    displayMenu(filteredItems);
  };
});
