// import Swiper from "https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js";
const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
