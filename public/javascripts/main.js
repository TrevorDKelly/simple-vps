document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    formData = new FormData(e.target);
    data = {};
    for (let pair of formData.entries()) {
      data[pair[0]] = pair[1];
    }

    fetch(form.action, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  });
});
