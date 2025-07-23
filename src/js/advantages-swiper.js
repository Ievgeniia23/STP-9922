import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const swiperEl = document.querySelector('[data-swiper="advantages"]');
const paginationEl = document.querySelector('[data-pagination="advantages"]');
const prevBtn = document.querySelector(
  '[data-swiper-button-prev="advantages"]'
);
const nextBtn = document.querySelector(
  '[data-swiper-button-next="advantages"]'
);

if (swiperEl && paginationEl) {
  const swiper = new Swiper(swiperEl, {
    modules: [Pagination, Navigation],
    pagination: {
      el: paginationEl,
      clickable: true,
    },
    navigation: {
      prevEl: prevBtn,
      nextEl: nextBtn,
    },
    slidesPerView: 2,
    spaceBetween: 12,
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
}
