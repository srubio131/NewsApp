'use strict';

angular
    .module("NewsApp")
    // Service que devuelve las URLs de las llamadas a la API
    .service("NewsAPIUrlsService", NewsAPIUrlsService);

function NewsAPIUrlsService(NEWSAPI) {
    this.getUrlTopHeadlines = function(sources,q,category,language,country) {
        var url = NEWSAPI.TOPHEADLINE + "?";

        if (sources) {
            url += "sources=" + sources.join(',') + "&";
        }
        if (q) {
            url += "q=" + q + "&";
        }
        if (category) {
            url += "category=" + category + "&";
        }
        if (language) {
            url += "language=" + language + "&";
        }
        if (country) {
            url += "country=" + country + "&";
        }
        url = url + "apikey=" + NEWSAPI.KEY;

        return url;
    };

    this.getUrlEverything = function(q, sources, domains, from, to, language, sortBy, page) {
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
    };

    this.getUrlSources = function (category, language, country) {
        var url = NEWSAPI.SOURCES + "?";

        // Añadir category si tiene...
        if (category) {
            url += "category=" + category + "&";
        }
        // Añadir language si tiene...
        if (language) {
            url += "language=" + language + "&";
        }
        // Añadir country si tiene...
        if (country) {
            url += "country=" + country + "&";
        }
        // Añadir "&" en caso de que no haya ningún parámetro con valor
        url = (url.slice(-1) !== "&") ? url+"&" : url;
        url = url + "apikey=" + NEWSAPI.KEY;

        return url;
    };
};