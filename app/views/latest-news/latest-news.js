'use strict';

angular
    .module('NewsApp.latestNews', ['ngRoute'])
    .config(LatestNewsConfig)
    .controller('LatestNewsCtrl', LatestNewsCtrl);

function LatestNewsConfig ($routeProvider) {
    $routeProvider
        .when("/latest-news", {
            controller: "LatestNewsCtrl",
            controllerAs: "vm",
            templateUrl: "views/latest-news/latest-news.html"
        });
}

function LatestNewsCtrl(DataNewsAPIFactory) {

    var vm = this;

    // Cargar últimas noticias
    if (!vm.topheadlines) {
        DataNewsAPIFactory.getTopHeadlines()
            .then(function (news) {
                vm.topheadlines = news;
            })
            .catch(function (err) {
                console.error(err.data.code + ' - ' + err.data.message);
            });
    }
}