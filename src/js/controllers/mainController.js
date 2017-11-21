var app = angular.module("NewsApp");

app.controller("MainController",["NewsAPIUrlsFactory","$scope","$resource", function(NewsAPIUrlsFactory,$scope,$resource){

    var urlTopHeadLiness = NewsAPIUrlsFactory.getUrlTopHeadlines('el-mundo');
    $scope.topheadlines = $resource(urlTopHeadLiness, {}).get();


}]);