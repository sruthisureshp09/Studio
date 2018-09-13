import $ from "jquery";

$(document).ready(function() {
  // toggle menu start
  $(".btn").click(function() {
    $(".nav").toggleClass("active");
  });
  // toggle menu end
});

$(function() {
  var selectedClass = "";
  $(".fil-cat").click(function() {
    selectedClass = $(this).attr("data-rel");
    $("#portfolio").fadeTo(100, 0.1);
    $("#portfolio div")
      .not("." + selectedClass)
      .fadeOut()
      .removeClass("scale-anm");
    setTimeout(function() {
      $("." + selectedClass)
        .fadeIn()
        .addClass("scale-anm");
      $("#portfolio").fadeTo(300, 1);
    }, 300);
  });
});

/* $(document).ready(function() {
  $("#testimonial-slider").owlCarousel({
    items: 3,
    itemsDesktop: [1199, 2],
    itemsDesktopSmall: [979, 1],
    itemsTablet: [767, 1],
    pagination: true,
    navigation: true,
    navigationText: ["", ""],
    autoPlay: true
  });
});
 */
/* $(document).ready(function() {
  $(".autoplay").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 2000,
    navigation: false,
    nextArrow:
      '<button type="button" class="slick-next"><img src={require("../assets/images/left-arrow.png")}> PREVIOUS</button>',
    prevArrow:
      '<button type="button" class="slick-prev">NEXT <img src={require("../assets/images/right-arrow.png")}></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2
        }
      }
    ]
  });
}); */
