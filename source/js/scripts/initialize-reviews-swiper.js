import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { getCurrentDevice, getSpace } from './utils.js';

function initReviewsSwiper() {
  let currentDevice = getCurrentDevice();
  const swiper = new Swiper('.reviews-swiper', {
    modules: [Navigation, Pagination, Scrollbar],
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: getSpace(currentDevice),
    loop: false,
    navigation: {
      nextEl: '.reviews-swiper-container__button--next',
      prevEl: '.reviews-swiper-container__button--prev',
    },
    scrollbar: {
      el: '.reviews__scrollbar',
      hide: false,
      draggable: true,
      snapOnRelease: true,
      dragSize: currentDevice === 'desktop' ? 395 : 326,
    },
    simulateTouch: currentDevice !== 'desktop',
    watchOverflow: true,
  });

  window.addEventListener('resize', () => {
    const newDevice = getCurrentDevice();
    if (newDevice !== currentDevice) {
      currentDevice = newDevice;
      swiper.params.spaceBetween = getSpace(newDevice);
      swiper.params.simulateTouch = newDevice !== 'desktop';
      swiper.update();
      swiper.updateSize();
      swiper.navigation.update();
      swiper.scrollbar.updateSize();
    }
  });
}


export default initReviewsSwiper;
