import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';

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
    spaceBetween: 16, // базовое значение
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });

function setActiveButton(direction) {
  prevBtn.classList.remove('is-active');
  nextBtn.classList.remove('is-active');

  if (direction === 'prev') {
    prevBtn.classList.add('is-active');
  } else {
    nextBtn.classList.add('is-active');
  }
}

prevBtn.addEventListener('click', () => setActiveButton('prev'));
nextBtn.addEventListener('click', () => setActiveButton('next'));


});
