Highcharts.chart('container', {

  chart: {
    style: {
      fontFamily: 'Montserrat'
    }
  },

  title: {
    text: 'Eskom debt over time'
  },

  yAxis: {
    title: {
      text: 'Millions of Rand'
    }
  },
  legend: {
    enabled: false
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
        },
      pointStart: 2004
    }
  },

  tooltip: {
    pointFormat: '<span>{series.name}</span>: <b>R{point.y}m</b>',
    valueDecimals: 0,
    split: true,
    shadow: false
  },

  series: [{
    color : '#eb667c',
    name: 'Eskom debt',
    data: [156,	143, 133, 135, 147, 46678, 67057, 77230, 103523, 125125, 149944, 174586, 218199, 242984, 264843, 283542]
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      }
  }]
 }
});