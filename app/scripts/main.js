let cosmosCake = {
  init() {

    // hamburger init function
    this.hamburgerInitFunc();

    // swiper init function
    this.swiperInitFunc();

    // footer input val function
    this.iputValFunc();
  },

  hamburgerInitFunc() {
    $('.hamburger').on('click', function () {
      $(this).toggleClass('is-active');
      $('.header-menu_nav').slideToggle().toggleClass('is-active-menu');
    });
  },

  iputValFunc() {
    $(".input-range").on("input", function(){
      $(".input-text").val(this.value);
    });
  },

  swiperInitFunc() {
    new Swiper ('.swiper-container', {
      loop: true,
      slidesPerView: 3,
      simulateTouch: false,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        767: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        }
      }
    })
  },
}.init();


