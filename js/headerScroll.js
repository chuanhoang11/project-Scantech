export default function headerScroll() {
  $(document).ready(function () {
    $(window).on("scroll", function () {
      if ($(window).scrollTop()) {
        $("#headerScantech").addClass("sticky");
      } else {
        $("#headerScantech").removeClass("sticky");
      }
    });
  });
}
