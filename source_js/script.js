// Write any custom javascript functions here
// Write any custom javascript functions here
// $(document).on("scroll",function(){
//     if($(document).scrollTop()>100){
//         $('div').removeclass("large").addClass("small");
//     } else{
//         $('div').removeClass("small").addClass("large");
//     }
// })

$(document).on("scroll",function(){
  if ($(this).scrollTop() > 100) {
        $('.top-bar-left a').css('font-size', '75%');
        $('.top-bar-right a').css('font-size', '75%');
  }

  else{
      $('.top-bar-left a').css('font-size', '120%');
      $('.top-bar-right a').css('font-size', '120%');
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

          if( windowScroll + navHeight>= $(this).offset().top && windowScroll + navHeight < $(this).offset().top + $(this).height()) {
              $('.top-bar-right ul a#' + $(this).attr('id')+'-button').addClass('highlight');
            } else {
              $('.top-bar-right ul a#' + $(this).attr('id')+'-button').removeClass('highlight');
            }

          });
          $('section').each(function() {
            var windowScroll = $(document).scrollTop();
            var navHeight = $('.top-bar').height();

            if( windowScroll + navHeight >= $(this).offset().top && windowScroll + navHeight < $(this).offset().top + $(this).height()) {
              $('.top-bar-right ul a#' + $(this).attr('id')+'-button').addClass('highlight');
            } else {
              $('.top-bar-right ul a#' + $(this).attr('id')+'-button').removeClass('highlight');
            }

          });
    }
}

$(window).on('scroll resize', function () {
    onScreen();
});
