$(document).ready(function () {
  $(".sliderbr").slick({
    infinite: true,
    arrows: true,
    dots: false,
    autoplay: false,
    autoplaySpeed: 0,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '.btnKaire',
    nextArrow: '.btnDesine',
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
$('btnDesine').click(function() {
    $(this).slickNext();
});
  $('btnKaire').click(function() {
    $(this).slickPrev();
});
  