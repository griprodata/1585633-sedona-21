const modalLink = document.querySelector(".footer-contact-link");
const modalPopup = document.querySelector(".modal-email");
const modalClose = document.querySelector(".modal-close");
const form = modalPopup.querySelector("form");
const saveName = modalPopup.querySelector("[name = name]");
const saveEmail = modalPopup.querySelector("[name = email]");


let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

modalLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.add("modal-show");

  if (storage) {
    saveName.value = storage;
  } else {
    saveName.focus();
  }
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.remove("modal-show");
  modalPopup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!saveName.value || !saveEmail.value) {
    evt.preventDefault();
    modalPopup.classList.add("modal-error");
    modalPopup.offsetWidth = modalPopup.offsetWidth;
    modalPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", saveName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      modalPopup.classList.remove("modal-show");
      modalPopup.classList.remove("modal-error");
    }

  }
})
