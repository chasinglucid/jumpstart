$(document).ready(function () {
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToScroll: 1
  });
});

var scrollTo = 0;
$(window).scroll(function () {
  var scrollTop = $(this).scrollTop();
  if(scrollTop - scrollTo > 50) {
    var navHeight = $('#nav').css('height');
    $('#nav').animate({top: '-'+ navHeight}, 150);
    scrollTo = scrollTop;
  } else if (scrollTo - scrollTop > 50) {
    $('#nav').animate({top: 0}, 150);  
    scrollTo = scrollTop;
  }
});
