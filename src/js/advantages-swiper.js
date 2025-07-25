import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', () => {
  const swiperEl = document.querySelector('[data-swiper="advantages"]');
  if (!swiperEl) return;

  const paginationEl = swiperEl.querySelector('[data-pagination="advantages"]');
  const prevBtn = swiperEl.querySelector(
    '[data-swiper-button-prev="advantages"]'
  );
  const nextBtn = swiperEl.querySelector(
    '[data-swiper-button-next="advantages"]'
  );

  new Swiper(swiperEl, {
    modules: [Pagination, Navigation],
    pagination: {
      el: paginationEl,
      clickable: true,
    },
    navigation: {
      prevEl: prevBtn,
      nextEl: nextBtn,
    },
    slidesPerView: 'auto',
    spaceBetween: 12,
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
});
