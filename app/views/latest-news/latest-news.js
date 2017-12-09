'use strict';

angular.module("NewsApp.latestNews", ["ngRoute"])

.config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when("/latest-news", {
            controller: "LatestNewsCtrl",
            templateUrl: "views/latest-news/latest-news.html"
        });
}])

.controller("LatestNewsCtrl",["DataNewsAPIFactory", "$scope", "$filter", function(DataNewsAPIFactory, $scope, $filter){

    // Cargar últimas noticias
    if (!$scope.topheadlines) {
        DataNewsAPIFactory.getTopHeadlines()
        .then(function (news) {
            $scope.topheadlines = news;
        })
        .catch(function (err) {
            console.error(err.data.code + ' - ' + err.data.message);
        });
    }

}]);