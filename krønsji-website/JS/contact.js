document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Hindrer standard innsending som fører til ny side

    const formData = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        const statusMessage = document.getElementById("statusMessage");
        if (response.ok) {
          statusMessage.textContent = "Takk! E-posten din ble sendt.";
          form.reset();
        } else {
          statusMessage.textContent = "Noe gikk galt. Prøv igjen senere.";
        }
      })
      .catch((error) => {
        const statusMessage = document.getElementById("statusMessage");
        statusMessage.textContent = "Feil ved sending: " + error;
      });
  });
});

const contactForm = document.querySelector("#contactForm");
const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
});
