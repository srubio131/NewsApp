describe("Tests factoy 'data-news-api'", function () {

    var DataNewsAPIFactory;

    beforeEach(module("NewsApp"));
    beforeEach(inject(function (_DataNewsAPIFactory_) {
        DataNewsAPIFactory = _DataNewsAPIFactory_;
    }));

    // Suite case
    describe("Recuperación de datos de NewsAPI", function () {

        it("Debe haber una variable status de la petición a newsapi con valor 'ok'", function () {

            DataNewsAPIFactory.getTopHeadlines('el-mundo')
                .then(function (news) {
                    expect(news.status).equal('ok');
                })
                .catch(function (err) {
                    fail('Encontrado error: '+err);
                });

        });
    });

});
