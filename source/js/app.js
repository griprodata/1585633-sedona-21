const contactsButton = document.querySelector(".contacts__button");
const contactsPopup = document.querySelector(".contacts__module--two");
const contactsClose = contactsPopup.querySelector(".contacts__module-button--two");
const contactsForm = document.querySelector(".contacts__form");
const contactsMessage = document.querySelector(".contacts__message");
const contactsName = document.querySelector(".contacts__input--name");
const contactsSureName = document.querySelector(".contacts__input--surename");
const contactsPatronymic = document.querySelector(".contacts__input--patronymic");
const contactsPhone = document.querySelector(".contacts__input--phone");
const contactsMail = document.querySelector(".contacts__input--mail");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}


contactsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.add("contacts-show")

  if (storage) {
    contactsMessage.value = storage;
    contactsSureNamefocus();
  } else {
  contactsMessage.focus();
  }
});

contactsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.remove("contacts-show");
});

contactsForm.addEventListener("submit", function (evt) {
  if (!contactsMessage.value || !contactsName.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", contactsMessage.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactsPopup.classList.contains("contacts-show")) {
      evt.preventDefault();
      contactsPopup.classList.remove("contacts-show");
    }
  }
});
