(function($) {
   $(document).ready(function(){

       // Ocultar navbar y btón ir arriba, al hacer scroll
       var navbar    = $('.navbar');
       var scrollTop = $('#scroll-top');
       $(window).scroll(function (e) {
            e.preventDefault();
            if ($(this).scrollTop() >= 75) {
              navbar.fadeOut();
              scrollTop.fadeIn();
            } else {
              navbar.fadeIn();
              scrollTop.fadeOut();
            }
       });

       // Botón ir arriba
       $('#scroll-top').click(function(e) {
          e.preventDefault();
          $('html, body').animate({scrollTop: 0}, 800);
       });

   }) ;
})(jQuery);