export default function sliderSwiper() {
  const slider = document.querySelector(".slider");

  if (slider) {
    let swiper2 = new Swiper(slider.querySelector(".sliderSwiper"), {
      spaceBetween: 10,
      effect: "cards",
      grabCursor: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      //   breakpoints: {
      //     600: {
      //       effect: "fade",
      //       loop: true,
      //       slidesPerView: 1,
      //       autoplay: {
      //         delay: 5000,
      //       },
      //     },
      //   },
    });
  }
}
