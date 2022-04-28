$(document).ready(function () {
  $(".sliderbr").slick({
    infinite: true,
    arrows: true,
    dots: false,
    autoplay: false,
    autoplaySpeed: 0,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '.btnKaireBr',
    nextArrow: '.btnDesineBr',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
$('btnDesineBr').click(function() {
    $(this).slickNext();
});
  $('btnKaireBr').click(function() {
    $(this).slickPrev();
});
  