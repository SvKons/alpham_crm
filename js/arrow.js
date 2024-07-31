// Стрелочка топ форма

const selectWrap = document.querySelector('.pagecrm_form__select-wrap');
const select = document.querySelector('.pagecrm_form__select');
const arrow = document.querySelector('.pagecrm_form__select-arrow');

selectWrap.addEventListener('click', () => {
    selectWrap.classList.toggle('open');
});

// Стрелочка форма услуги

const selectWrapper = document.querySelector('.pagecrm_form-service__select-wrap');
const selectItem = document.querySelector('.pagecrm_form-service__select');
const arrowSelect = document.querySelector('.pagecrm_form-service__select-arrow');

selectWrapper.addEventListener('click', () => {
    selectWrapper.classList.toggle('open');
});
