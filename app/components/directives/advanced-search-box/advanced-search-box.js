'use strict';

angular
    .module("NewsApp")
    .directive("advancedSearchBox", advancedSearchBoxDrt);

function advancedSearchBoxDrt() {
    return {
        restrict: 'EA',
        templateUrl: 'components/directives/advanced-search-box/advanced-search-box.html',
        css: 'components/directives/advanced-search-box/advanced-search-box.css',         // Provide by angular-css
        controller: advancedSearchBoxCtrl,
        controllerAs: 'vm'
    }
}

function advancedSearchBoxCtrl(DataNewsAPIFactory, NEWSAPI, $filter) {

    var vm = this;

    vm.selectedSource = null;
    vm.sources = [];
    vm.selectedLanguage = null;
    vm.languages = NEWSAPI.LANGUAGES;
    vm.selectedSortBy = null;
    vm.sortby = NEWSAPI.SORTBY;

    // TODO. Guardar en un array los sources y no estar pidiendolos cada vez
    // Recuperar la lista de sources y cargarlos en el select de sources
    DataNewsAPIFactory
        .getSources()
        .then(function(result){
            vm.sources = result.sources;
        })
        .catch(function(err){
            console.error('GetSources error: ',err);
        });

    // Search
    vm.search = function search() {

        // Convert dates to ISO 8601 format
        var selectedFrom = $filter('date')(vm.selectedFrom, 'yyyy-MM-dd');
        var selectedTo   = $filter('date')(vm.selectedTo, 'yyyy-MM-dd');

        DataNewsAPIFactory.getEverything(vm.selectedSearch,vm.selectedSource,'',selectedFrom,selectedTo,vm.selectedLanguage,vm.selectedSortBy, 20)
            .then(function (result) {
                vm.articles = result.articles;
            })
            .catch(function (err) {
                console.error(err.data.code + ' - ' + err.data.message);
            });
    };
};