import activateFAQAccordion from './scripts/activate-faq-accordion.js';
import activateMenu from './scripts/activate-menu.js';
import initHeroSwiper from './scripts/initialize-hero-swiper.js';
import initNewsSwiper from './scripts/initialize-news-swiper.js';
import initProgramsSwiper from './scripts/initialize-programs-swiper.js';
import initReviewsSwiper from './scripts/initialize-reviews-swiper.js';
import {activateModal} from './scripts/forms/activate-modal.js';
import initModalFormValidation from './scripts/forms/validate-modal-form.js';
import initModalDropdown from './scripts/forms/initialize-modal-dropdown.js';
import initFormValidation from './scripts/forms/validate-form.js';
import initFormDropdown from './scripts/forms/initialize-form-dropdown.js';

document.addEventListener('DOMContentLoaded', activateMenu);
document.addEventListener('DOMContentLoaded', initHeroSwiper);
document.addEventListener('DOMContentLoaded', initProgramsSwiper);
document.addEventListener('DOMContentLoaded', initNewsSwiper);
document.addEventListener('DOMContentLoaded', activateFAQAccordion);
document.addEventListener('DOMContentLoaded', initReviewsSwiper);

document.addEventListener('DOMContentLoaded', activateModal);
document.addEventListener('DOMContentLoaded', initModalFormValidation);
document.addEventListener('DOMContentLoaded', initModalDropdown);

document.addEventListener('DOMContentLoaded', initFormValidation);
document.addEventListener('DOMContentLoaded', initFormDropdown);
