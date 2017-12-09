'use strict';

angular.module("NewsApp")

// Factory que devuelve las URLs de las llamadas a la API
.factory("DataNewsAPIFactory", ["NewsAPIUrlsService", "$resource", function(NewsAPIUrlsService, $resource){

    return (function(){

        // Private methods

        // Public methods
        return {
            getTopHeadlines: function(source) {
                if(!source){
                    source = 'el-mundo';    // By default
                }
                var urlTopHeadLiness = NewsAPIUrlsService.getUrlTopHeadlines(source);
                return $resource(urlTopHeadLiness).get().$promise;
            }
        };
    })();
}]);