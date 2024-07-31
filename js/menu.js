// Меню Бургер

const burgerMenu = document.querySelector('.pagecrm_header__burger-menu');
const navMenu = document.querySelector('.pagecrm_header__nav__mobile');

burgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

document.addEventListener('click', event => {
    if (!navMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
        navMenu.classList.remove('open');
    }
});

// Меню Услуги

let servicesLink = document.querySelector('.pagecrm_header__link');
let submenu = document.querySelector('.pagecrm_header__submenu');

servicesLink.addEventListener('click', function (event) {
    event.preventDefault();

    if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'block';
    }
});

document.addEventListener('click', function (event) {
    let isClickInsideSubmenu = submenu.contains(event.target);
    let isClickOnServicesLink = event.target === servicesLink;

    if (!isClickInsideSubmenu && !isClickOnServicesLink) {
        submenu.style.display = 'none';
    }
});

// Скролл меню

window.addEventListener('scroll', function () {
    let header = document.querySelector('.pagecrm_header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Телефон

document.querySelector('.pagecrm_header__phone').addEventListener('click', function () {
    let phoneNumber = 'tel:88124095222';
    window.location.href = phoneNumber;
});
