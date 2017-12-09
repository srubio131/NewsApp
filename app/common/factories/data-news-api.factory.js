'use strict';

angular.module("NewsApp")

// Factory que devuelve las URLs de las llamadas a la API
.factory("DataNewsAPIFactory", ["NewsAPIUrlsService", "$resource", function(NewsAPIUrlsService, $resource){

    return (function(){

        // Private methods
        var sourcesDefault = ['el-mundo'];

        // Public methods
        return {
            getTopHeadlines: function (sources,q,category,language,country) {
                if(!sources){
                    sources = sourcesDefault;    // By default
                }
                var urlTopHeadLiness = NewsAPIUrlsService.getUrlTopHeadlines(sources,q,category,language,country);
                return $resource(urlTopHeadLiness).get().$promise;
            },
            getEverything: function (q, sources, domains, from, to, language, sortBy, page) {
                var urlEverything = NewsAPIUrlsService.getUrlEverything(q, sources, domains, from, to, language, sortBy, page);
                return $resource(urlEverything).get().$promise;
            },
            getSources: function (category, language, country) {
                var urlSources = NewsAPIUrlsService.getUrlSources(category, language, country);
                return $resource(urlSources).get().$promise;
            }
        };
    })();
}]);