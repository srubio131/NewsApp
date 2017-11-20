var app = angular.module("NewsApp",["ngRoute","restangular"]);

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

app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            controller: "MainController",
            templateUrl: "../templates/news.html"
        })
        .otherwise("/");
});