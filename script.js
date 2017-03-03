$(document).ready(function(){
     $('.slider').slider();
});

$(document).ready(function(){
     $('ul.tabs').tabs();
});

$(document).ready(function(){
     $('.carousel').carousel({
       indicators: true,
     });
});

$(document).ready(function(){
  $(window).scroll(function() {
      var scrollPos = $(window).scrollTop(),
          navbar = $('.nav-wrapper');

      if (scrollPos > 20) {
        navbar.addClass('change-color');
      } else {
        navbar.removeClass('change-color');
      }
    });
});
