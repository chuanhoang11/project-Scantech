import AosModule from "./module/AosModule.js";
import Select2Module from "./module/Select2Module.js";
import GalleryModule from "./module/GalleryModule.js";
import TabModule from "./module/TabModule.js";
import headerMobile from "./headerMobile.js";
import headerScroll from "./headerScroll.js";
import bannerSwiper from "./bannerSwiper.js";
import SwiperModule from "./SwiperModule.js";
import sliderSwiper from "./sliderSwiper.js";
import personSwiper from "./personSwiper.js";

window.addEventListener("DOMContentLoaded", () => {
  // Animation
  AosModule();
  // Tab
  TabModule();
  // Select
  Select2Module();
  // Component
  SwiperModule();
  bannerSwiper();
  sliderSwiper();
  personSwiper();
  GalleryModule();
  headerMobile();
  headerScroll();
});
