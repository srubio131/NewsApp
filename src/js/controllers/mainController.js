var app = angular.module("NewsApp");

app.controller("MainController",["NewsAPIUrlsFactory","$scope","Restangular", function(NewsAPIUrlsFactory,$scope,Restangular){

    console.log('entrooo');
    console.log(NewsAPIUrlsFactory.getUrlTopHeadlines('el-mundo'));

    // $scope.topheadlines = Restangular.getRequestedUrl(NewsAPIUrlsFactory.getUrlTopHeadlines('el-mundo'));
    // console.log($scope.topheadlines);

}]);