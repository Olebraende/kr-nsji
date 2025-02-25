document.addEventListener("DOMContentLoaded", async function () {
  const menuContainer = document.getElementById("menu");

  try {
    const response = await fetch("menu.json");
    const menuItems = await response.json();

    menuItems.forEach((item) => {
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
  } catch (error) {
    console.error("Feil ved lasting av menyen:", error);
  }
});
