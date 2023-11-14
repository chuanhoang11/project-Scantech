export default function headerMobile() {
  let icon__bar = document.getElementById("icon__bar");
  let header__overlay = document.querySelector(".mobile-overlay");
  let header__mobile = document.querySelector(".mobile");

  icon__bar.onclick = function () {
    icon__bar.classList.toggle("active");
    header__overlay.classList.toggle("open");
    header__mobile.classList.toggle("open");
  };
  $(document).ready(function () {
    $(".mobile__menu-link").click(function () {
      $(this).parent().toggleClass("change");
      $(this).parent().children("#mobile__drop-menu").slideToggle();
    });
  });
}
