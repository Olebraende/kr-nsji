document.addEventListener('DOMContentLoaded', () => {
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
      toTop: '⬆ Til Toppen'
    },
    en: {
      menu: 'Menu',
      about: 'About us',
      contact: 'Contact us',
      openingHours: 'Opening Hours',
      address: 'Address',
      phone: 'Phone',
      socialMedia: 'Social Media',
      toTop: '⬆ To Top'
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
