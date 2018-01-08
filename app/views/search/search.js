'use strict';

angular
    .module("NewsApp.search", ["ngRoute"])
    .config(SearchConfig)
    //.controller("SearchCtrl", SearchCtrl);

function SearchConfig($routeProvider) {
    $routeProvider
        .when("/search", {
            //controller: "SearchCtrl",
            //controllerAs: "vm",
            templateUrl: "views/search/search.html"
        });
}