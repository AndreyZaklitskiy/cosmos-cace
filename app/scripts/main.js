
$('.hamburger').on('click', function (event) {
  $(this).toggleClass('is-active');
  $('.header-menu_nav').slideToggle().toggleClass('is-active-menu');
});

// var OT = function () {

// };

// $('.cake-prices').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 992,
//       settings: {
//         arrows: false,
//         slidesToShow: 1
//       }
//     }
//   ]
// });