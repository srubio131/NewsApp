(function($) {
    $(document).ready(function(){

        // Ocultar navbar y al hacer scroll hacerlo visible
        $(window).scroll(function (e) {
            e.preventDefault();
            if ($(this).scrollTop() >= 100) {
                $('.navbar').fadeOut();
            } else {
                $('.navbar').fadeIn();
            }
        });

    }) ;
})(jQuery);