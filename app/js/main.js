$(document).ready(function() {
  $(".testimonials").slick({
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  });
// XXXXXXXXXXXXXXXXXXXXXXXXXXXX
  var topPosition = $("#works").offset().top;
  $(window).on("scroll", function() {
    var scrolling = $(document).scrollTop() + $(window).height();
    if (scrolling > topPosition + 300) {
      $(".work").addClass("work-animated");
    }
  });
// XXXXXXXXXXXXXXXXXXXXXXXXXXXX
  $(window).on("scroll", function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".header__top-container").addClass("fixed-background");
      $(".header__top").addClass("fixed");
    } else if (scroll < 50) {
      $(".header__top-container").removeClass("fixed-background");
      $(".header__top").removeClass("fixed");
    }
  });
// XXXXXXXXXXXXXXXXXXXXXXXXX
  $("a").on("click", function() {
    $("html, body").animate({
      scrollTop: ($( $(this).attr("href")).offset().top - 65 )
    }, 800);
  });
// XXXXXXXXXXXXXXXXXXXXXXXXX
});
