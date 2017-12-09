'use strict';

angular.module("NewsApp.latestNews", ["ngRoute"])

.config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when("/latest-news", {
            controller: "LatestNewsCtrl",
            templateUrl: "views/latest-news/latest-news.html"
        });
}])

.controller("LatestNewsCtrl",["NewsAPIUrlsFactory","$scope","$resource", function(NewsAPIUrlsFactory,$scope,$resource){

    // Cargar últimas noticias
    if (!$scope.topheadlines) {
        var urlTopHeadLiness = NewsAPIUrlsFactory.getUrlTopHeadlines('el-mundo');
        $scope.topheadlines = $resource(urlTopHeadLiness).get();
    }

}]);