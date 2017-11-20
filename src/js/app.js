var app = angular.module("NewsApp",["ngRoute","restangular"]);

app.configure(function($routeProvider){
    $routeProvider
        .when("/", {
            controller: "MainController",
            templateUrl: "templates/news.html"
        });
});