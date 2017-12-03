var app = angular.module("NewsApp");

// Factory que devuelve las URLs de las llamadas a la API
app.factory("NewsAPIUrlsFactory", ["NEWSAPI", function(NEWSAPI){

    return (function(){

        // Public methods
        return {
            getUrlTopHeadlines: function(source) {
                return NEWSAPI.TOPHEADLINE + "?sources=" + source + "&apikey=" + NEWSAPI.KEY;
            },
            getUrlEverything: function(q, sources, domains, from, to, language, sortBy, page) {
                var url = NEWSAPI.EVERYTHING + "?";

                if (q) {
                    url += "q=" + q + "&";
                }
                if (sources) {
                    url += "sources=" + sources + "&";
                }
                if (domains) {
                    url += "domains=" + domains + "&";
                }
                if (from) {
                    url += "from=" + from + "&";
                }
                if (to) {
                    url += "to=" + to + "&";
                }
                if (language) {
                    url += "language=" + language + "&";
                }
                if (sortBy) {
                    url += "sortBy=" + sortBy + "&";
                }
                if (page) {
                    url += "page=" + page + "&";
                }
                // Añadir "&" en caso de que no haya ningún parámetro con valor
                url = (url.slice(-1) !== "&") ? url+"&" : url;
                url = url + "apikey=" + NEWSAPI.KEY;

                return url;
            },
            getUrlSources: function (category, language, country) {
                var url = NEWSAPI.SOURCES + "?";

                // Añadir category si tiene...
                if (category) {
                    url += category + "&";
                }
                // Añadir language si tiene...
                if (language) {
                    url += language + "&";
                }
                // Añadir country si tiene...
                if (country) {
                    url += country + "&";
                }
                // Añadir "&" en caso de que no haya ningún parámetro con valor
                url = (url.slice(-1) !== "&") ? url+"&" : url;
                url = url + "apikey=" + NEWSAPI.KEY;

                return url;
            }
        };
    })();
}]);