'use strict';

angular.module("NewsApp.search", ["ngRoute"])

    .config(["$routeProvider", function($routeProvider) {
        $routeProvider
            .when("/search", {
                controller: "SearchCtrl",
                templateUrl: "views/search/search.html"
            });
    }])

    .controller("SearchCtrl",["NewsAPIUrlsFactory","$scope","$resource", function(NewsAPIUrlsFactory,$scope,$resource){



    }])