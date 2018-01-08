'use strict';

angular
    .module("NewsApp")
    .directive("advancedSearchBox", function(){
        return {
            restrict: 'EA',
            templateUrl: 'components/directives/advanced-search-box/advanced-search-box.html',
            css: 'components/directives/advanced-search-box/advanced-search-box.css'         // Provide by angular-css
        }
    })
    .controller("AdvancedSearchBoxCtrl",["DataNewsAPIFactory", "NEWSAPI", "$scope", "$filter", function (DataNewsAPIFactory, NEWSAPI, $scope, $filter) {

        $scope.selectedSource = null;
        $scope.sources = [];
        $scope.selectedLanguage = null;
        $scope.languages = NEWSAPI.LANGUAGES;
        $scope.selectedSortBy = null;
        $scope.sortby = NEWSAPI.SORTBY;

        // TODO. Guardar en un array los sources y no estar pidiendolos cada vez
        // Recuperar la lista de sources y cargarlos en el select de sources
        DataNewsAPIFactory
        .getSources()
        .then(function(result){
            $scope.sources = result.sources;
        })
        .catch(function(err){
           console.error('GetSources error: ',err);
        });

        // Search
        $scope.search = function(selectedSearch,selectedSource,selectedFrom,selectedTo,selectedLanguage,selectedSortBy) {

            // Convert dates to ISO 8601 format
            selectedFrom = $filter('date')(selectedFrom, 'yyyy-MM-dd');
            selectedTo   = $filter('date')(selectedTo, 'yyyy-MM-dd');

            DataNewsAPIFactory.getEverything(selectedSearch,selectedSource,'',selectedFrom,selectedTo,selectedLanguage,selectedSortBy, 20)
                .then(function (result) {
                    $scope.articles = result.articles;
                })
                .catch(function (err) {
                    console.error(err.data.code + ' - ' + err.data.message);
                });
        };
    }]);