'use strict';

angular
    .module("NewsApp")
    .constant("NEWSAPI", NewsApiConstants());

function NewsApiConstants () {
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
            { id: "ar", name: "Árabe" },
            { id: "en", name: "Inglés" },
            //{ id: "cn", name: "" },
            { id: "de", name: "Alemán" },
            { id: "es", name: "Español" },
            { id: "fr", name: "Francés" },
            { id: "he", name: "Hebreo" },
            { id: "it", name: "Italiano" },
            { id: "nl", name: "Holandés" },
            { id: "no", name: "Noruego" },
            { id: "pt", name: "Portugués" },
            { id: "ru", name: "Ruso" },
            { id: "sv", name: "Sueco" },
            //{ id: "ud", name: "" }
        ],
        COUNTRIES: [
            "ar","au","br","ca","cn","de","es","fr","gb","hk","ie","in","is","it","nl","no","pk","ru","sa","sv","us","za"
        ],
        SORTBY: [
            "relevancy", "popularity", "publishedAt"
        ]
    }
};
