'use strict';

// Declaración de modulos de angular y vistas/componentes propios
var app = angular.module("NewsApp",["ngRoute","ngResource", "pascalprecht.translate","NewsApp.latestNews","NewsApp.search"]);

app.constant("NEWSAPI", (function() {
    var baseUrl = "https://newsapi.org/v2/";
    var apikey  = "e516be68c0cc451486d8b578e20db4b4";

    return {
        KEY: apikey,
        BASE: baseUrl,
        TOPHEADLINE: baseUrl + "top-headlines",
        EVERYTHING: baseUrl + "everything",
        SOURCES: baseUrl + "sources",
        CATEGORIES: [
            "business","entertainment","gaming","general","health-and-medical","music",
            "politics","science-and-nature","sport","technology"
        ],
        LANGUAGES: [
            "ar", "en", "cn", "de", "es", "fr", "he", "it", "nl", "no", "pt", "ru", "sv", "ud"
        ],
        COUNTRIES: [
            "ar","au","br","ca","cn","de","es","fr","gb","hk","ie","in","is","it","nl","no","pk","ru","sa","sv","us","za"
        ],
        SORTBY: [
            "relevancy", "popularity", "publishedAt"
        ]
    }
})());

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
