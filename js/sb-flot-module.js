angular.module('sbFlotModule', []).
    directive('sbFlotLineChart', function () {
        return {
            restrict: 'E',
            replace: true,
            compile: function (element) {
                element.replaceWith($('<div class="flot-chart-content"></div>'));

                return function (scope, element) {
                    var offset = 0;
                    var sin = [],
                        cos = [];
                    for (var i = 0; i < 12; i += 0.2) {
                        sin.push([i, Math.sin(i + offset)]);
                        cos.push([i, Math.cos(i + offset)]);
                    }

                    var options = {
                        series: {
                            lines: {
                                show: true
                            },
                            points: {
                                show: true
                            }
                        },
                        grid: {
                            hoverable: true //IMPORTANT! this is needed for tooltip to work
                        },
                        yaxis: {
                            min: -1.2,
                            max: 1.2
                        },
                        tooltip: true,
                        tooltipOpts: {
                            content: "'%s' of %x.1 is %y.4",
                            shifts: {
                                x: -60,
                                y: 25
                            }
                        }
                    };

                    $.plot(element, [{
                        data: sin,
                        label: "sin(x)"
                    }, {
                        data: cos,
                        label: "cos(x)"
                    }],
                        options);
                };
            }
        };
    });
