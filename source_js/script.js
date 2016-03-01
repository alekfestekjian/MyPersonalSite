// Write any custom javascript functions here


$('.top-bar').css('background-color', 'transparent');
$('.top-bar-left ul').css('background-color', 'transparent');
$('.top-bar-right ul').css('background-color', 'transparent');

/*
http://www.bootply.com/109943
shrinking nav bar
*/

$(document).on("scroll",function(){

  if ($(this).scrollTop() > 200) {
        $('.top-bar-left a').css('font-size', '85%');
        $('.top-bar-right a').css('font-size', '85%');

        if($(this).scrollTop() > 400){
          $('.top-bar-left ul').css('background-color', '#222222');
          $('.top-bar-right ul').css('background-color', '#222222');
          $('.top-bar').css('background-color', '#222222');
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
/**http://kenwheeler.github.io/slick/*/
$(document).ready(function(){
  $('#Internships').eq($('.slick-active').index()).addClass('animated fadeInDown');
  $('#Internships').slick({
    dots: false,
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


/*Position derived from*/
/*https://api.jquery.com/hover/*/
/*http://stackoverflow.com/questions/23206101/navigation-bar-that-tells-where-you-are*/
function onScreen() {
    // Check if the top of the page collides with each section
    Foundation.MediaQuery.current
    if (Foundation.MediaQuery.atLeast('medium')) {
      $('div').each(function() {
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
    else{
      $('.top-bar-right ul a#' + 'About-button').removeClass('highlight');
      $('.top-bar-right ul a#' + 'Experience-button').removeClass('highlight');
      $('.top-bar-right ul a#' + 'Books-button').removeClass('highlight');
      $('.top-bar-right ul a#' + 'Video-button').removeClass('highlight');

    }
}

$(window).on('scroll resize', function () {
    onScreen();
});
