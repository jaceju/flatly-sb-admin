'use strict';

var angular = window.angular;

(function () {
    var app = angular.module('sbAdminApp', ['sbAdminModule', 'ngRoute']);
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: '../partial/dashboard.html'
            }).
            when('/charts/flot', {
                templateUrl: '../partial/flot.html'
            }).
            when('/charts/morris', {
                templateUrl: '../partial/dashboard.html'
            }).
            when('/tables', {
                templateUrl: '../partial/tables.html'
            }).
            when('/forms', {
                templateUrl: '../partial/forms.html'
            }).
            when('/ui-elements/panels-wells', {
                templateUrl: '../partial/panels-wells.html'
            }).
            when('/ui-elements/buttons', {
                templateUrl: '../partial/buttons.html'
            }).
            when('/ui-elements/notifications', {
                templateUrl: '../partial/notifications.html'
            }).
            when('/ui-elements/typography', {
                templateUrl: '../partial/typography.html'
            }).
            when('/ui-elements/grid', {
                templateUrl: '../partial/grid.html'
            });
    }]);
})();
