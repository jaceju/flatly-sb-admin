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
    directive('sbTopNavMessages', function() {
        return {
            restrict: "E",
            replace: true,
            templateUrl: '../partial/top-nav-messages.html'
        };
    }).
    directive('sbTopNavTasks', function() {
        return {
            restrict: "E",
            replace: true,
            templateUrl: '../partial/top-nav-tasks.html'
        };
    }).
    directive('sbTopNavAlerts', function() {
        return {
            restrict: "E",
            replace: true,
            templateUrl: '../partial/top-nav-alerts.html'
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
    }).
    directive('sbMetisMenu', function () {
        return {
            restrict: 'A',
            replace: false,
            transclude: false,
            compile: function (element, attrs) {
                return function (scope, element, attrs, controller) {
                    element.metisMenu();
                };
            }
        };
    });
