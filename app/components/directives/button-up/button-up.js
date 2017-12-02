'use strict';

// Directiva
angular
    .module("NewsApp")
    .directive("buttonUp", function(){
       return {
           restrict: 'EA',
           template: '<i id="scroll-top" class="fa fa-arrow-circle-up fa-3x" aria-hidden="true"></i>',
           link: function(scope, element, attrs) {
               // Ocultar botón ir arriba por defecto y al hacer scroll hacerlo visible
               $(window).scroll(function (event) {
                   event.preventDefault();
                   if ($(this).scrollTop() > 100) {
                       console.log($(this).scrollTop());
                       $('#scroll-top').fadeIn();
                   } else {
                       $('#scroll-top').fadeOut();
                   }
               });

               // Scrollear hacia arriba cuando pulse el botón
               element.bind('click', function(event) {
                   event.preventDefault();
                   $('html, body').animate({scrollTop: 0}, 800);
               });

               // Cambiar el estilo al pasar por encima del botón
               element.css({
                   position: 'fixed',
                   bottom: '20px',
                   right: '20px',
                   display: 'flex',
                   justifyContent: 'flex-end',
                   color: '#585858'
               });

               element.on('mouseenter', function() {
                  element.css({
                      textDecoration: 'none',
                      color: '#000'
                  });
               });

               element.on('mouseleave', function() {
                   element.css({
                       textDecoration: 'none',
                       color: '#585858'
                   });
               });
           }
       }
    });