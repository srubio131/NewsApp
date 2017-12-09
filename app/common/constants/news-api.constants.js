'use strict';

angular.module("NewsApp")

.constant("NEWSAPI", (function() {
    var baseUrl = "https://newsapi.org/v2/";
    var apikey  = "e516be68c0cc451486d8b578e20db4b4";

    return {
        KEY: apikey,
        BASE: baseUrl,
        TOPHEADLINE: baseUrl + "top-headlines",
        EVERYTHING: baseUrl + "everything",
        SOURCES: baseUrl + "sources",
        CATEGORIES: [
            "business","entertainment","gaming","general","health-and-medical","music",
            "politics","science-and-nature","sport","technology"
        ],
        LANGUAGES: [
            "ar", "en", "cn", "de", "es", "fr", "he", "it", "nl", "no", "pt", "ru", "sv", "ud"
        ],
        COUNTRIES: [
            "ar","au","br","ca","cn","de","es","fr","gb","hk","ie","in","is","it","nl","no","pk","ru","sa","sv","us","za"
        ],
        SORTBY: [
            "relevancy", "popularity", "publishedAt"
        ]
    }
})());
