var app = angular.module("NewsApp");

app.controller("MainController",["NewsAPIUrlsFactory","$scope","Restangular", function(NewsAPIUrlsFactory,$scope,Restangular){

    $scope.topheadlines = Restangular.getRequestedUrl(NewsAPIUrlsFactory.getUrlTopHeadlines('el-mundo'));
    console.log($scope.topheadlines);

}]);