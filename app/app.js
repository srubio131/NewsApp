'use strict';

// Declaración de modulos de angular y vistas/componentes propios
angular
    .module("NewsApp",["ngRoute","ngResource","pascalprecht.translate","NewsApp.latestNews","NewsApp.search","angularCSS"])
    .config(appConfig);

function appConfig ($locationProvider, $routeProvider, $translateProvider) {

    $routeProvider.otherwise({ redirectTo: '/latest-news' });
    $locationProvider.html5Mode(true); // Quitar el # de las url's

    // Translate provider i18n
    $translateProvider.useStaticFilesLoader({
        prefix: "i18n/locale.",
        suffix: ".json"
    });
    $translateProvider.preferredLanguage('es');
    $translateProvider.useSanitizeValueStrategy('escape');
};
