
$(document).ready(function() {
$('.hamburger').on('click', function (event) {
  $(this).toggleClass('is-active');
  $('.header-menu_nav').slideToggle().toggleClass('is-active-menu');
});


var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }


})


});



// $('.gallery-slider').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 0
// });