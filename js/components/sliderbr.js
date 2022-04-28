import "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
import "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js";
function slickSliderbr(selector){

  $(selector).slick({
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

}
export { slickSliderbr }