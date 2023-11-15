export default function bannerSwiper() {
  const banner = document.querySelector(".banner");

  if (banner) {
    let swiper = new Swiper(banner.querySelector(".mySwiper"), {
      loop: true,
      spaceBetween: 80,

      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 3,
        },
        621: {
          slidesPerView: 4,
        },
      },
    });
    let swiper2 = new Swiper(banner.querySelector(".swiper"), {
      loop: true,
      spaceBetween: 10,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });
  }
}
