Highcharts.setOptions({
  chart: {
    style: {
      fontFamily: 'Montserrat'
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          navigator: {
            enabled: false
          }
        }
      }]
    },
  },
});
