/*document.addEventListener('DOMContentLoaded', () => {
  const languageSelector = document.getElementById('languageSelector');
  const elementsToTranslate = document.querySelectorAll('[data-translate]');

  const translations = {
    no: {
      menu: 'Meny',
      about: 'Om oss',
      contact: 'Kontakt oss',
      openingHours: 'Åpningstider',
      address: 'Addresse',
      phone: 'Telefon',
      socialMedia: 'Sosiale medier',
      toTop: '⬆ Til Toppen',
      allergies: 'Allergier',
      menuSection: 'Meny',
      friedChickenDeluxe: 'Fried Chicken Deluxe',
      spicyWings: 'Spicy Wings',
      crispyStrips: 'Crispy Strips',
      gluten: 'gluten',
      milk: 'melk',
      soy: 'soya',
      egg: 'egg'
    },
    en: {
      menu: 'Menu',
      about: 'About us',
      contact: 'Contact us',
      openingHours: 'Opening Hours',
      address: 'Address',
      phone: 'Phone',
      socialMedia: 'Social Media',
      toTop: '⬆ To Top',
      allergies: 'Allergies',
      menuSection: 'Menu',
      friedChickenDeluxe: 'Fried Chicken Deluxe',
      spicyWings: 'Spicy Wings',
      crispyStrips: 'Crispy Strips',
      gluten: 'gluten',
      milk: 'milk',
      soy: 'soy',
      egg: 'egg'
    }
  };

  languageSelector.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    elementsToTranslate.forEach(element => {
      const key = element.getAttribute('data-translate');
      element.textContent = translations[selectedLanguage][key];
    });
  });
});
/*