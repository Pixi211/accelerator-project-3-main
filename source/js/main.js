import activateFAQAccordion from './scripts/activate-faq-accordion';
import activateMenu from './scripts/activate-menu';
import initHeroSwiper from './scripts/initialize-hero-swiper';
import initNewsSwiper from './scripts/initialize-news-swiper';
import initProgramsSwiper from './scripts/initialize-programs-swiper';
import initReviewsSwiper from './scripts/initialize-reviews-swiper';
import {activateModal} from './scripts/forms/activate-modal';
import initModalFormValidation from './scripts/forms/validate-modal-form';
import initModalDropdown from './scripts/forms/initialize-modal-dropdown';
import initFormValidation from './scripts/forms/validate-form';
import initFormDropdown from './scripts/forms/initialize-form-dropdown';

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
