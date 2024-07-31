// Popup
const openPopupButtons = document.querySelectorAll('.pagecrm_open__popup');
const popup = document.querySelector('#popup');
const successPopup = document.querySelector('#success-popup');
const closeSuccessPopupButton = document.querySelector('.pagecrm_popup__close-button');

openPopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        popup.classList.add('open');
    });
});

document.querySelector('#popup-form').addEventListener('submit', event => {
    event.preventDefault();
    if (event.target.checkValidity()) {
        popup.classList.remove('open');
        successPopup.classList.add('open');
    }
});

document.addEventListener('click', event => {
    if (!event.target.closest('.pagecrm_popup__content') && !event.target.closest('.pagecrm_open__popup')) {
        popup.classList.remove('open');
    }
});

closeSuccessPopupButton.addEventListener('click', () => {
    successPopup.classList.remove('open');
});

document.addEventListener('click', event => {
    if (!event.target.closest('.pagecrm_popup__content-success') && !event.target.closest('.pagecrm_popup__close-button')) {
        successPopup.classList.remove('open');
    }
});
