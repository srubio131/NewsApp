var app = angular.module("NewsApp");

// Factory que devuelve las URLs de las llamadas a la API
app.factory("NewsAPIUrlsFactory", ["NEWSAPI", function(NEWSAPI){

    return (function(){

        // Public methods
        return {
            getUrlTopHeadlines: function(source) {
                return NEWSAPI.TOPHEADLINE + "?sources=" + source + "&apikey=" + NEWSAPI.KEY;
            },
            getUrlEverything: function(query) {
                var url = NEWSAPI.EVERYTHING + "?";
                if (query) {
                    url += "q=" + query;
                }
                url += "&apikey=" + NEWSAPI.KEY;

                return url;
            },
            getUrlSources: function () {
                return NEWSAPI.SOURCES + "?apikey=" + NEWSAPI.KEY;
            }
        };
    })();
}]);