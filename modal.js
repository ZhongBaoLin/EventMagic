document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".contact-form");
  const modal = document.getElementById("successModal");
  const closeBtn = document.getElementById("closeModal");

  if (form && modal && closeBtn) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      modal.style.display = "flex";
      this.reset();
    });

    closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
    });
  }
});
