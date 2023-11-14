export default function personSwiper() {
  const person = document.querySelector(".person");

  if (person) {
    let swiper2 = new Swiper(person.querySelector(".personSwiper"), {
      //   effect: "coverflow",

      grabCursor: true,
      centeredSlides: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        998: {
          slidesPerView: 4,
        },
      },
    });
  }
}
