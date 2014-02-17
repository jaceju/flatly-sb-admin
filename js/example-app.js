'use strict';

var angular = window.angular;

(function () {
    var app = angular.module('sbAdminApp', ['sbAdminModule', 'sbFlotModule', 'ngRoute']);
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: '../partial/dashboard.html',
                controller: 'SbDashboardCtrl'
            }).
            when('/charts/flot', {
                templateUrl: '../partial/flot.html',
                controller: 'SbFlotCtrl'
            }).
            when('/charts/morris', {
                templateUrl: '../partial/morris.html',
                controller: 'SbMorrisCtrl'
            }).
            when('/tables', {
                templateUrl: '../partial/tables.html',
                controller: 'SbTablesCtrl'
            }).
            when('/forms', {
                templateUrl: '../partial/forms.html',
                controller: 'SbFormsCtrl'
            }).
            when('/ui-elements/panels-wells', {
                templateUrl: '../partial/panels-wells.html',
                controller: 'SbPanelsWellsCtrl'
            }).
            when('/ui-elements/buttons', {
                templateUrl: '../partial/buttons.html',
                controller: 'SbButtonsCtrl'
            }).
            when('/ui-elements/notifications', {
                templateUrl: '../partial/notifications.html',
                controller: 'SbNotificationsCtrl'
            }).
            when('/ui-elements/typography', {
                templateUrl: '../partial/typography.html',
                controller: 'SbTypographyCtrl'
            }).
            when('/ui-elements/grid', {
                templateUrl: '../partial/grid.html',
                controller: 'SbGridCtrl'
            });
    }]).
    controller('SbDashboardCtrl', function ($scope) {
        $scope.$parent.pageHeader = 'Dashboard';

        Morris.Area({
            element: 'morris-area-chart',
            data: [{
                period: '2010 Q1',
                iphone: 2666,
                ipad: null,
                itouch: 2647
            }, {
                period: '2010 Q2',
                iphone: 2778,
                ipad: 2294,
                itouch: 2441
            }, {
                period: '2010 Q3',
                iphone: 4912,
                ipad: 1969,
                itouch: 2501
            }, {
                period: '2010 Q4',
                iphone: 3767,
                ipad: 3597,
                itouch: 5689
            }, {
                period: '2011 Q1',
                iphone: 6810,
                ipad: 1914,
                itouch: 2293
            }, {
                period: '2011 Q2',
                iphone: 5670,
                ipad: 4293,
                itouch: 1881
            }, {
                period: '2011 Q3',
                iphone: 4820,
                ipad: 3795,
                itouch: 1588
            }, {
                period: '2011 Q4',
                iphone: 15073,
                ipad: 5967,
                itouch: 5175
            }, {
                period: '2012 Q1',
                iphone: 10687,
                ipad: 4460,
                itouch: 2028
            }, {
                period: '2012 Q2',
                iphone: 8432,
                ipad: 5713,
                itouch: 1791
            }],
            xkey: 'period',
            ykeys: ['iphone', 'ipad', 'itouch'],
            labels: ['iPhone', 'iPad', 'iPod Touch'],
            pointSize: 2,
            hideHover: 'auto',
            resize: true
        });

        Morris.Donut({
            element: 'morris-donut-chart',
            data: [{
                label: "Download Sales",
                value: 12
            }, {
                label: "In-Store Sales",
                value: 30
            }, {
                label: "Mail-Order Sales",
                value: 20
            }],
            resize: true
        });

        Morris.Bar({
            element: 'morris-bar-chart',
            data: [{
                y: '2006',
                a: 100,
                b: 90
            }, {
                y: '2007',
                a: 75,
                b: 65
            }, {
                y: '2008',
                a: 50,
                b: 40
            }, {
                y: '2009',
                a: 75,
                b: 65
            }, {
                y: '2010',
                a: 50,
                b: 40
            }, {
                y: '2011',
                a: 75,
                b: 65
            }, {
                y: '2012',
                a: 100,
                b: 90
            }],
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Series A', 'Series B'],
            hideHover: 'auto',
            resize: true
        });
    }).
    controller('SbFlotCtrl', function ($scope) {
        $scope.$parent.pageHeader = 'Flot Charts';
    }).
    controller('SbMorrisCtrl', function ($scope) {
        $scope.$parent.pageHeader = 'Morris Charts';

        Morris.Area({
            element: 'morris-area-chart',
            data: [{
                period: '2010 Q1',
                iphone: 2666,
                ipad: null,
                itouch: 2647
            }, {
                period: '2010 Q2',
                iphone: 2778,
                ipad: 2294,
                itouch: 2441
            }, {
                period: '2010 Q3',
                iphone: 4912,
                ipad: 1969,
                itouch: 2501
            }, {
                period: '2010 Q4',
                iphone: 3767,
                ipad: 3597,
                itouch: 5689
            }, {
                period: '2011 Q1',
                iphone: 6810,
                ipad: 1914,
                itouch: 2293
            }, {
                period: '2011 Q2',
                iphone: 5670,
                ipad: 4293,
                itouch: 1881
            }, {
                period: '2011 Q3',
                iphone: 4820,
                ipad: 3795,
                itouch: 1588
            }, {
                period: '2011 Q4',
                iphone: 15073,
                ipad: 5967,
                itouch: 5175
            }, {
                period: '2012 Q1',
                iphone: 10687,
                ipad: 4460,
                itouch: 2028
            }, {
                period: '2012 Q2',
                iphone: 8432,
                ipad: 5713,
                itouch: 1791
            }],
            xkey: 'period',
            ykeys: ['iphone', 'ipad', 'itouch'],
            labels: ['iPhone', 'iPad', 'iPod Touch'],
            pointSize: 2,
            hideHover: 'auto',
            resize: true
        });

        Morris.Donut({
            element: 'morris-donut-chart',
            data: [{
                label: "Download Sales",
                value: 12
            }, {
                label: "In-Store Sales",
                value: 30
            }, {
                label: "Mail-Order Sales",
                value: 20
            }],
            resize: true
        });

        Morris.Bar({
            element: 'morris-bar-chart',
            data: [{
                y: '2006',
                a: 100,
                b: 90
            }, {
                y: '2007',
                a: 75,
                b: 65
            }, {
                y: '2008',
                a: 50,
                b: 40
            }, {
                y: '2009',
                a: 75,
                b: 65
            }, {
                y: '2010',
                a: 50,
                b: 40
            }, {
                y: '2011',
                a: 75,
                b: 65
            }, {
                y: '2012',
                a: 100,
                b: 90
            }],
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Series A', 'Series B'],
            hideHover: 'auto',
            resize: true
        });

        Morris.Line({
            element: 'morris-line-chart',
            data: [{
                y: '2006',
                a: 100,
                b: 90
            }, {
                y: '2007',
                a: 75,
                b: 65
            }, {
                y: '2008',
                a: 50,
                b: 40
            }, {
                y: '2009',
                a: 75,
                b: 65
            }, {
                y: '2010',
                a: 50,
                b: 40
            }, {
                y: '2011',
                a: 75,
                b: 65
            }, {
                y: '2012',
                a: 100,
                b: 90
            }],
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Series A', 'Series B'],
            hideHover: 'auto',
            resize: true
        });
    }).
    controller('SbTablesCtrl', function ($scope) {
        $scope.$parent.pageHeader = 'Tables';
    }).
    controller('SbFormsCtrl', function ($scope) {
        $scope.$parent.pageHeader = 'Forms';
    }).
    controller('SbPanelsWellsCtrl', function ($scope) {
        $scope.$parent.pageHeader = 'Panels and Wells';
    }).
    controller('SbButtonsCtrl', function ($scope) {
        $scope.$parent.pageHeader = 'Buttons';
    }).
    controller('SbNotificationsCtrl', function ($scope) {
        $scope.$parent.pageHeader = 'Notifications';
    }).
    controller('SbTypographyCtrl', function ($scope) {
        $scope.$parent.pageHeader = 'Typography';
    }).
    controller('SbGridCtrl', function ($scope) {
        $scope.$parent.pageHeader = 'Grid';
    });
})();
