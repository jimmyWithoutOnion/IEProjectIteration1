Chart.pluginService.register({
    beforeDraw: function (chart, easing) {
        if (chart.config.options.chartArea && chart.config.options.chartArea.backgroundColor) {
            var helpers = Chart.helpers;
            var ctx = chart.chart.ctx;
            var chartArea = chart.chartArea;

            ctx.save();
            ctx.fillStyle = chart.config.options.chartArea.backgroundColor;
            ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
            ctx.restore();
        }
    }
});

var YEAR = ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009',
    '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'];
var config = {
    type: 'line',
    data: {
        labels: ['2002', '2003', '2004', '2005', '2006', '2007', '2008'],
        datasets: [{
            label: 'timber',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [10, 20, 40, 35, 17, 28, 38, 50, 60, 30, 50, 44, 59, 50, 34, 48, 60],
            fill: false,
        }, {
            label: 'plasterboard',
            fill: false,
            backgroundColor: 'rgb(98, 223, 255)',
            borderColor: 'rgb(98, 223, 255)',
            data: [26, 30, 37, 28, 40, 49, 70, 45, 66, 40, 35, 17, 28, 35, 17, 28, 38],
        }, {
            label: 'concrete',
            fill: false,
            backgroundColor: 'rgb(98, 223, 255)',
            borderColor: 'rgb(98, 223, 255)',
            data: [15, 40, 29, 53, 40, 44, 55, 64, 47, 30, 37, 28, 40, 49, 70, 45, 66],
        }, {
            label: 'bricks',
            fill: false,
            backgroundColor: 'rgb(98, 223, 255)',
            borderColor: 'rgb(98, 223, 255)',
            data: [50, 33, 47, 60, 32, 43, 60, 46, 75, 53, 40, 44, 55, 60, 30, 50, 44],
        }]
    },
    options: {
        chartArea: {
            backgroundColor: '#ffffff',
        },
        responsive: true,
        title: {
            display: true,
            text: 'Line Chart'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLineColor:'rgb(179, 242, 237)',
                scaleLabel: {
                    display: true,
                    labelString: 'Year'
                }
            }],
            yAxes: [{
                display: true,
                scaleLineColor:'rgb(179, 242, 237)',
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }]
        }
    }
};
window.onload = function() {
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = new Chart(ctx, config);
};

document.getElementById('addData').addEventListener('click', function(datasets) {
    if (config.data.datasets.length > 0) {
        var year = YEAR[config.data.labels.length % YEAR.length];
        config.data.labels.push(year);
        config.data.datasets.forEach(function(dataset) {
            dataset.data.push(datasets);
        });
        window.myLine.update();
    }
});

document.getElementById('removeData').addEventListener('click', function() {
    config.data.labels.splice(-1, 1); // remove the label first
    config.data.datasets.forEach(function(dataset) {
        dataset.data.pop();
    });
    window.myLine.update();
});