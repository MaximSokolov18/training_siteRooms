$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  });
});
$(document).ready(function () {
  $(".slider-next").slick({
    dots: false,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
$(document).ready(function () {
  $(".header__burger").click(function () {
    $(".header__burger,.nav-body").toggleClass("active");
  });
});
