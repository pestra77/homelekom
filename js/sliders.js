$(function(){
  // $('.gallery__slider').slick({
  //   dots: false,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 6,
  //   slidesToScroll: 1,
  //   prevArrow: '<div class="arrow-left arrow"><i class="fas fa-caret-left"></i></div>',
  //   nextArrow: '<div class="arrow-right arrow"><i class="fas fa-caret-right"></i></div>',
  //   responsive: [
  //    {
  //      breakpoint: 1024,
  //      settings: {
  //        slidesToShow: 6,
  //        slidesToScroll: 3,
  //        infinite: true,
  //      }
  //    },
  //    {
  //      breakpoint: 600,
  //      settings: {
  //        slidesToShow: 2,
  //        slidesToScroll: 2
  //      }
  //    },
  //    {
  //      breakpoint: 480,
  //      settings: {
  //        slidesToShow: 1,
  //        slidesToScroll: 1
  //      }
  //    }
  //   ]
  // });

  $('.gallery__slider').slick({
    prevArrow: '<div class="arrow-left arrow"><i class="fas fa-caret-left"></i></div>',
    nextArrow: '<div class="arrow-right arrow"><i class="fas fa-caret-right"></i></div>',
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.colors__slider').slick({
    prevArrow: '<div class="arrow-left arrow"><i class="fas fa-caret-left"></i></div>',
    nextArrow: '<div class="arrow-right arrow"><i class="fas fa-caret-right"></i></div>',
  });

  $('.works__slider').slick({
    prevArrow: '<div class="arrow-left arrow"><i class="fas fa-caret-left"></i></div>',
    nextArrow: '<div class="arrow-right arrow"><i class="fas fa-caret-right"></i></div>',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.works__carousel'
  });

  $('.works__carousel').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.works__slider',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    prevArrow: '<div class="arrow-left arrow"><img src="./img/icons/slice-6.png"></div>',
    nextArrow: '<div class="arrow-right arrow"><img src="./img/icons/slice-8.png"></div>',
    responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 6,
         slidesToScroll: 3,
         infinite: true,
       }
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     }
    ]
  });

  $('.reviews__slider').slick({
    prevArrow: '<div class="arrow-left arrow"><i class="fas fa-caret-left"></i></div>',
    nextArrow: '<div class="arrow-right arrow"><i class="fas fa-caret-right"></i></div>',
    // slidesToShow: 1,
    // slidesToScroll: 1,
    arrows: true,
    asNavFor: '.reviews__slider-info'
  });

  $('.reviews__slider-info').slick({
    fade: true,
    // // slidesToShow: 1,
    // slidesToScroll: 1,
    arrows: false,
    // focusOnSelect: true,
    // asNavFor: 'reviews__slider'
  });
});
