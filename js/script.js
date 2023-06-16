// Получение ссылок на элементы кнопки, модального окна и кнопки закрытия
let openBtns = document.querySelectorAll(".open-modal");
let modals = document.querySelectorAll(".modal");
let closeBtns = document.querySelectorAll(".close-modal");
let modalOverlay = document.querySelector(".modal-overlay");

openBtns.forEach((openBtn) => {
  openBtn.addEventListener("click", () => {
    let modalId = openBtn.dataset.modal;
    let modal = document.querySelector("#" + modalId);
    modal.style.display = "block";
    modalOverlay.style.display = "block";
  });
});

closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    let modal = closeBtn.closest(".modal");
    modal.style.display = "none";
    modalOverlay.style.display = "none";
  });
});



document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modals.forEach((modal) => {
      modal.style.display = "none";
    });
    modalOverlay.style.display = "none";
  }
});