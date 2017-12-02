var app = angular.module("NewsApp");

app.directive("ngActiveLink",["$location", function ($location) {
    return {
        restrict: 'A', //use as attribute
        scope: false,
        link: function (scope, element, attrs) {

            function setActive () {
                var path = $location.path();
                if (path) {
                    angular.forEach(element.find('a'), function(a) {
                        if (a.href.match('#' + path + '(?=\\?|$)')) {
                            angular.element(a).addClass('active');
                        } else {
                            angular.element(a).removeClass('active');
                        }
                    });
                }
            };

            scope.$on('$locationChangeSuccess', setActive);
        }
    }
}]);