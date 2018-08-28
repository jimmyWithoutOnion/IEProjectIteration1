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

var DATA = {
    "data": {
        "area": "Southbank",
        "year": [2002, 2003, 2004, 2005, 2006, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
        "timber": [663004.5, 92184.5, 435450.0, 298578.5, 369478.5, 6274.0, 603561.5, 644821.0, 158797.5, 177346.0, 592557.5, 179394.0, 738220.5, 399174.0, 419187.0, 560068.5],
        "plasterboard": [3182421.6, 442485.6, 2090160.0, 1433176.8, 1773496.8, 30115.199999999997, 2897095.1999999997, 3095140.8, 762228.0, 851260.7999999999, 2844276.0, 861091.2, 3543458.4, 1916035.2, 2012097.5999999999, 2688328.8],
        "concrete": [1326009, 184369, 870900, 597157, 738957, 12548, 1207123, 1289642, 317595, 354692, 1185115, 358788, 1476441, 798348, 838374, 1120137],
        "bricks": [994506.75, 138276.75, 653175.0, 447867.75, 554217.75, 9411.0, 905342.25, 967231.5, 238196.25, 266019.0, 888836.25, 269091.0, 1107330.75, 598761.0, 628780.5, 840102.75],
        "tiles": [3182421.6, 442485.6, 2090160.0, 1433176.8, 1773496.8, 30115.199999999997, 2897095.1999999997, 3095140.8, 762228.0, 851260.7999999999, 2844276.0, 861091.2, 3543458.4, 1916035.2, 2012097.5999999999, 2688328.8]
    }
};

var YEAR = DATA.data.year;

var config = {
    type: 'line',
    data: {
        labels: DATA.data.year,
        datasets: [{
            label: 'Timber',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: DATA.data.timber,
            fill: false,
        }, {
            label: 'Plasterboard',
            fill: false,
            backgroundColor: 'rgb(98, 223, 255)',
            borderColor: 'rgb(98, 223, 255)',
            data: DATA.data.plasterboard,
        }, {
            label: 'Concrete',
            fill: false,
            backgroundColor: 'rgb(205, 97, 255)',
            borderColor: 'rgb(205, 97, 255)',
            data: DATA.data.concrete,
        }, {
            label: 'Bricks',
            fill: false,
            backgroundColor: 'rgb(63, 132, 63)',
            borderColor: 'rgb(63, 132, 63)',
            data: DATA.data.bricks,
        }, {
            label: 'Tiles',
            fill: false,
            backgroundColor: 'rgb(242, 242, 26)',
            borderColor: 'rgb(242, 242, 26)',
            data: DATA.data.tiles,
        }],
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
                    scaleLineColor: 'rgb(179, 242, 237)',
                    scaleLabel: {
                        display: true,
                        labelString: 'Year'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLineColor: 'rgb(179, 242, 237)',
                    scaleLabel: {
                        display: true,
                        labelString: 'Tonnes of Waste'
                    }
                }]
            }
        }
    }
};

function getSelectSuburb()
{
    var selectedValue = document.getElementById("SuburbSelect").value;
    DATA.data.area = selectedValue;
    console.log(selectedValue);
}

window.onload = function () {
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = new Chart(ctx, config);
};

// document.getElementById('addData').addEventListener('click', function (datasets) {
//     if (config.data.datasets.length > 0) {
//         var year = YEAR[config.data.labels.length % YEAR.length];
//         config.data.labels.push(year);
//         config.data.datasets.forEach(function (dataset) {
//             dataset.data.push(datasets);
//         });
//         window.myLine.update();
//     }
// });
//
// document.getElementById('removeData').addEventListener('click', function () {
//     config.data.labels.splice(-1, 1); // remove the label first
//     config.data.datasets.forEach(function (dataset) {
//         dataset.data.pop();
//     });
//     window.myLine.update();
// });
