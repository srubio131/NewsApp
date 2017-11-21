var app = angular.module("NewsApp");

app.controller("MainController",["NewsAPIUrlsFactory","$scope","$resource", function(NewsAPIUrlsFactory,$scope,$resource){

    // Cargar últimas noticias
    var urlTopHeadLiness = NewsAPIUrlsFactory.getUrlTopHeadlines('el-mundo');
    $scope.topheadlines = $resource(urlTopHeadLiness, {}).get();


}]);