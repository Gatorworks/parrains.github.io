$(document).ready(function() {

  if(!($('body').hasClass('interior'))) {
    $('.bxslider').bxSlider({
      mode: 'fade',
      speed: 1000,
      pause: 7500,
      controls: false,
      auto: true,
      autoControls: false,
      pager: false,
      easing: 'swing',
    });
    $('.box').click(function(){
     window.location.href='menu.html';
    });
  } else {
      if ($(window).width() > 768) {
        $(window).scroll(function () {
            var scrollTop = $("body").scrollTop();
            var elOffset = $('#base-hero').offset().top;
            var mainOffset = (elOffset - scrollTop) / 15;
            if ($('.gallery').length) {
                $('#base-hero').css({
                    'filter': 'blur(' + parseInt(-scrollTop / 6) + 'px)',
                    '-webkit-filter': 'blur(' + parseInt(-scrollTop / 6) + 'px)',
                    '-moz-filter': 'blur(' + parseInt(-scrollTop / 6) + 'px)',
                    'opacity': 1 - (Math.abs(mainOffset ) / 18),
                });
            } else {
                $('#base-hero').css({
                    'filter': 'blur(' + parseInt(-scrollTop / 6) + 'px)',
                    '-webkit-filter': 'blur(' + parseInt(-scrollTop / 6) + 'px)',
                    '-moz-filter': 'blur(' + parseInt(-scrollTop / 6) + 'px)',
                    'opacity': 1 - (Math.abs(mainOffset ) / 18),
                    'background-position': '50% ' + parseInt(-scrollTop / 6) + 'px'
                });
            }

        });
    };

  };

  $('.navbar-toggle').on('click', function(){
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
    $('.navbar-brand').toggleClass('open');
  });

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

});
