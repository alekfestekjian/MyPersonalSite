// Write any custom javascript functions here
// Write any custom javascript functions here
// $(document).on("scroll",function(){
//     if($(document).scrollTop()>100){
//         $('div').removeclass("large").addClass("small");
//     } else{
//         $('div').removeClass("small").addClass("large");
//     }
// // })
$('.top-bar').css('background-color', 'transparent');
$('.top-bar-left ul').css('background-color', 'transparent');
$('.top-bar-right ul').css('background-color', 'transparent');
$(document).on("scroll",function(){
  // if ($(document).scrollTop() > 200) {
  //   $('.top-bar-left a').addClass('shrink');
  //
  //   if($(this).scrollTop() > 400){
  //     $('.top-bar-left ul').addClass('show');
  //     $('.top-bar-right ul').addClass('show');
  //     $('.top-bar').addClass('show');
  //
  //
  //   }
  // } else {
  //   $('.top-bar-right a').removeClass('shrink');
  //   $('.top-bar-left ul').removeClass('show');
  //   $('.top-bar-right ul').removeClass('show');
  //   $('.top-bar').removeClass('show');
  // }


  if ($(this).scrollTop() > 200) {
        $('.top-bar-left a').css('font-size', '75%');
        $('.top-bar-right a').css('font-size', '75%');
        if($(this).scrollTop() > 400){
          $('.top-bar-left ul').css('background-color', '#777');
          $('.top-bar-right ul').css('background-color', '#777');
          $('.top-bar').css('background-color', '#777');
          $('.top-bar').css('border-color', '#777')
          $('.top-bar-left ul').css('border-color', '#777')
          $('.top-bar-right ul').css('border-color', '#777')
        }
  }
  else{
      $('.top-bar-left a').css('font-size', '120%');
      $('.top-bar-right a').css('font-size', '120%');
      $('.top-bar').css('background-color', 'transparent');
      $('.top-bar-left ul').css('background-color', 'transparent');
      $('.top-bar-right ul').css('background-color', 'transparent');

  }
});

$('a[href^="#"]').on('click',function (e) {
  //get child hash

    // CHeck for when smaller screensize
    Foundation.MediaQuery.current
    if (Foundation.MediaQuery.atLeast('medium')) {
      var target = this.hash;
      var $target = $(target);
      e.preventDefault();
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top -$('.top-bar').outerHeight()
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
    }
    else{
      var target = this.hash;
      var $target = $(target);
      e.preventDefault();
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top -$('.title-bar').outerHeight()
      }, 900, 'swing', function () {
          window.location.hash = target;
      });

    }
});

$(document).ready(function(){
  $('#Internships').eq($('.slick-active').index()).addClass('animated fadeInDown');
  $('#Internships').slick({
    dots: true,
    infinite: true,
    speed: 700,
    fade: true,
    cssEase: 'linear',
    swipeToSlide: true,
    responsive: [{
    breakpoint: 420,
    settings: "unslick" // destroys slick

  }]
  });
});

function onScreen() {
    // Check if the top of the page collides with each section
    Foundation.MediaQuery.current
    if (Foundation.MediaQuery.atLeast('medium')) {
      $('div').each(function() {
          var windowScroll = $(document).scrollTop();
          var navHeight = $('.top-bar').height();

          // if($(window).scrollTop() + $(window).height() == $(document).height()) {
          //       alert("bottom!");
          // }
          // if( windowScroll + navHeight>= $(this).offset().top && windowScroll + navHeight < $(this).offset().top + $(this).height()) {
          //     $('.top-bar-right ul a#' + $(this).attr('id')+'-button').addClass('highlight');
          //   } else {
          //     $('.top-bar-right ul a#' + $(this).attr('id')+'-button').removeClass('highlight');
          // }
          if($(window).scrollTop() + $(window).height() == $(document).height()) {
              $('.top-bar-right ul a#' +'Video-button').addClass('highlight');
              $('.top-bar-right ul a#' + $(this).attr('id')+'-button').removeClass('highlight');
          }
          else{
            if( windowScroll + navHeight >= $(this).offset().top && windowScroll + navHeight < $(this).offset().top + $(this).height()) {
              $('.top-bar-right ul a#' + $(this).attr('id')+'-button').addClass('highlight');
            } else {
              $('.top-bar-right ul a#' + $(this).attr('id')+'-button').removeClass('highlight');
            }

          }

      });

      $('section').each(function() {
            var windowScroll = $(document).scrollTop();
            var navHeight = $('.top-bar').height();
            if($(window).scrollTop() + $(window).height() == $(document).height()) {
                $('.top-bar-right ul a#' +'Video-button').addClass('highlight');
                $('.top-bar-right ul a#' + $(this).attr('id')+'-button').removeClass('highlight');
            }
            else{
              if( windowScroll + navHeight >= $(this).offset().top && windowScroll + navHeight < $(this).offset().top + $(this).height()) {
                $('.top-bar-right ul a#' + $(this).attr('id')+'-button').addClass('highlight');
              } else {
                $('.top-bar-right ul a#' + $(this).attr('id')+'-button').removeClass('highlight');
              }

            }


          });
    }
}

$(window).on('scroll resize', function () {
    onScreen();
});
