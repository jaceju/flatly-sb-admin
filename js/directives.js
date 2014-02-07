angular.module('sbAdminDirectives', []).
    directive('sbTopNav', function() {
        return {
            restrict: "E",
            replace: true,
            scope: {
                title: "="
            },
            templateUrl: '../partial/top-nav.html'
        };
    }).
    directive('sbTopNavUser', function() {
        return {
            restrict: "E",
            replace: true,
            templateUrl: '../partial/top-nav-user.html'
        };
    }).
    directive('sbSidebar', function () {
        return {
            restrict: "E",
            replace: true,
            templateUrl: '../partial/sidebar.html'
        };
    });
