angular.module('sbAdminModule', []).
    directive('sbTopNav', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                title: '='
            },
            templateUrl: '../partial/layouts/top-nav.html'
        };
    }).
    directive('sbTopNavMessages', ['$http', function($http) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '../partial/layouts/top-nav-messages.html',
            link: function (scope, element, attrs) {
                if (!attrs.from) {
                    throw new Error('Attribute "from" should be defined.')
                }

                scope.messages = [];
                $http.get(attrs.from).success(function (data) {
                    scope.messages = data;
                });
            }
        };
    }]).
    directive('sbTopNavTasks', ['$http', function($http) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '../partial/layouts/top-nav-tasks.html',
            link: function (scope, element, attrs) {
                if (!attrs.from) {
                    throw new Error('Attribute "from" should be defined.')
                }

                scope.tasks = [];
                $http.get(attrs.from).success(function (data) {
                    scope.tasks = data;
                });
            }
        };
    }]).
    directive('sbTopNavAlerts', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '../partial/layouts/top-nav-alerts.html'
        };
    }).
    directive('sbTopNavUser', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '../partial/layouts/top-nav-user.html'
        };
    }).
    directive('sbSidebar', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '../partial/layouts/sidebar.html'
        };
    }).
    directive('sbSidebarSearch', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '../partial/layouts/sidebar-search.html'
        };
    }).
    directive('sbSidebarMenus', ['$http', '$timeout', function ($http, $timeout) {
        return {
            restrict: 'A',
            replace: false,
            transclude: false,
            link: function (scope, element, attrs) {
                if (!attrs.menusUrl) {
                    throw new Error('Attribute "menus-url" should be defined.')
                }

                scope.menus = [];
                $http.get(attrs.menusUrl).success(function (data) {
                    scope.menus = data;

                    $timeout(function () {
                        element.metisMenu();
                    });
                });
            }
        };
    }]).
    directive('sbDatatables', function () {
        return {
            restrict: 'A',
            replace: false,
            transclude: false,
            link: function (scope, element) {
                element.dataTable();
            }
        };
    }).
    directive('sbTooltip', function () {
        return {
            restrict: 'A',
            replace: false,
            transclude: false,
            link: function (scope, element) {
                element.tooltip({
                    selector: "[data-toggle=tooltip]",
                    container: "body"
                });
            }
        };
    }).
    directive('sbPopover', function () {
        return {
            restrict: 'A',
            replace: false,
            transclude: false,
            link: function (scope, element) {
                element.find('[data-toggle=popover]').popover();
            }
        };
    });
