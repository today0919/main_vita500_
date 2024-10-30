var swiper = new Swiper(".slide-intro", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  // autoplay: true,
  pagination: {
    el: ".slide-intro .swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".slide-studio", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".slide-studio .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".slide-box3", {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});