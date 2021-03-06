describe("Tests view 'latest-news'", function () {

    var $controller;

    beforeEach(module("NewsApp"));
    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    // Suite case para el controlador
    describe("Controlador LatestNewsCtrl", function () {
        var $scope, controller;

        beforeEach(function() {
           $scope = {};
           controller = $controller('LatestNewsCtrl', { $scope: $scope });
        });

        it("Debe haber una variable topheadlines con valores cargados", function () {
            expect($scope.topheadlines).toBeDefined();
        });
    });

});
