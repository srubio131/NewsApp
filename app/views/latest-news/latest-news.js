'use strict';

angular.module("NewsApp.latestNews", ["ngRoute"])

.config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when("/latest-news", {
            controller: "LatestNewsCtrl",
            templateUrl: "views/latest-news/latest-news.html"
        });
}])

.controller("LatestNewsCtrl",["DataNewsAPIFactory", "$scope", function(DataNewsAPIFactory, $scope){

    // Cargar últimas noticias
    if (!$scope.topheadlines) {
        $scope.topheadlines = DataNewsAPIFactory.getTopHeadlines('el-mundo');
    }

}]);