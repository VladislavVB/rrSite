const pagNumLast = document.querySelector(".pag-num-last");
const bussinesSlideCardlength = document.querySelectorAll(
  ".bussines__slide-card"
).length;
const swiperBussines = new Swiper(".swiper-bussines", {
  slidesPerView: 1.7,
  spaceBetween: 00,
  mousewheel: true,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: true
  // },
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
