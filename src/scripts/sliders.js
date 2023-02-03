const pagNumLast = document.querySelector(".pag-num-last");
const bussinesSlideCardlength = document.querySelectorAll(
  ".bussines__slide-card"
).length;
const swiperBussines = new Swiper(".swiper-bussines", {
  slidesPerView: 1.7,
  spaceBetween: 00,
  mousewheel: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 00,
    },
    768: {
      slidesPerView: 1.4,
      spaceBetween: 00,
    },
    1024: {
      slidesPerView: 1.7,
      spaceBetween: 00,
    },
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  },
  pagination: {
    el: ".swiper-bussines-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-bussines-button-next",
    prevEl: ".swiper-bussines-button-prev",
  },
  scrollbar: {
    el: ".swiper-bussines-scrollbar",
    hide: false,
  },
});
const setLastNumber = () => {
  if (bussinesSlideCardlength < 10) {
    pagNumLast.textContent = "0" + bussinesSlideCardlength;
  }
};
setLastNumber();
