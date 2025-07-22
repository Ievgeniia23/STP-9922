import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

// import { Navigation, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  slidesPerView: 3,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
       slidesPerView: 2,
      spaceBetween: 12,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
);

//   modules: [Navigation, Pagination],
// direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
// });







// document.addEventListener('DOMContentLoaded', function () {
//   const projSwiper = new Swiper('.projects-swiper', {
//     modules: [Navigation, Keyboard],
//     slidesPerView: 1,
//     spaceBetween: 20,
//     grabCursor: true,
//     allowTouchMove: true,

//     keyboard: {
//       enabled: true,
//       onlyInViewport: true,
//     },
//     //  mousewheel: {
//     //    invert: false,
//     //  },
//   });
//   const buttonProjPrev = document.querySelector('.proj-left-button');
//   const buttonProjNext = document.querySelector('.proj-right-button');

//   function updateButtons(projSwiper, buttonProjPrev, buttonProjNext) {
//     if (projSwiper.isBeginning) {
//       buttonProjPrev.disabled = true;
//     } else {
//       buttonProjPrev.disabled = false;
//     }

//     if (projSwiper.isEnd) {
//       buttonProjNext.disabled = true;
//     } else {
//       buttonProjNext.disabled = false;
//     }
//   }

//   buttonProjPrev.addEventListener('click', () => {
//     projSwiper.slidePrev();
//     updateButtons(projSwiper, buttonProjPrev, buttonProjNext);
//     buttonProjPrev.blur();
//   });

//   buttonProjNext.addEventListener('click', () => {
//     projSwiper.slideNext();
//     updateButtons(projSwiper, buttonProjPrev, buttonProjNext);
//     buttonProjNext.blur();
//   });

//   updateButtons(projSwiper, buttonProjPrev, buttonProjNext);
// });
