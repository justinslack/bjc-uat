Highcharts.chart('eskom', {

  chart: {
    zoomType: 'x'
  },

  title: {
    text: 'Eskom debt over time'
  },

  subtitle: {
    text: document.ontouchstart === undefined ?
        'Click and drag in the chart area to zoom in' : 'Pinch the chart to zoom in'
  },

  yAxis: {
    title: {
      text: 'Millions of Rand',
      offset: 70
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
    color: '#eb667c',
    name: 'Eskom debt',
    data: [156,	143, 133, 135, 147, 46678, 67057, 77230, 103523, 125125, 149944, 174586, 218199, 242984, 264843, 283542]
  }]
 
});