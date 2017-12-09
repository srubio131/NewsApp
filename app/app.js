'use strict';

// Declaración de modulos de angular y vistas/componentes propios
var app = angular.module("NewsApp",["ngRoute","ngResource", "pascalprecht.translate","NewsApp.latestNews","NewsApp.search"]);

app.config(["$locationProvider", "$routeProvider", "$translateProvider", function($locationProvider, $routeProvider, $translateProvider) {

    // HTML5Mode rompe el routing...
    //$locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix("!");
    $routeProvider.otherwise({ redirectTo: '/latest-news' });

    // Translate provider i18n
    $translateProvider.useStaticFilesLoader({
        prefix: "i18n/locale.",
        suffix: ".json"
    });
    $translateProvider.preferredLanguage('es');
    $translateProvider.useSanitizeValueStrategy('escape');

}]);
