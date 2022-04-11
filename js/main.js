var swiper = new Swiper(".slider", {
  // loop: true,
  spaceBetween: 30,
  slidesPerView: 'auto',
  centeredSlides: true,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});