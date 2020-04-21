// const useref = require("gulp-useref");

$(function() {
  // let hrefs = document.getElementsByTagName('a');
  // hrefs.addEventListener('click', function() {
  //   event.preventDefault();
  // });
  $('a').on('click', function (e) {
    e.preventDefault();
  })
});


let cosmosCake = {
  init() {

    // hamburger init function
    this.hamburgerInitFunc();

    // swiper init function
    this.swiperInitFunc();

    // footer input val function
    this.iputValFunc();

    this.chooseFormFunc();

    this.footerButtonSlider();
  },
  hamburgerInitFunc() {
    $('.hamburger').on('click', function () {
      $(this).toggleClass('is-active');
      $('.header-menu_nav').slideToggle().toggleClass('is-active-menu');
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
  iputValFunc() {
    $('.input-range').on('input', function(){
      $('.input-text').val(this.value);
    });
  },
  chooseFormFunc() {
    $('.footer-form-list>li').on('click', function() {
      $(this).addClass('active').siblings(this).removeClass('active');
    });

    $('.footer-form-list>.cupcake').on('click', function() {
      $('.cupcake-form').addClass('open').siblings(this).removeClass('open');
    });
    $('.footer-form-list>.cake').on('click', function() {
      $('.cake-form').addClass('open').siblings(this).removeClass('open');
    });
    $('.footer-form-list>.gift').on('click', function() {
      $('.gift-form ').addClass('open').siblings(this).removeClass('open');
    });
    $('.footer-form-list>.individual').on('click', function() {
      $('.individual-form').addClass('open').siblings(this).removeClass('open');
    });
  },
  footerButtonSlider() {
    $('.next').click(function () {
      var currentBtn = $('.footer-form-item.active'),
        currentBtnIndex = $('.footer-form-item.active').index(),
        nextBtnIndex = currentBtnIndex + 1,
        nextBtn = $('.footer-form-item').eq(nextBtnIndex);
      // currentBtn.fadeOut(0);
      currentBtn.removeClass('active');

      if(nextBtnIndex == ($('.footer-form-item:last').index()+1)) {
        // $('.footer-form-item').eq(0).fadeIn(0);
        $('.footer-form-item').eq(0).addClass('active').click();
      }else{
        // nextBtn.fadeIn(0);
        nextBtn.addClass('active').click();
      }
    });
    $('.prev').click(function () {
      var currentBtn = $('.footer-form-item.active'),
        currentBtnIndex = $('.footer-form-item.active').index(),
        prevBtnIndex = currentBtnIndex - 1,
        prevBtn = $('.footer-form-item').eq(prevBtnIndex);
      // currentBtn.fadeOut(0);
      currentBtn.removeClass('active');
      // prevBtn.delay(0).fadeIn(0);
      prevBtn.addClass('active').click();
    })
  }

}.init();

$(document).ready(function () {
  $('.about-item>img').click(function (e) {
    console.log('+');
  })
});
/*

w: 150px;
sumW:
* */
