angular.module('sbAdminModule', []).
    directive('sbTopNav', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                title: '='
            },
            templateUrl: '../partial/top-nav.html'
        };
    }).
    directive('sbTopNavMessages', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '../partial/top-nav-messages.html'
        };
    }).
    directive('sbTopNavTasks', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '../partial/top-nav-tasks.html'
        };
    }).
    directive('sbTopNavAlerts', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '../partial/top-nav-alerts.html'
        };
    }).
    directive('sbTopNavUser', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '../partial/top-nav-user.html'
        };
    }).
    directive('sbSidebar', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '../partial/sidebar.html'
        };
    }).
    directive('sbSidebarSearch', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '../partial/sidebar-search.html'
        };
    }).
    directive('sbSidebarMenus', ['$http', '$timeout', function ($http, $timeout) {
        return {
            restrict: 'A',
            replace: false,
            transclude: false,
            link: function (scope, element) {
                scope.menus = [];
                $http.get('/examples/json/menus.json').success(function (data) {
                    scope.menus = data;

                    $timeout(function () {
                        element.metisMenu();
                    });
                });
            }
        };
    }]);