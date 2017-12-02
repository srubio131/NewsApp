'use strict';

// Declaración de modulos de angular y vistas/componentes propios
var app = angular.module("NewsApp",["ngRoute","ngResource","NewsApp.latestNews"]);

app.constant("NEWSAPI", (function() {
    var baseUrl = "https://newsapi.org/v2/";
    var apikey  = "e516be68c0cc451486d8b578e20db4b4";

    return {
        KEY: apikey,
        BASE: baseUrl,
        TOPHEADLINE: baseUrl + "top-headlines",
        EVERYTHING: baseUrl + "everything",
        SOURCES: baseUrl + "sources"
    }
})());

app.config(["$locationProvider", "$routeProvider", function($locationProvider, $routeProvider) {

    var inicioUrl = "/latest-news";

    $locationProvider.html5Mode(true);
    // $locationProvider.hashPrefix("!");
    $routeProvider
        .when("/", { redirectTo: inicioUrl })
        .otherwise({ redirectTo: inicioUrl });
}]);
