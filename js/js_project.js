//slick slider
$(document).ready(function(){
  $('.project-slider').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 441,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  });
});