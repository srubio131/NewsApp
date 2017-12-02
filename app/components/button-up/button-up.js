(function($) {
    $(document).ready(function(){

        // Ocultar botón ir arriba por defecto y al hacer scroll hacerlo visible
        $(window).scroll(function (e) {
            e.preventDefault();
            if ($(this).scrollTop() >= 100) {
                $('#scroll-top').fadeIn();
            } else {
                $('#scroll-top').fadeOut();
            }
        });

        // Click botón ir arriba
        $('#scroll-top').click(function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: 0}, 800);
        });

    }) ;
})(jQuery);